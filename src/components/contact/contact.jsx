import React, { useState } from "react"
import './contact.css'


function encode(data) {
	return Object.keys(data)
	  .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
	  .join('&')
}

const Contact = () => {

	const [submit, setSubmit] = useState(true);
	const [state, setState] = useState({});

	const handleChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const form = e.target
		fetch('/', {
		method: 'POST',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: encode({
			'form-name': form.getAttribute('name'),
			...state,
		}),
		})
		.then(() => setSubmit(false))
		.catch((error) => alert(error))
	}

	if (submit) {
		return(
			<div id="contact-container">
					<h1>Contact Me</h1>
					<form 
						name="contact" 
						method="POST" 
						data-netlify="true" 
						data-netlify-honeypot="bot-field"
						onSubmit={handleSubmit}>
						<input type="hidden" name="form-name" value="contact"/>
						<p hidden>
							<input name="bot-field" onChange={handleChange}/>
						</p>
						<div className="form-input">
							<label htmlFor="name" ><h3>Your Name: </h3></label>   
							<input type="text" name="name" onChange={handleChange} required />
						</div>
						<div className="form-input">
							<label htmlFor="email"><h3>Your Email: </h3></label>
							<input type="text" name="email" onChange={handleChange} required />
						</div>
						<div className="form-input">
							<label htmlFor="message"><h3>Message: </h3></label>
							<textarea name="message" onChange={handleChange} required></textarea>
						</div>
						<button type="submit">Send</button>
					</form> 
			</div>

		)
	}
	else {
		return (
			<div id="thanks-container">
				<h1>Thank you for your submission!</h1>
				<p>
					I'll get back to you as soon as I can.
				</p>
			</div> 
		)
	}
}

export default Contact;