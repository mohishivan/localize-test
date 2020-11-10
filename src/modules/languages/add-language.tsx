import * as React from 'react';
import Styled from 'styled-components';
import { connect, DispatchProp } from 'react-redux';
import Modal from 'react-modal';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { LanguageListItem } from './types';
import { AppState } from '../../store';
import { Button } from './styled';
import * as Actions from './actions';
import './styles.css';

interface connectedProps {
  listData: LanguageListItem[];
  list: LanguageListItem[];
}

interface IOption {
  label: string;
  value: string;
}
type Props = connectedProps & DispatchProp;

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    borderRadius: '6px',
    border: 'transparent',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    width: '600px',
    height: 'auto',
    padding: '30px',
    overflow: 'unset',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
};

const selectStyles = {
  control: (styles: any) => ({
    ...styles,
    font: '300 14px Rubik',
  }),
  option: (styles: any) => ({
    ...styles,
    font: '300 14px Rubik',
  }),
  multiValue: (styles: any) => ({
    ...styles,
    font: '300 16px Rubik',
    padding: '2px 4px',
    borderRadius: '5px',
  }),
};

const animatedComponents = makeAnimated();

const AddLanguage = (props: Props) => {
  const { listData, list, dispatch } = props;
  const [isOpen, toggleOpen] = React.useState(false);
	const [selected, select] = React.useState<LanguageListItem[]>([])
  const options = React.useMemo(
    () => {
      return listData
			.filter(lang => !list.map(l => l.name).includes(lang.name))
			.map(lang => ({value: lang.name, label: lang.name}));
    },
    [listData, list],
  );

  const defaultValues = React.useMemo(
    () => {
      return list
			.map(lang => ({value: lang.name, label: lang.name}));
    },
    [list],
  );

	const selectLanguage = React.useCallback((values:IOption[]) => {
		const languages = listData.filter(l => values.map(i=>i.value).includes(l.name))
		if(!languages){ 
			console.log({values})
			return; 
		}
		select(languages)
	},[select, listData])

  return (
    <Container>
      <AddLanguageButton onClick={() => toggleOpen(true)}>
        Add Language
      </AddLanguageButton>
      <Modal isOpen={isOpen} style={customStyles} contentLabel="Add languages">
				<ModalStyles>
          <h1>Add languages</h1>
          <Select 
						closeMenuOnSelect={false}
						components={animatedComponents}
						defaultValue={ defaultValues }
						options={options} 
						styles={selectStyles}
						onChange={(val: any) => selectLanguage(val)}
						isMulti
					/>
          <Buttons>
            <ActionButton onClick={() => toggleOpen(false)}>Close</ActionButton>
						<ActionButton
							className="primary"
							onClick={() => {
								dispatch(Actions.addLanguage({ languages: selected }));
								toggleOpen(false);
							}}
						>
							Add
						</ActionButton>
          </Buttons>
				</ModalStyles>
      </Modal>
    </Container>
  );
};

const Container = Styled.div`
	display:flex;
	flex-flow:column;
`;
const ModalStyles = Styled.div`
	display:flex;
	flex-flow:column;
	h1 {
		margin:5px 0px 20px 0px;
		font:400 22px Rubik;
	}
	.select__menu {
		border:2px solid #000;
		font:300 16px Rubik;
		z-index:100;
	}
	.ReactModal__Content {
		overflow:visible;
	}
`;
const Buttons = Styled.div`
	display:flex;
	flex-flow:row;
	justify-content:flex-end;
	margin:30px 0px;
`;

const AddLanguageButton = Styled(Button)`
		display:inline;
		box-sizing:border-box;
		flex-basis:1;
		align-self:center;
		font:400 13px Rubik;
`;
const ActionButton = Styled(Button)`
		display:inline;
		box-sizing:border-box;
		flex-basis:1;
		align-self:center;
		margin:0px 0px 0px 10px;
`;

export default connect((state: AppState) => ({
  listData: state.languages.listData,
  list: state.languages.list,
}))(AddLanguage);
