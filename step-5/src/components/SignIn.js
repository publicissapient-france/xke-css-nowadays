import React from 'react'

import { blue, darkBlue } from '../settings/colors'

import Form, {
	Input,
	Link,
	SubmitButton as BaseSubmitButton
} from './Form'

const SubmitButton = BaseSubmitButton.extend.attrs({
	color: blue,
	hoverColor: darkBlue
})``

export default function SignIn(){
	return (
		<Form>
			<Input type="text" placeholder="Email" />
			<Input type="password" placeholder="password" />

			<SubmitButton>Log in</SubmitButton>
			<Link to="/">Forgot your password?</Link>
			<Link to="/sign-up">Need an account? Sign up</Link>
		</Form>
	)
}