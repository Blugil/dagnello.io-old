import React from 'react';
import ProfileCard from '../profileCard/profileCard';
import Coming from '../coming/coming'
import './layout.css'

//TODO(dom): pass in content component as props
const Layout = (props) => {
	return(
		<div className="main">
			<div id="menu">
				<ProfileCard />
			</div>
			<div id="content">
				<Coming />
			</div>
		</div>
	)
}

export default Layout;