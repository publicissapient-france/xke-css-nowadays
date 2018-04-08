import React from 'react'

import styled from 'styled-components'

import { Link as RouterLink } from 'react-router-dom'

import { green, darkGreen } from '../settings/colors'

const Container = styled.div`
	padding: 30px;
`

const FormRoot = styled.form`
	border: 1px solid #DDD;
	padding: 12px;
	border-radius: 2px;
	text-align: center;
`

export const Link = styled(RouterLink)`
	display: block;
	text-decoration: none;
	color: #999;
	margin-bottom:12px

	&:hover {
		text-decoration: underline;
		color:#888;
	}
`

export const Input = styled.input`
	padding: 8px 12px;
	border-radius: 2px;
	border: 1px solid #CCC;
`

export const SubmitButton = styled.button.attrs({
	type: 'submit',
	color: props => props.color || green,
	hoverColor: props => props.hoverColor || darkGreen
})`
	display: block;
	width: 320px;
	max-width: 80%;
	margin: 20px auto;
	border-radius:2px;
	border: 0;
	background-color: ${props => props.color};
	padding: 12px 8px;
	color: white;

	&:hover{
		cursor: pointer;
		background-color: ${props => props.hoverColor};
	}
`

export default function Form(props){
	return (
		<Container>
			<FormRoot>
				{props.children}
			</FormRoot>
		</Container>
	)
}
