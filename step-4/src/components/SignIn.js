import React from 'react'

import { Link } from 'react-router-dom'

import styles from './SignIn.css'

export default function SignIn(){
	return (
		<div className="container">
			<form className="form">
				<input className="form_input" type="text" placeholder="Email" />
				<input className="form_input" type="password" placeholder="password" />

				<button className={styles.form_submit_button} type="submit">Log in</button>
				<Link className="form_link" to="/">Forgot your password?</Link>
				<Link className="form_link" to="/sign-up">Need an account? Sign up</Link>
			</form>
		</div>
	)
}