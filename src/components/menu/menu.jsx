import React, { useEffect } from 'react';

import './menu.css'

const Menu = (props) => {
	return(
		<div className="container">
			<ul className="nav">
				<li>
					<div className="item">
						<div id="active" className="bar"></div>
						Home
					</div>
				</li>	
				<li>
					<div className="item">
						<div className="bar"></div>
						Articles
					</div>
				</li>	
				<li>
					<div className="item">
						<div className="bar"></div>
						Projects
					</div>
				</li>	
				<li>
					<div className="item">
						<div className="bar"></div>
						Contact
					</div>
				</li>	
			</ul>
		</div>
	)
}

export default Menu;