#!/bin/bash

name="Dominick Agnello"
webdir="src/pages"
website="https://dagnello.io/" # keeps trailing slash
css="../../articles/style.css"
indexfile="src/articles/articles.jsx"
# require="\/\/<!-- Require -->"
link="<h1>2021<\/h1>"

archivefile="$webdir/blog/.htaccess"
EDITOR="nvim"

#initialzies the drafts directory
[ ! -d "$webdir/blog/.drafts" ] &&
read -erp "Initialize blog in $webdir?" ask &&
	if [ "$ask" = "y" ]; then
	printf "Initializing blog system...\\n"
	mkdir -pv "$webdir/blog/.drafts" || printf "Error. Do you have write permissions in this directory?\\n"
	echo "Options +Indexes" > "$archivefile"
else
	exit
fi

newpost() { read -erp "Give a title for your post:
	" title
    # make sure no double quotes with a pipe into grep
	echo "$title" | grep -q "\"" && printf "Double quotation marks (\") are not allowed in entry titles.\\n" && exit

    # sets the url equal to the given blog title all lowercase with no spaces (cannot understand the sed script atm)
	url="$(echo "$title" | iconv -c -f UTF-8 -t ASCII//TRANSLIT | tr -d '[:punct:]' | tr '[:upper:]' '[:lower:]' | tr ' ' '_' | sed "s/-\+/-/g;s/\(^-\|-\$\)//g")"

    # adds everything to the archive file
	echo "AddDescription \"$title\" \"$url.jsx\"" >>  "$archivefile"|| { echo "Error: Is $archivefile writeable?"; exit; }

    #double checks if that post already exists
	( [ -f "$webdir/blog/.drafts/$url.jsx" ] || [ -f "$webdir/blog/$url.jsx" ] ) && echo "There is already an existing draft or post of that same name/URL." && exit

    #allows us to start writing the draft
	$EDITOR "$webdir/blog/.drafts/$url.jsx";
}

# lists all current drafts
listandReturn() {
	printf "Listing contents of %s\\n" "$1"
	case "$(ls "$1" | wc -l)" in
		0) echo "There's nothing to $2." && exit 1 ;;
		1) number=1 && printf "There's only one entry to %s.\\nDefaulting selection to %s\\n" "$2" "$(ls -rc "$1" | awk -F '/' '{print $NF}')" ;;
		*) ls -rc "$1" | awk -F '/' '{print $NF}' | nl
                read -erp "Pick an entry by number to $2, or press Ctrl-C to cancel. " number ;;
	esac
	chosen="$(ls -rc "$1" | nl | grep -w " $number" | awk '{print $2}')"
	basefile="$(basename "$chosen")" && base="${basefile%.*}"
}

publish() { \
	delete draft
	htaccessentry=$(grep "$basefile" "$archivefile")
	realname="$(echo "$htaccessentry" | cut -d'"' -f2)"
	rssdate="$(grep "$basefile" $webdir/blog/.htaccess | sed "s/.*\.jsx\"* *#*//g" | tr -d '\n')"
	[ -z "$rssdate" ] && rssdate="$(LC_TIME=en_US date '+%a, %d %b %Y %H:%M:%S %z')" # RSS date formats must comply with standards to validate.
	webdate="$(date '+%a, %d %b %Y %H:%M:%S %z')" # But this visible date you can set to any format.
	tmpdir=$(mktemp -d)
    # printf "let %s = require(\"./blog/%s\");\n" "$base" "$basefile" > "$tmpdir/require"
    printf "\\t\\t\\t\\t<li><Link to=\"/blog/%s\">%s &ndash; %s</Link></li>\n" "$base" "$(date '+%Y %b %d')"  "$realname" > "$tmpdir/link"
    # printf doesn't need \n if newlines are added in print block
    printf "import React from \"react\"; 
import {Helmet} from \"react-helmet\"
import {Link} from \"gatsby\";
import \"$css\";
import BackButton from \"../../articles/back_button/back_button\";\\n\\n
const Article = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>%s | %s</title>
            </Helmet>
            <div className='article-container'>
                <div className='entry'>
                    <BackButton />
                    <h1 id='%s'>%s</h1>
                    <div className=\"small\">
                        <small>by <Link to=\"/\">%s</Link></small>
                        <small> | %s</small>
                    </div>
                    <div>
                    %s\\n
                    </div>
                    <footer>
                        <small>by <Link to=\"/\">%s</Link></small>
                        <small> | %s</small>\\n
                    </footer>
                </div>
            </div>
        </React.Fragment>
    )\\n
}\\n\\n export default Article" "$realname" "$name" "$base" "$realname" "$name" "$webdate" "$(cat "$webdir/blog/.drafts/$basefile")" "$name" "$webdate" > "$webdir/blog/$basefile"
	# sed -i "" "/$require/r $tmpdir/require" "$indexfile"
	sed -i "/$link/r $tmpdir/link" "$indexfile"
	sed -i "/ \"$base.jsx\"/d" "$archivefile"
	echo "AddDescription \"$realname\" \"$basefile\" #$rssdate" >> "$archivefile"
	rm -f "$webdir/blog/.drafts/$chosen"
}

delete() { \
#	sed -i "/<item/{:a;N;/<\\/item>/!ba};/#$base<\\/guid/d" "$rssfile"
	sed -i "/<li>.*<Link to=\"blog\/$base.jsx\">/d" "$indexfile"
	rm -f "$webdir/blog/$basefile" && [[ "$1" != "draft" ]] && printf "Old blog entry removed.\\n";}

revise() { awk '/^<small>\[/{flag=1;next}/<footer>/{flag=0}flag' "$webdir/blog/$chosen" > "$webdir/blog/.drafts/$basefile"
	"$EDITOR" "$webdir/blog/.drafts/$basefile"
	printf "Revision stored in blog/.drafts. Publish as normal entry when desired.\\n" ;
}

case "$1" in
	n*) newpost ;;
	e*) listandReturn "$webdir"/blog/.drafts/ edit && "$EDITOR" "$webdir/blog/.drafts/$chosen" ;;
	p*) listandReturn "$webdir"/blog/.drafts/ publish && publish ;;
	t*) listandReturn "$webdir"/blog/.drafts/ trash && confirm trash && rm -f "$webdir/blog/.drafts/$chosen" && sed -i "/ \"$base.jsx\"/d" "$archivefile" ; printf "Draft deleted.\\n" ;;
	d*) listandReturn "$webdir"/blog/ delete && confirm delete && delete && sed -i "/ \"$base.jsx\"/d" "$archivefile" ;;
	r*) listandReturn "$webdir"/blog/ revise && revise ;;
    *) printf "db blog system by Dominick Agnello (inspired by lb by Luke Smith) <luke@lukesmith.xyz>\\n
                Usage:\\n  
                db n:\\tnew draft\\n  
                db e:\\tedit draft\\n  
                db p:\\tpublish/finalize draft\\n  
                db r:\\trevise published entry\\n  
                db t:\\tdiscard draft\\n  
                db d:\\tdelete published entry\\n\\n
                Be sure to have the following pattern added to your RSS feed, blog file and blog index:\\n\\n<!-- LB -->\\n\\nNew content will be added directly below that sequence. This is required.\\nSee https://github.com/LukeSmithxyz/lb for more.\\n" ;;
esac
