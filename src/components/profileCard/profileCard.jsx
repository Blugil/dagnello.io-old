import * as React from 'react';

import Menu from '../menu/menu';

import './profileCard.css';
import blugil from '../../images/blugil.png'
import github from '../../images/list/github.png'
import linkedin from '../../images/list/linkedin.png'



const ProfileCard = () => {
	return(
		<div className="container">
            <img className="profileimage" alt="profile" src={blugil} />
            <h1><a href="/#" style={{color: "#5BC0BE"}}>D</a>
                <a href="/#" style={{color: "#EA0848"}}>o</a>
                <a href="/#" style={{color: "#F8B148"}}>m</a>
                inick Agnello</h1>
            <p>Computer Science student at Arizona State 
                University. Interested in web development, 
                C, Rust, Linux, NeoVim, and general tinkering.</p> 
            <ul className="list">
                <li> 
                    <a href="https://github.com/Blugil" rel="noreferrer" target="_blank">
                        <img className="listimage"  alt="github link" src={github} />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/dominickagnello/" rel="noreferrer" target="_blank">
                        <img className="listimage" alt="linkedin link" src={linkedin} />
                    </a>
                </li>
            </ul>
            <Menu />
		</div>
	)
}

export default ProfileCard;
