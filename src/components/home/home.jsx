import React from 'react';
import { Link } from 'gatsby';
import resume from "../../../static/resume.pdf"

import "./home.css";

const home = () => {

	return(
		<div id="home-container">
			<div className="section">
				<h1>Recent Articles</h1>
				<ul>
					<li>2021 Nov 21 &ndash; <Link to="/blog/revamping_my_website_and_making_a_blog">Revamping My Website and Making a Blog</Link></li>
				</ul>
			</div>

			<div className="section">
				<h1>Check out my Resume!</h1>
				<small><Link to="/resume"><span>website link</span></Link> | <a href={resume} download><span>pdf download</span></a></small>
				<p>
					I've got quite a bit of experience in a few different fields such as: ReactJS front end development for a major design firm,
					teaching experience with programming (C/C++/Scheme/Bash/Prolog), and customer focused service work. If you think my skills and I
					would be a good fit feel free to...
				</p>
			</div>

			<div className="section">
				<h1>Contact Me</h1>
				<p>
					I'm always looking to make new connections and explore new opportunities to both demonstrate and expand my skills. 
					If you decide I'd be a good fit for a team or project after taking a look at my resume and/or a few of my posts, click <Link to="/contact"><span>here </span></Link>
					and leave your name, a return email, and some information. I'll respond as soon as I'm able.
				</p>
			</div>	

		</div>
	)
}

export default home;
