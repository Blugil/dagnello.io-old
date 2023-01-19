import React from "react"
import './style.css'
import { Link } from "gatsby"

const Articles = () => {

	return(
		<div className="articles-container">
			<ul className="articles-list">
      <h1>2033</h1>
				<li><Link to="/blog/my_solution_to_new_years_resolutions">2023 Jan 19 &ndash; My Solution to New Years Resolutions</Link></li>
			<h1>2021</h1>
				<li><Link to="/blog/how_the_blog_works">2021 Dec 01 &ndash; How the Blog Works</Link></li>
				<li><Link to="/blog/revamping_my_website_and_making_a_blog">2021 Nov 21 &ndash; Revamping My Website and Making a Blog</Link></li>
			</ul>
		</div>
	)
}

export default Articles;
