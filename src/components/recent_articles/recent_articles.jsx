import React from 'react';
import { Link } from 'gatsby';

import "./recent_articles.css";

const recent = () => {
  return (   
    <div className='recent-articles-container'>
        <h1>Recent Articles</h1>
        <ul>
          <li><Link to="/blog/my_solution_to_new_years_resolutions">2023 Jan 19 &ndash; <span>My Solution to New Years Resolutions</span></Link></li> 
          <li><Link to="/blog/how_the_blog_works">2021 Dec 01 &ndash; <span>How the Blog Works</span></Link></li>
          <li><Link to="/blog/revamping_my_website_and_making_a_blog">2021 Nov 21 &ndash; <span>Revamping My Website and Making a Blog</span></Link></li>
        </ul>
    </div>
  )
}

export default recent;
