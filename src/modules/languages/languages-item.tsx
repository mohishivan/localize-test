import * as React from "react";
import Styled from "styled-components";
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
				<Flag />
				<Title>{ name }</Title>
				<ProgressBar progress={progress} />
			</Header>
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
	flex-flow:row wrap;
`;
const Body = Styled.div`
	display:flex;
	flex-flow:row wrap;
`;
const Flag = Styled.div`
flex-basis:30px%;
	display:flex;
`;
const Title = Styled.div`
flex-basis:100%;
	display:flex;
	flex-flow:row wrap;
		font:300 22px Arial;
		color:#5489DC;
`;

interface ProgressBarProps {
	progress: number;
}

const ProgressBar = Styled.div<ProgressBarProps>`
flex-basis:100%;
	display:flex;
	flex-flow:row wrap;
	height:4px;
	background-color:#ccc;
	margin:10px 0px;
`;
const Info = Styled.div`
flex-basis:30%;
	display:flex;
	flex-flow:column wrap;
		color:#5489DC;
		font:200 22px Arial;
	&.progress {
		color:#888888;
	}
	span {
		display:block;
		color:#888888;
		font:100 14px Arial;
	}
`;

export default LanguageItem
