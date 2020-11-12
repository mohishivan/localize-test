import * as React from 'react';
import Styled from 'styled-components';
import Modal from 'react-modal';
import { Button } from './styled';
import AddLanguageForm from './add-language-form';
import './styles.css';

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

Modal.setAppElement('body');

export const AddLanguage: React.FC = () => {
    const [isOpen, toggleOpen] = React.useState(false);

    return (
        <Container>
            <Button m="15px" onClick={(): void => toggleOpen(true)}>
                Add language
            </Button>
            <Modal isOpen={isOpen} style={customStyles} contentLabel="Add languages">
                <AddLanguageForm closeModal={(): void => toggleOpen(false)} />
            </Modal>
        </Container>
    );
};

const Container = Styled.div`
	display:flex;
	flex-flow:column;
`;

export default AddLanguage;
