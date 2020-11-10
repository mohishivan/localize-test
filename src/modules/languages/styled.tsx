import * as React from 'react'
import Styled from 'styled-components'

export const Button = Styled.div`
	font:400 14px Rubik;
	display:flex;
	cursor:pointer;
	justify-content:center;
	align-items:center;
	flex-grow:0;
	border-radius:4px;
	padding:8px 15px;
	margin:10px;
	color:#5489DC;
	background-color: white;
	border: 1px solid #A9C4ED;
	&.primary {
		background-color:#5489DC;
		color: white;
		border:1px solid #5489DC;
	}
`
