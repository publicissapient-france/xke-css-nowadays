import React from 'react'

import { orange, darkOrange } from '../settings/colors'

import Form, {
	Input,
	Link,
	SubmitButton as BaseSubmitButton
} from './Form'

const SubmitButton = BaseSubmitButton.extend.attrs({
	color: orange,
	hoverColor: darkOrange
})``

export default function SignUp(){
	return (
		<Form>
			<h1>Create your account</h1>
			<label>Enter your email address</label>

			<Input type="text" placeholder="Email" />

			<SubmitButton>Continue</SubmitButton>
			<Link to="/sign-in">Already have an account? Log in</Link>
		</Form>
	)
}