import * as React from 'react';
import Styled from 'styled-components';
import {FiCommand} from 'react-icons/fi'
import {ImShift} from 'react-icons/im'
import SideBar from './sidebar';
import LanguagesList from './languages-list';
import { Button,ButtonIcons } from './styled';

export const LanguagePage = () => {
  return (
    <Container>
      <Buttons>
				<Button mx="3px" ml="0px" px="10px" className="primary"> 
					<span>New Project </span>
					<ButtonIcons ml="6px" fontSize="12px">
						<ImShift />
						<FiCommand />
						<b>P</b>
					</ButtonIcons>
				</Button>
        <Button mx="2px" > Expand all </Button>
        <Button mx="2px" > Collapse all </Button>
      </Buttons>
      <Panel>
        <SideBar />
        <LanguagesList />
      </Panel>
    </Container>
  );
};

const Container = Styled.div`
	margin:100px 60px 0px 60px;
	display:flex;
	flex-flow:column wrap;
	height:100%;
	box-sizing:border-box;
`;
const Panel = Styled.div`
	display:flex;
	margin-top:40px;
	flex-flow:row nowrap;
	box-sizing:border-box;
	flex-grow:1;
`;
const Buttons = Styled.div`
	flex-basis:100%;
	height:40px;
	display:flex;
	flex-flow:row wrap;
`;

export default LanguagePage;
