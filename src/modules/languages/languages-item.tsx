import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import Styled from 'styled-components';
import FlagImg from 'react-world-flags';
import { FiX } from 'react-icons/fi';
import { LanguageListItem, LanguageAction } from './types';
import * as Actions from './actions';
import { ProgressBar, Info, InfoLabel } from './styled';
import { RemoveLanguageAttemptAction, RemoveLanguagePayload } from './types';

export const Remove = Styled.a`
	opacity:0;
	display:flex;
	align-items:center;
	pointer-events:none;
`;
export const Container = Styled.div`
	display:flex;
	flex-flow:column nowrap;
	flex-basis:25%;
	box-sizing:border-box;
	padding:5px 15px 10px 15px;
	margin-bottom:15px;
	&:hover {
		${Remove} {
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

interface OwnProps {
    language: LanguageListItem;
}
interface DispatchProps {
    // eslint-disable-next-line
    removeLanguage(payload: RemoveLanguagePayload): RemoveLanguageAttemptAction;
}
export type Props = OwnProps & DispatchProps;

export const LanguageItem: React.FC<Props> = (props: Props) => {
    const { language, removeLanguage } = props;
    const { name, code, wordsToDo, progress, unverified } = language;
    return (
        <Container>
            <Header>
                <Flag>
                    <FlagImg code={code} />
                </Flag>
                <Title>{name}</Title>
                <Remove onClick={() => removeLanguage({ name })} role="remove">
                    <FiX />
                </Remove>
            </Header>
            <ProgressBar progress={progress} mt="8px" maxHeight="2px">
                <i />
            </ProgressBar>
            <Body>
                <Info>
                    <InfoLabel>DONE</InfoLabel>
                    {progress}%
                </Info>
                <Info highlight>
                    <InfoLabel>WORDS TO DO</InfoLabel>
                    {wordsToDo}
                </Info>
                <Info highlight>
                    <InfoLabel>UNVERIFIED</InfoLabel>
                    {unverified}
                </Info>
            </Body>
        </Container>
    );
};

const mapDispatchToProps = (dispatch: Dispatch<LanguageAction>) =>
    bindActionCreators(
        {
            removeLanguage: Actions.removeLanguage,
        },
        dispatch,
    );

const mapState = () => ({});
export default connect(mapState, mapDispatchToProps)(LanguageItem);
