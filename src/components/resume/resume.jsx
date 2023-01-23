import React from 'react';
import './resume.css'

const Resume = () => {
    return (
        <div className="resume-container">
            <h1>
                Dominick Agnello
            </h1>
            <p>Email: <a href="https://gmail.com" target="_blank" rel="noreferrer">dagnello@asu.edu</a> | Website: <a href="http://dagnello.io" target="_blank" rel="noreferrer"> dagnello.io </a></p>
            <p>Github: <a href="https://github.com/blugil" target="_blank" rel="noreferrer">github.com/blugil</a> | LinkedIn: <a href="https://linkedin.com/in/dominickagnello" target="_blank" rel="noreferrer">linkedin.com/in/dominickagnello </a></p>
            <h1>
                Education
            </h1>
            <div className="line"></div>
            <p className="subh">Arizona State University, Tempe AZ | Expected graduation: December 2023</p>
            <ul>
                <li>
                    Pursuing a bachelor's degree in Computer Science. 
                </li>
            </ul>
            <h1>
                Skills
            </h1>
            <div className="line"></div>
            <p><span>Programming Languages: </span>Javascript, C++, Java, Python</p>
            <p><span>Notable Language Frameworks: </span> ReactJS, NodeJS, and ExpressJS</p>
            <p><span>Softer Skills: </span> Git/Github, Unix terminal, Linux environments, MacOS, MongoDB, RESTful API's, Adobe Suit, LaTeX</p>
            <h1>
                Work Experience
            </h1>
            <div className="line"></div>
            <p className="subh">Software Engineering Intern, Team Integrations | LaunchDarkly: May 2022 - August 2022</p>
            <ul>
                <li>
                  Developed, tested, and published production level code for LaunchDarkly's teams Terraform integration using Golang. This integration allowed LaunchDarkly users to spin up teams dynamically using the Terraform Provider. 
                </li>
                <li>
                  Presented the above Terraform integration at the engineering-team-wide project showcase on behalf of the integrations team to group of around 120 people.
                </li>
                <li>
                  Built and tested a small integration update with Zapier allowing for custom JSON input for LaunchDarkly flag updates which was pushed to production.
                </li>
                <li>
                  Led a small team for a company-wide hackathon developing a small prototype Discord integration with the LaucnhDarkly API as an alternative to the current implemented LaunchDarkly Slack bot. 
                </li>
            </ul>
            <p className="subh">Computer Science Undergraduate Teaching Assistant at Arizona State University | Jan 2021 - May 2022</p>
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
            <h1>
                Projects 
            </h1>
            <div className="line"></div>
            <p className="subh">What's for Lunch?</p>
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
            <p className="subh">JobieBot</p>
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
        <div className="spacer"></div>
        </div>
    )
}

export default Resume;

