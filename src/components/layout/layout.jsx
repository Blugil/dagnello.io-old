import React from 'react';
import ProfileCard from '../profilecard/profileCard';
import Coming from '../coming/coming'
import './layout.css'

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