import * as React from 'react';

import Menu from '../menu/menu';

import './profileCard.css';
import blugil from '../../images/blugil.png'
import github from '../../images/list/github.png'
import linkedin from '../../images/list/linkedin.png'
import reddit from '../../images/list/reddit.png'



const ProfileCard = () => {
	return(
		<div className="container">
            <img className="profileimage" alt="profile" src={blugil} />
            <h1><a style={{color: "#5BC0BE"}}>D</a>
                <a style={{color: "#EA0848"}}>o</a>
                <a style={{color: "#F8B148"}}>m</a>
                inick Agnello</h1>
            <p>Computer science student at Arizona State 
                University. Interested in web development, 
                C/C++, Linux, and tinkering.</p> 
            <ul className="list">
                <li className="listelement">
                    <img className="listimage" alt="github link" src={github} />
                </li>
                <li className="listelement">
                    <img className="listimage" alt="linkedin link" src={linkedin} />
                </li>
                <li className="listelement">
                    <img className="listimage" alt="reddit link" src={reddit} />
                </li>
            </ul>
            <Menu />
		</div>
	)
}

export default ProfileCard;