import * as React from 'react';
// @ts-expect-error fireEvent and screen not exported error due to modules dependencies imcompatibility
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store';
import { AddLanguageForm } from '../add-language-form';
import * as Actions from '../actions';
import { AddLanguageAttemptPayload, AddLanguageAction, AddLanguagePayload } from '../types';
import { listData } from '../fixtures';

const wrapper = ({ children }: any) => <Provider store={store}>{children}</Provider>;

describe('Form Add Button', () => {
    let addLanguage: jest.Mock<AddLanguageAction, [AddLanguagePayload]>;
    let closeModal: jest.Mock;
    let props: any;
    beforeEach(() => {
        addLanguage = jest.fn(
            (payload: AddLanguageAttemptPayload): AddLanguageAction => {
                return Actions.addLanguage(payload);
            },
        );
        closeModal = jest.fn((): void => {
            return;
        });
        props = {
            list: listData,
            listData,
            addLanguage,
            closeModal,
        };
    });
    test('onClick closes the modal', () => {
        render(<AddLanguageForm {...props} />, { wrapper });
        fireEvent.click(screen.getByText(/Add$/i));
        expect(closeModal).toHaveBeenCalledTimes(1);
    });
    test('onClick add selected languages', () => {
        render(<AddLanguageForm {...props} />, { wrapper });
        fireEvent.click(screen.getByText(/Add$/i));
        expect(addLanguage).toHaveBeenCalledTimes(1);
    });
});
