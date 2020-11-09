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
	flex-basis:200px;
	min-width:200px;
	height:100%;
	padding-right:20px;
`

const Title = Styled.h1`
	color: #5489DC;
	font:400 26px Inter;
	border-right:1px solid #CCCCCC;
`

export default SideBar
