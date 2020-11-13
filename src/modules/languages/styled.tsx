import Styled, { keyframes } from 'styled-components';
import { layout, space, typography, color } from 'styled-system';
import { BoxProps } from './types';

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
	${typography};
	${space};
	&.primary {
		background-color:#5489DC;
		color: white;
		border:1px solid #5489DC;
	}
`;

interface ProgressBarProps {
    progress: number;
}
function progressColor(props: ProgressBarProps): string {
    const progress = props.progress;
    let color: string;
    if (progress >= 60) {
        color = '#5489DC';
    } else if (progress > 30 && progress < 60) {
        color = '#FFC500';
    } else {
        color = '#DB1F35';
    }
    return color;
}

function progressPercentage(props: ProgressBarProps): string {
    const progress = props.progress;
    return String(Math.floor(progress));
}

const animation = (props: ProgressBarProps): ReturnType<typeof keyframes> => keyframes`
    from { width: 0px }
    to { width: ${progressPercentage(props)}% }
`;
export const ProgressBar = Styled.div<ProgressBarProps & BoxProps>`
position:relative;
	flex-basis:100%;
	display:flex;
	flex-flow:row wrap;
	height:2px;
	flex-grow:0;
	background-color:#CFCFCF;
	margin:7px 0px 10px 0px;
	border-radius:3px;
	${layout}
	${space}
	i {
	${layout}
		background-color:${progressColor};
		display:block;
		height:2px;
		border-radius:2px;
		transform-origin:0 0;
		z-index:1;
    animation: ${animation} 1s ease;
		animation-iteration-count:1;
		animation-fill-mode: forwards;
	}
`;

export const InfoLabel = Styled.div<BoxProps & { highlight?: boolean }>`
		${layout};
		${typography};
		display:block;
		text-transform:uppercase;
		color:rgba(136,136,136,0.80);
		font:300 10px Rubik;
		white-space:nowrap;
		letter-spacing:0px;
`;
export const Info = Styled.div<BoxProps & { highlight?: boolean }>`
	flex-basis:33%;
	flex-grow:1;
	min-width:33%;
	display:flex;
	flex-flow:column wrap;
	color:${(p): string | undefined => (p.highlight ? '#5489DC' : '#888888')};
	font:300 17px Rubik;
	${layout};
	${typography};
	letter-spacing:1px;
	&:last-child{
		text-align:right;
	}
`;

export const ButtonIcons = Styled.div<BoxProps>`
	display:flex;
	flex-flow:row nowrap;
	${space}
	svg {
		${color}
		${typography}
	}
`;
