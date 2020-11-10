import * as React from "react";
import { connect, DispatchProp } from 'react-redux'
import Styled, { keyframes } from "styled-components";
import FlagImg from 'react-world-flags'
import { FiX } from 'react-icons/fi'
import { LanguageListItem } from './types'
import * as Actions from './actions'

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
			<ProgressBar progress={ progress } ><i/></ProgressBar>
			<Body>
				<Info className="progress"><span>DONE</span>{progress}%</Info>
				<Info><span>WORDS TO DO</span>{wordsToDo}</Info>
				<Info><span>UNVERIFIED</span>{unverified}</Info>
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
	padding:10px;
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
	flex-basis:30px;
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

interface ProgressBarProps {
	progress: number;
}

		//background-image: linear-gradient(to right, ${ progressColor } ${ progressPercentage }%, #ccc 0%);
const animation = (props:ProgressBarProps) => keyframes`
    from { width: 0px }
    to { width: ${ progressPercentage(props) }% }
`
const ProgressBar = Styled.div<ProgressBarProps>`
position:relative;
	flex-basis:100%;
	display:flex;
	flex-flow:row wrap;
	height:2px;
	max-height:2px;
	flex-grow:0;
	background-color:#CFCFCF;
	margin:7px 0px 10px 0px;
	border-radius:3px;
	i {
		background-color:${ progressColor };
		display:block;
		height:2px;
		border-radius:2px;
		transform-origin:0 0;
		z-index:1;
    animation: ${ animation } 2s ease;
		animation-iteration-count:1;
		animation-fill-mode: forwards;
	}
`;
const Info = Styled.div`
	flex-basis:30%;
	display:flex;
	flex-flow:column wrap;
	color:#5489DC;
	font:300 17px Rubik;
	letter-spacing:1px;
	&.progress {
		color:#888888;
		flex-basis:25%;
	}
	&:last-child{
		text-align:right;
	}
	span {
		display:block;
		color:rgba(136,136,136,0.80);
		font:300 10px Rubik;
		white-space:nowrap;
		letter-spacing:0px;
	}
`;

function progressColor(props:ProgressBarProps):string{
	const progress = props.progress
	let color:string;
	if(progress >= 80 ){
		color = "#5489DC"
	} else if(progress > 30 && progress < 80) {
		color = "#FFC500"
	} else {
		color = "#DB1F35"
	}
	return color;
}

function progressPercentage(props:ProgressBarProps):string{
	const progress = props.progress
	return String(Math.floor(progress))
}

export default connect()(LanguageItem)
