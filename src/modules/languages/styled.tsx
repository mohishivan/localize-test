import { HTMLAttributes } from 'react'; 
import Styled, { keyframes } from 'styled-components'
import * as SS from 'styled-system';
import * as CSS from 'csstype';
export interface BaseProps extends HTMLAttributes<HTMLDivElement> {}

export interface BoxProps extends BaseProps,
  SS.BackgroundColorProps,
  SS.SpaceProps,
  SS.FontSizeProps,
  SS.BorderProps,
  SS.BorderColorProps,
  SS.BorderRadiusProps,
  SS.DisplayProps,
  SS.WidthProps,
  SS.MaxWidthProps,
  SS.MinWidthProps,
  SS.HeightProps,
  SS.MaxHeightProps,
  SS.MinHeightProps,
  SS.AlignItemsProps,
  SS.AlignContentProps,
  SS.JustifyContentProps,
  SS.FlexWrapProps,
  SS.FlexDirectionProps,
  SS.FlexProps,
  SS.FlexBasisProps,
  SS.JustifySelfProps,
  SS.AlignSelfProps,
  SS.OrderProps,
  SS.PositionProps,
  SS.ZIndexProps,
  SS.TopProps,
  SS.LeftProps,
  SS.RightProps,
  SS.BottomProps {
    color?: CSS.Property.Color;
  }

	export const Button = Styled.div<BoxProps>`
	font:400 13px Rubik;
	display:flex;
	cursor:pointer;
	justify-content:center;
	align-items:center;
	flex-grow:0;
	border-radius:5px;
	padding:7px 14px;
	color:#5489DC;
	background-color: white;
	border: 1px solid #A9C4ED;
	${ SS.typography };
	${ SS.space };
	&.primary {
		background-color:#5489DC;
		color: white;
		border:1px solid #5489DC;
	}
`
interface ProgressBarProps {
	progress: number;
}

const animation = (props:ProgressBarProps) => keyframes`
    from { width: 0px }
    to { width: ${ progressPercentage(props) }% }
`
export const ProgressBar = Styled.div<ProgressBarProps>`
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

export const Info = Styled.div`
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

export const ButtonIcons = Styled.div<BoxProps>`
	display:flex;
	flex-flow:row nowrap;
	${ SS.space }
	svg {
		${ SS.color }
		${ SS.typography }
	}
`
function progressColor(props:ProgressBarProps):string{
	const progress = props.progress
	let color:string;
	if(progress >= 60 ){
		color = "#5489DC"
	} else if(progress > 30 && progress < 60) {
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
