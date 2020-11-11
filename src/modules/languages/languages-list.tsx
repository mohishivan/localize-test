import * as React from "react";
import Styled from "styled-components";
import { connect, DispatchProp } from "react-redux";
import {isEmpty} from 'lodash'
import Language from "./languages-item";
import AddLanguage from "./add-language";
import { LanguageListItem } from "./types";
import * as Actions from './actions'
import { AppState } from "../../store";

interface connectedProps {
	listData: LanguageListItem[];
	list: LanguageListItem[];
}

type Props = connectedProps & DispatchProp;

const LanguagesList = (props: Props) => {
	const { list, listData, dispatch } = props;

	React.useEffect(() => {
		if (isEmpty(listData)) {
			dispatch(Actions.fetchLanguages());
		}
	}, [listData, dispatch]);

	return (
		<Container>
			{list && list.map((language) => {
				return (
					<Language language={language} key={`language-${language.name}`} />
				);
			})}
			<AddLanguage />
		</Container>
	);
};

const Container = Styled.div`
	display:flex;
	flex-flow:row wrap;
	padding:0px 0px 0px 5px;
	height:min-content;
	flex-grow:1;
`;

export default connect((state: AppState) => ({
	listData: state.languages.listData,
	list: state.languages.list,
}))(LanguagesList);
