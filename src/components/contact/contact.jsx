import React, { useState } from "react"
import './contact.css'

const Contact = () => {

	const [submit, setSubmit] = useState(true);	

	if (submit) {
		return(
			<div id="contact-container">
					<h1>Contact Me</h1>
					<form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
						<input type="hidden" name="contact" value="contact"/>
						<div className="form-input">
							<label htmlFor="name" ><h3>Your Name: </h3></label>   
							<input type="text" name="name" required />
						</div>
						<div className="form-input">
							<label htmlFor="email"><h3>Your Email: </h3></label>
							<input type="text" name="email" required />
						</div>
						<div className="form-input">
							<label htmlFor="message"><h3>Message: </h3></label>
							<textarea name="message" required></textarea>
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
					I'll be in contact with you soon.
				</p>
			</div> 
		)
	}
}

export default Contact;