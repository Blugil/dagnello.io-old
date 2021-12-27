import React from "react"; 
import {Helmet} from "react-helmet"
import {Link} from "gatsby";
import "../../articles/style.css";
import BackButton from "../../articles/back_button/back_button";


const Article = () => {

    return (

		<React.Fragment>
			<Helmet>
				<title>Revamping My Website and Making a Blog | Dominick Agnello</title>
			</Helmet>
			<div className='article-container'>
				<div className='entry'>

					<BackButton />

					<h1 id='revamping_my_website_and_making_a_blog'>Revamping My Website and Making a Blog</h1>

					<div>
						<p>
							Hello! If you're seeing this that means I've finally figured out how to get my blog functioning and finally got my website hosted.
							I wanted to revamp the old <span>dagnello.io</span> site, it needed a little bit of "21st century love" as it was still uses jQuery (no shade jQuery was revolutionary).
							What you're seeing here is the new site, complete with brand new blog.
						</p>
						<p>
							My blogs will be bad, to start, as all things are when people start. Spelling errors might be rampant and my thoughts might make no sense. 
							However, I've been a very opinionated person for a long time and rather than telling my friends my luke warm takes, I'd rather write them out here (and also keep telling them).
							If you like my blog...you might have difficulty keeping up with it as I have no RSS feed, but I'm working on that. 
						</p>
						<p>
							Overall I'm pleased with the current site and the current setup. My next post will be a little bit about how the blog system works (and who I stole it from).
							Of course there are still some missing pages, most notably my <Link to="/projects"><span>projects</span></Link> page and my <Link to="/contact"><span>contact</span></Link> page 
							(at the time of writing). Everything's getting a revamp soon and I hope you're excited. 
							For now just sit back, relax, and read at your leisure. I wont be stopping any time soon.
						</p>
					</div>

					<footer>
						<small> <BackButton /> </small>
						<small>by <Link to="/">Dominick Agnello</Link></small>
						<small> | Sun, 21 Nov 2021 06:02:39 -0700</small>
					</footer>

				</div>
			</div>
		</React.Fragment>
    )
}

 export default Article