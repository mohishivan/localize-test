import * as React from 'react';
import Styled from 'styled-components'

const SideBar = () => {
	return(
		<Container>
			<Title>
				Roamer App (Android SDK Test)
			</Title>
		</Container>
	)
}

const Container = Styled.div`
	display:flex;
	flex-flow:column wrap;
	width:240px;
	height:100%;
	min-height:100%;
`

const Title = Styled.h1`
	color: #5489DC;
	font:300 26px Arial;
	padding-right:10px;
	border-right:1px solid #CCCCCC;
`

export default SideBar
