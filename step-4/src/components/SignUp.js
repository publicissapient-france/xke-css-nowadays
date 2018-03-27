import React from 'react'

import { Link } from 'react-router-dom'

import { form_submit_button } from './SignUp.css'

export default function SignUp(){
	return (
		<div className="container">
			<form className="form">
				<h1>Create your account</h1>
				<label>Enter your email address</label>

				<input className="form_input" type="text" placeholder="Email" />

				<button className={form_submit_button} type="submit">Continue</button>
				<Link className="form_link" to="/sign-in">Already have an account? Log in</Link>
			</form>
		</div>
	)
}