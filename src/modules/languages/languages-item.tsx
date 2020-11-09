import * as React from "react";
import Styled, { keyframes } from "styled-components";
import FlagImg from 'react-world-flags'
import { LanguageListItem } from './types'

interface connectedProps {
	language: LanguageListItem;
}

type Props = connectedProps;
const LanguageItem = (props: Props) => {
	const { language } = props;
	const { name, code, wordsToDo, progress, unverified } = language
	return (
		<Container>
			<Header>
				<Flag><FlagImg code={ code }/></Flag>
				<Title>{ name }</Title>
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

const Container = Styled.div`
	display:flex;
	flex-flow:column nowrap;
	flex-basis:25%;
	box-sizing:border-box;
	min-width:120px;
	margin:10px;
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
	background-color:#ccc;
	margin:5px 0px 10px 0px;
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
	&.progress {
		color:#888888;
		flex-basis:25%;
	}
	&:last-child{
		text-align:right;
	}
	span {
		display:block;
		color:#888888;
		font:300 10px Rubik;
		white-space:nowrap;
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

export default LanguageItem
