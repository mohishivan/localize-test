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


	const selectLanguage = React.useCallback((values:IOption[]) => {
		if(values === null){ return ;}
		const languages = listData.filter(l => values.map(i=>i.value).includes(l.name))
		if(!languages){ 
			console.log({values})
			return; 
		}
		select(languages)
	},[select, listData])

  return (
    <Container>
      <Button 
				m="15px"
				onClick={() => toggleOpen(true)}
			>
        Add Language
      </Button>
      <Modal isOpen={isOpen} style={customStyles} contentLabel="Add languages">
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
            <Button ml="10px" onClick={() => toggleOpen(false)}>Close</Button>
						<Button
							ml="10px" 
							className="primary"
							onClick={() => {
								dispatch(Actions.addLanguage({ languages: selected }));
								toggleOpen(false);
							}}
						>
							Add
						</Button>
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
`;
const Buttons = Styled.div`
	display:flex;
	flex-flow:row;
	justify-content:flex-end;
	margin:30px 0px;
`;

export default connect((state: AppState) => ({
  listData: state.languages.listData,
  list: state.languages.list,
}))(AddLanguage);
