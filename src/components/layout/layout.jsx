import React from 'react';
import ProfileCard from '../profileCard/profileCard';
import './layout.css'

//TODO(dom): pass in content component as props
const Layout = (props) => {
	return(
		<div className="main">
			<div id="menu">
				<ProfileCard />
			</div>
			<div id="content">
				{props.render}
			</div>
		</div>
	)
}

export default Layout;