import React from "react"
import './style.css'
import { Link } from "gatsby"

const Articles = () => {

	return(
		<div className="articles-container">
			<ul className="articles-list">
			<h1>2021</h1>
				<li>2021 Dec 01 &ndash; <Link to="/blog/how_the_blog_works">How the Blog Works</Link></li>
				<li>2021 Nov 21 &ndash; <Link to="/blog/revamping_my_website_and_making_a_blog">Revamping My Website and Making a Blog</Link></li>
			</ul>
		</div>
	)
}

export default Articles;