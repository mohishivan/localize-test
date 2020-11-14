import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import selectEvent from 'react-select-event';
import { store } from '../../../store';
import { AddLanguageForm, Option, Props } from '../add-language-form';
import * as Actions from '../actions';
import * as Selectors from '../selectors';
import { AddLanguageAttemptPayload, AddLanguageAction, AddLanguagePayload } from '../types';
import { listData } from '../fixtures';

const wrapper = ({ children }: any) => <Provider store={store}>{children}</Provider>;

describe('Add Language Form', () => {
    let addLanguage: jest.Mock<AddLanguageAction, [AddLanguagePayload]>;
    let closeModal: jest.Mock;
    let options: Option[];
    let props: Props;
    beforeEach(() => {
        addLanguage = jest.fn(
            (payload: AddLanguageAttemptPayload): AddLanguageAction => {
                return Actions.addLanguage(payload);
            },
        );
        closeModal = jest.fn((): void => {
            return;
        });
        options = Selectors.getSelectOptions({ listData, list: [], authToken: null });
        props = {
            listData,
            options,
            addLanguage,
            closeModal,
        };
    });
    describe('Select Languages', () => {
        test('Selecting languages populate form values', async () => {
            const { getByRole, getByLabelText } = render(<AddLanguageForm {...props} />, { wrapper });
            expect(getByRole('form')).toHaveFormValues({ languages: '' });

            await selectEvent.select(getByLabelText('Add languages'), ['Latvian']);
            expect(getByRole('form')).toHaveFormValues({ languages: 'Latvian' });

            await selectEvent.select(getByLabelText('Add languages'), 'Estonian');
            expect(getByRole('form')).toHaveFormValues({
                languages: ['Latvian', 'Estonian'],
            });
        });
    });
    describe('Add Button', () => {
        test('onClick closes the modal', () => {
            render(<AddLanguageForm {...props} />, { wrapper });
            fireEvent.click(screen.getByText(/Add$/i));
            expect(closeModal).toHaveBeenCalledTimes(1);
        });
        test('onClick dispatches action with proper payload.', async () => {
            const { getByRole, getByLabelText } = render(<AddLanguageForm {...props} />, { wrapper });

            await selectEvent.select(getByLabelText('Add languages'), ['Latvian']);
            expect(getByRole('form')).toHaveFormValues({ languages: 'Latvian' });

            fireEvent.click(screen.getByText(/Add$/i));
            const payload = { languages: [listData[0]] };
            expect(addLanguage).toHaveBeenCalledTimes(1);
            expect(addLanguage.mock.calls[0][0]).toMatchObject(payload);
        });
    });
});
