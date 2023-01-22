import React from "react"
import './articles.css'
import { Link } from "gatsby"

const Articles = () => {

  //<li><Link to="/blog/my_solution_to_new_years_resolutions">2023 Jan 19 &ndash; My Solution to New Years Resolutions</Link></li> 

	return(
		<div className="articles-container">
        <div id="2023">
          <h1>2023</h1>
          <ul className="articles-list">
          </ul>
        </div>
        <div  id="2021">
          <h1>2021</h1>
          <ul className="articles-list">
                <li><Link to="/blog/how_the_blog_works">2021 Dec 01 &ndash; How the Blog Works</Link></li>
                <li><Link to="/blog/revamping_my_website_and_making_a_blog">2021 Nov 21 &ndash; Revamping My Website and Making a Blog</Link></li>
          </ul>
        </div>
		</div>
	)
}

export default Articles;
