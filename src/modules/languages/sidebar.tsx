import * as React from "react";
import Styled from "styled-components";
import { connect } from "react-redux";
import { ProgressBar, Info, InfoLabel } from "./styled";
import * as Selectors from "./selectors";
import { AppState } from "../../store";
import {
	ArrowUp,
	ArrowDown,
	Pulse,
	Person,
	Book,
	Camera,
	CheckMark,
} from "./icons";

interface connectedProps {
	progress: number;
	unverified: number;
}

type Props = connectedProps;

const SideBar = (props: Props) => {
	const { progress, unverified } = props;
	return (
		<Container>
			<Title>Roamer App (Android SDK Test)</Title>
			<ProgressBar progress={progress} mt="6px" mb="4px" height="3px">
				<i />
			</ProgressBar>
			<Infos>
				<Info>
					<InfoLabel>Done</InfoLabel>
					{progress}%
				</Info>
				<Info>
					<InfoLabel>Base Words</InfoLabel>160246
				</Info>
				<Info highlight>
					<InfoLabel>Team</InfoLabel>26
				</Info>
				<Info>
					<InfoLabel>Keys</InfoLabel>1848
				</Info>
				<Info highlight>
					<InfoLabel>QA Issues</InfoLabel>47512
				</Info>
				<Info>
					<InfoLabel>Unverified</InfoLabel>
					{unverified}
				</Info>
			</Infos>
			<Icons>
				<Icon background="#B7D9D0">
					<ArrowUp />
				</Icon>
				<Icon background="#DDBBBA">
					<ArrowDown />
				</Icon>
				<Icon background="#CFD6C2">
					<CheckMark />
				</Icon>
				<Icon background="#D1D1D1">
					<Person />
				</Icon>
				<Icon background="#C0C2DA">
					<Pulse />
				</Icon>
				<Icon background="#E6C3A4">
					<Camera />
				</Icon>
				<Icon background="#B5D1E3">
					<Book />
				</Icon>
			</Icons>
			<Tags>
				<Tag background="#E78946">Roamer</Tag>
				<Tag background="#40F362">iOS</Tag>
			</Tags>
		</Container>
	);
};

const Container = Styled.div`
	display:flex;
	flex-flow:column wrap;
	flex-basis:182px;
	min-width:182px;
	box-sizing:border-box;
	height:100%;
	border-right:1px solid #CCCCCC;
	padding-right:20px;
`;

const Tags = Styled.div`
	display:flex;
`;

const Tag = Styled.div<{ background?: string }>`
	height:20px;
	padding:0px 11px;
	margin:0px 2px 0px 0px;
	border-radius:10px;
	display:flex;
	justify-content:center;
	align-items:center;
	font:400 12px Rubik;
	color:#ffffff;
	box-sizing:border-box;
	background-color:${(p) => (p.background ? p.background : "#888888")};
`;

const Icons = Styled.div`
	display:flex;
	flex-flow:row wrap;
	margin:20px 0px 10px 0px;
`;
const Icon = Styled.div<{ background?: string }>`
	display:flex;
	justify-content:center;
	align-items:center;
	font-size:22px;
	color:white;
	width:30px;
	height:30px;
	margin:0px 5px 5px 0px;
	border-radius:15px;
	background-color:${(p) => p.background};
`;
const Infos = Styled.div`
	display:flex;
	flex-flow:row wrap;
	justify-content:space-between;
	margin-top:7px;
	${Info}{
		font-size:19px;
		margin:10px 0px 5px 0px;
		flex-basis:45%;
		&:last-child{
			text-align:left;
		}
	}
`;
const Title = Styled.h1`
	color: #5489DC;
	margin-top:-5px;
	font:400 21.5px Rubik;
	padding:0px 20px 0px 0px;
`;

export default connect((state: AppState) => ({
	progress: Selectors.getTotalProgress(state),
	unverified: Selectors.getTotalUnverified(state),
}))(SideBar);
