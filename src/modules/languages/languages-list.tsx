import * as React from 'react';
import Styled from 'styled-components';
import { connect, ConnectedProps } from 'react-redux';
import { isEmpty } from 'lodash';
import Language from './languages-item';
import AddLanguage from './add-language';
import * as Actions from './actions';
import { AppState } from '../../store';

type Props = ReduxProps;

const LanguagesList: React.FC<Props> = (props: Props) => {
    const { list, listData, fetchLanguages } = props;

    React.useEffect(() => {
        if (isEmpty(listData)) {
            fetchLanguages();
        }
    }, [listData, fetchLanguages]);

    return (
        <Container>
            {list &&
                list.map((language) => {
                    return <Language language={language} key={`language-${language.name}`} />;
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

const mapState = (state: AppState) => ({
    listData: state.languages.listData,
    list: state.languages.list,
});

const mapDispatch = {
    fetchLanguages: Actions.fetchLanguages,
};

const connector = connect(mapState, mapDispatch);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(LanguagesList);
