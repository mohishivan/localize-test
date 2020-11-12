// eslint-disable-next-line
import React, { FC, useState, useCallback } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Styled from 'styled-components';
import { connect } from 'react-redux';
import { LanguageListItem } from './types';
import * as Actions from './actions';
import * as Types from './types';
import * as Selectors from './selectors';
import { Button } from './styled';
import { AppState } from 'store';

const animatedComponents = makeAnimated();

const selectStyles = {
    control: (styles: any): any => ({
        ...styles,
        font: '300 14px Rubik',
    }),
    option: (styles: any): any => ({
        ...styles,
        font: '300 14px Rubik',
    }),
    multiValue: (styles: any): any => ({
        ...styles,
        font: '300 16px Rubik',
        padding: '2px 4px',
        borderRadius: '5px',
    }),
};

const ModalStyles = Styled.div`
	display:flex;
	flex-flow:column;
	h1 {
		margin:5px 0px 20px 0px;
		font:400 22px Rubik;
	}
`;

const Buttons = Styled.div`
	display:flex;
	flex-flow:row;
	justify-content:flex-end;
	margin:30px 0px;
`;

interface Option {
    label: string;
    value: string;
}
interface StateProps {
    listData: LanguageListItem[];
    options: Option[];
}
interface DispatchProps {
    // eslint-disable-next-line
    addLanguage(a: Types.AddLanguagePayload): Types.AddLanguageAction;
}
interface OwnProps {
    closeModal(): void;
}

type Props = StateProps & DispatchProps & OwnProps;
export const AddLanguageForm: FC<Props> = (props: Props) => {
    const { listData, addLanguage, closeModal, options } = props;
    const [selected, select] = useState<LanguageListItem[]>([]);

    const selectLanguage = useCallback(
        (values: Option[]) => {
            if (values === null) {
                return;
            }
            const languages = listData.filter((l) => values.map((i) => i.value).includes(l.name));
            if (!languages) {
                return;
            }
            select(languages);
        },
        [select, listData],
    );

    return (
        <ModalStyles>
            <h1>Add languages</h1>
            <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                options={options}
                styles={selectStyles}
                onChange={(val: any) => selectLanguage(val)}
                isMulti
            />
            <Buttons>
                <Button ml="10px" onClick={closeModal}>
                    Close
                </Button>
                <Button
                    ml="10px"
                    className="primary"
                    onClick={() => {
                        addLanguage({ languages: selected });
                        closeModal();
                    }}
                >
                    Add
                </Button>
            </Buttons>
        </ModalStyles>
    );
};

const mapState = (state: AppState) => ({
    listData: state.languages.listData,
    options: Selectors.getSelectOptions(state.languages),
});

const mapDispatch = { addLanguage: Actions.addLanguage };

export default connect(mapState, mapDispatch)(AddLanguageForm);
