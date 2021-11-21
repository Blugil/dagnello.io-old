import React from "react"
import {Link} from "gatsby"

import "./style.css"

const BackButton = () => {
	return (
		<div className="back-button">
			<div className="link">
				<Link to="/blog" >All Articles</Link>
			</div>
			<div className="line"></div>
		</div>
	)
}

export default BackButton;