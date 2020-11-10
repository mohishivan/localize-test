import * as React from "react";
import { connect, DispatchProp } from 'react-redux'
import Styled from "styled-components";
import FlagImg from 'react-world-flags'
import { FiX } from 'react-icons/fi'
import { LanguageListItem } from './types'
import * as Actions from './actions'
import { ProgressBar, Info, InfoLabel } from './styled'

interface connectedProps {
	language: LanguageListItem;
}

type Props = connectedProps & DispatchProp;
const LanguageItem = (props: Props) => {
	const { language, dispatch } = props;
	const { name, code, wordsToDo, progress, unverified } = language
	return (
		<Container>
			<Header>
				<Flag><FlagImg code={ code }/></Flag>
				<Title>{ name }</Title>
				<Remove onClick={() => dispatch(Actions.removeLanguage({name}))}><FiX/></Remove>
			</Header>
			<ProgressBar progress={ progress } mt="8px" maxHeight="2px"><i/></ProgressBar>
			<Body>
				<Info><InfoLabel>DONE</InfoLabel>{progress}%</Info>
				<Info highlight><InfoLabel>WORDS TO DO</InfoLabel>{wordsToDo}</Info>
				<Info highlight><InfoLabel>UNVERIFIED</InfoLabel>{unverified}</Info>
			</Body>
		</Container>
	);
};

export const Remove = Styled.div`
	opacity:0;
	display:flex;
	align-items:center;
	pointer-events:none;
`
export const Container = Styled.div`
	display:flex;
	flex-flow:column nowrap;
	flex-basis:25%;
	box-sizing:border-box;
	padding:5px 15px 10px 15px;
	margin-bottom:15px;
	&:hover {
		${ Remove } {
			pointer-events:auto;
			cursor:pointer;
			opacity:0.7;
		}
	}
`;
const Header = Styled.div`
	display:flex;
	flex-flow:row nowrap;
`;
const Body = Styled.div`
	display:flex;
	flex-flow:row wrap;
	justify-content:space-between;
`;
const Flag = Styled.div`
	flex-basis:26px;
	display:flex;
	img {
		width:16px;
		transform:scaleY(1.2);
		opacity:0.6;
	}
`;
const Title = Styled.div`
flex-basis:100%;
	display:flex;
	flex-flow:row wrap;
	font:400 13px Rubik;
	color:#5489DC;
`;


export default connect()(LanguageItem)
