import React from "react"; 

import {Helmet} from "react-helmet"

import {Link} from "gatsby";

import "../../articles/style.css";

import BackButton from "../../articles/back_button/back_button";


const Article = () => {

    return (

	<React.Fragment>

	<Helmet>
		<title>How the Blog Works | Dominick Agnello</title>
	</Helmet>

	<div className='article-container'>
    <div className='entry'>

		<BackButton />

        <h1 id='how_the_blog_works'>How the Blog Works</h1>

		<div className="small">
			<small>by <Link to="/">Dominick Agnello</Link></small>
			<small> | Wed, 01 Dec 2021 01:34:28 -0700</small>
		</div>

        <div>
    
            <p>
                Think of a typical modern blog for a moment. Your brain might have wandered to thinking of an intricate frontend, some CMS as a backend (bonus points if it includes some form of it's own editor), 
                or maybe a site like Wordpress? The tools you may have thought of are excellent, maybe you even use them yourself, but they're not what I want my blog to be.
            </p>
            <p>
                I want my blog to be a modernization of traditional techniques. I want the entirety of my website and blog content to be files owned by me stored on my own computer. I want the freedom 
                to write blog posts without the need for an internet connection. And lastly I want to be free of reliance from as many third party tools as possible. With those desires in mind, my 
                blog was born.
            </p>
            <p>
                This blog actually works in a relatively simple manner compared to most other "modern" blogs on the internet. There are no backend api calls, 
                no complicated system of microservices for storing text in one database and images in another. Just a small (100 LOC) script that generates 
                static jsx files that are already templated in my article form. I just open up my editor, write my article, and push to Github and my site is updated.
            </p>
            <h3>The Script</h3>
            <p>
                A Bash script is what handles most of the magic on this website. Originally authored by <span><a href="https://lukesmith.xyz" target="_blank" rel="no-refferer">Luke Smith</a></span>,
                this scrtipt's original purpose was to generate and link static html pages. While I love the idea of a website that uses absolutely no Javascript, I already had most of the UI developed 
                for this site in react so I made some minor modifications.
            </p>
            <p>
                The structure is still similar to theirs, most of what I changed revoles around the output file template. It goes as follows:
                <ol>
                    <li>
                        The script creates a blank JSX file in the .drafts folder, this is where I typically write out the blog in it's rough form.
                    </li>
                    <li>
                        Once I'm done writing, I can close the text editor and let the file sit in the drafts folder until I'm ready to publish. 
                    </li>
                    <li>
                        When I'm ready to publish my post, a file with the same name is created in the /src/pages/blog directory, this file is templated to match the style of all my blog posts. 
                    </li>
                    <li>
                        The script then copies the contents of the original draft into the body of that predesigned article template.                     
                    </li>
                    <li>
                        Finally an html list element is added to the blog index page which makes sure it shows up as a clickable link on one of my website's main pages.
                    </li>
                </ol>
            </p>
            <h3>Hosting</h3>
            <p>
                This website is hosted on Netlify with a free-tier plan, I went with them for a few reasons. I've used their services before and I'm comfortable with them. Because it's free it only costs the 
                domain renewal to keep this website running. It pulls directly from Github meaning it seamlessly integrates with my method of static blog page generation and only takes one command 
                to update the live site. And it allows for the easiest form submission generation I've ever seen.
            </p>
            <h3>Closing Thoughts</h3>
            <p>
                I really love what I've got going here. I always felt as though the paralyzing nature of choice is what keeps new developers from actually making things. "What stack should I use for my project?", 
                "Is this language the best for this application?", "What are the best programming languages for new developers?". These are all questions that mean very little in the context of actually making.
            </p>
            <p>
                What's important is to find something, anything, and just use it to do what you've set out to do. You might find that you either love what you've chosen and will continue to use it, 
                or feel like certain aspects are lacking. If you find yourself dissatisfied with a stack or language you've chosen for a certain task that's the point I would I recommend 
                trying to learn something new.
            </p>

		</div>

        <footer>
            <small> <BackButton /> </small>
			<small>by <Link to="/">Dominick Agnello</Link></small>
			<small> | Wed, 01 Dec 2021 01:34:28 -0700</small>
		</footer>

    </div>

	</div>

	</React.Fragment>

    )

}

 export default Article
