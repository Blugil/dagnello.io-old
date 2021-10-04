import React from 'react';
import './resume.css'

const Resume = (props) => {
    return (
        <div className="resume-container">
            <h1>
                Dominick Agnello
            </h1>
            <p>Email: <a href="https://gmail.com" target="_blank" rel="noreferrer">dagnello@asu.edu</a> | Website: <a href="http://dagnello.io" target="_blank" rel="noreferrer"> dagnello.io </a></p>
            <p>Github: <a href="https://github.com/blugil" target="_blank" rel="noreferrer">github.com/blugil</a> | LinkedIn: <a href="https://linkedin.com/in/dominickagnello" target="_blank" rel="noreferrer">linkedin.com/in/dominickagnello </a></p>
            <h2>
                Education
            </h2>
            <div className="line"></div>
            <p className="subh">Arizona State University, Tempe AZ | Expected graduation: May 2023</p>
            <ul>
                <li>
                    Pursuing a bachelor's degree in Computer Science. 
                </li>
            </ul>
            <h2>
                Skills
            </h2>
            <div className="line"></div>
            <p><a>Programming Languages: </a>Javascript, C++, Java, Python</p>
            <p><a>Notable Language Frameworks: </a> ReactJS, NodeJS, and ExpressJS</p>
            <p><a>Softer Skills: </a> Git/Github, Unix terminal, Linux environments, MacOS, MongoDB, RESTful API's, Adobe Suit, LaTeX</p>
            <h2>
                Work Experience
            </h2>
            <div className="line"></div>
            <p className="subh">Computer Science Undergraduate Teaching Assistant at Arizona State University | Jan 2021 - Present</p>
            <ul>
                <li>
                    Host office hours for two or more hours per week assisting up to 20 students at a time with assignments 
                    and computer science concepts by reinforcing their knowledge and helping them come to their own conclusions.
                </li>
                <li>
                    Preview weekly lecture slides and quizzes to check for errors while maintaining constant 
                    communication with the professor and grader to ensure a smooth semester for over 700 students.
                </li>
            </ul>

            <p className="subh">Front End Developer Intern at Fisher PHX | May 2019 – January 2020:</p>
            <ul>
                <li>
                    Developed with the React JavaScript library to create projects with a component-based 
                    architecture that allowed for quick and efficient application design and implementation.
                </li>
                <li>
                    Designed and prototyped user interfaces to give web applications
                     an easy and intuitive user experience without compromising in functionality.
                </li>
            </ul>

            <p className="subh">Cashier at Fry’s Food and Drug | May 2018 - August 2018</p>
            <ul>
                <li>
                    Facilitated customer satisfaction with a high items-per-minute scanned index and a friendly and energetic attitude.
                </li>
                <li>
                    Managed six self-checkout kiosks and facilitated the customer experience 
                    by providing proactive customer engagement to ensure holdups prevented.
                </li>
            </ul>
            <h2>
                Projects 
            </h2>
            <div className="line"></div>
            <p>What's for Lunch?</p>
            <p>An inhouse lunch ordering web application created while working at Fisher PHX.</p>
            <ul>
                <li>
                    Implemented a scalable component driven React frontend to create a CRUD web 
                    application that enabled a more efficient lunch ordering system for all twelve employees.
                </li>
                <li>
                    Used Google’s Firebase service to implement an efficient serverless 
                    NoSQL database that enabled fast load times and a zero-cost upkeep.
                </li>
            </ul>
            <p>JobieBot</p>
            <p>A Discord bot developed to allow users to request a picture of a cat and upload their 
                own cat pictures to a database leveraging Discord's CDN.</p>
            <ul>
                <li>
                    The source code for the Discord Bot was implemented using Node to integrate with Discord’s own discord.js library.
                </li>
                <li>
                    Learned and implemented a MongoDB NoSQL database to work alongside the Node backend to quickly deliver queries
                    and allow for easy expansion.
                </li>
                <li>
                    Used Digital Ocean’s VPS platform alongside Docker to embrace a container workflow and allow for a seamless development to production timeline.
                </li>
            </ul>

        </div>
    )
}

export default Resume;

