import * as React from 'react';
import { connect } from 'react-redux'
import Styled from 'styled-components'
import SideBar from './sidebar'
import LanguagesList from './languages-list'
import { LanguageListItem } from './types'
import { AppState } from '../../store'

interface connectedProps {
	listData: LanguageListItem[];
	list: LanguageListItem[];
}

type Props = connectedProps 

export const LanguagePage = (props: Props) => {
	const { list, listData }  = props
	return(
		<Container>
			<Buttons>
				<PrimaryButton> New Project </PrimaryButton>
				<Button> Expand All </Button>
				<Button> Collpase All </Button>
			</Buttons>
			<SideBar />
			<LanguagesList list={ list } listData={ listData }/>
		</Container>
	)
}

const Container = Styled.div`
margin:40px;
display:flex;
flex-flow:row wrap;
height:100%;
`
const Buttons = Styled.div`
flex-basis:100%;
height:40px;
display:flex;
flex-flow:row wrap;
`

const Button = Styled.div`
font:300 16px Arial;
color:#5489DC;
display:flex;
flex-flow:row wrap;
justify-content:center;
align-items:center;
background-color: white;
border: 1px solid #5489DC;
border-radius:4px;
padding:10px 15px;
margin:10px;
`
const PrimaryButton = Styled(Button)`
color:white;
background-color: #5489DC;
border: 1px solid white;
`
export default connect((state: AppState) => ({
	listData: state.languages.listData,
	list: state.languages.list
}))(LanguagePage)
