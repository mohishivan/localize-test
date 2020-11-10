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
	flex-basis:180px;
	min-width:180px;
	height:100%;
`

const Title = Styled.h1`
	color: #5489DC;
	font:400 22px Rubik;
	padding:0px 20px 0px 0px;
	border-right:1px solid #CCCCCC;
`

export default SideBar
