import React from 'react';
import { Link } from 'gatsby';

import './menu.css'

const Menu = (props) => {
	return(
		<div className="container">
			<ul className="nav">
				<li className="navitem">
					<Link to="/"
					activeClassName="active">
						<div className="item">
							<div className="bar"></div>
							Home
						</div>
					</Link>
                <li className="navitem">
					<Link to="/resume"
					activeClassName="active">
						<div className="item">
							<div className="bar"></div>
							Resume
						</div>
					</Link>
				</li>	
				</li>	
				<li className="navitem">
					<Link to="/blog"
					activeClassName="active">
						<div className="item">
							<div className="bar"></div>
							Blog
						</div>
					</Link>
				</li>	
				<li className="navitem">
					<Link to="/projects"
					activeClassName="active">
						<div className="item">
							<div className="bar"></div>
							Projects
						</div>
					</Link>
				</li>	
				<li className="navitem">
					<Link to="/contact"
					activeClassName="active">
						<div className="item">
							<div className="bar"></div>
							Contact
						</div>
					</Link>
				</li>	
			</ul>
		</div>
	)
}

export default Menu;
