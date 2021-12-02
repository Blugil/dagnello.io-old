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
	This blog actually works in a relatively simple manner compared to most other "modern" blogs on the internet. There are no backend api calls, 
	no complicated system of microservices for storing text in one database and images in another. Just a small (100 LOC) script that generates 
	static jsx files that are already templated in my article form. I just open up VS Code, write my article, and push to Github and my site is updated.
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
			The script creates a blank JSX file in the /src/pages/blog/.drafts directory, this is where I typically write out the blog in it's rough form.
		</li>
		<li>
			Once I'm done writing, I can simply close the text editor and let my blog remain in the .drafts directory, maybe even work on another post (since the script supports 
			more than one active blog) or I can choose to publish.
		</li>
		<li>
			Once I press publish a file with the same name is created in the /src/pages/blog directory, this file is templated to match the style of all my blog posts. 
		</li>
		<li>
			The script then copies the contents of the original .drafts file into a specific location using the <span>sed</span> Linux command. 
		</li>
		<li>
			Finally the script adds an html list element to a specified location in the /src/pages/blog.js file which makes sure it shows up as a clickable link on of my website's main pages.
		</li>
	</ol>
	While the script may be a bit complicated for those who aren't the most familiar with Bash (like myself), the core parts that need to be changed are: the html template to match 
	any predefined template you would want and the more specific user/directory related parameters.
</p>
<h3>Hosting</h3>
<p>
	This website is hosted on Netlify with a free-tier plan. I chose their service for a few reasons: 1) I've used their services before and I'm comfortable with them, 2) I costs me only the 
	upkeep of the domain to keep this website running, and 3) It pulls directly from Github meaning I can have my website be open source, seamlessly integrate my method of static blog page 
	generation, and update my website via git rather than an uncomfortable GUI.
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

		<div className="small">
			<small>by <Link to="/">Dominick Agnello</Link></small>
			<small> | Wed, 01 Dec 2021 01:34:28 -0700</small>
		</div>

    </div>

	</div>

	</React.Fragment>

    )

}

 export default Article