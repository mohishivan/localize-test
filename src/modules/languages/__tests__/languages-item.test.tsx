import React from 'react';
// @ts-expect-error fireEvent and screen not exported error due to modules dependencies imcompatibility
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store';
import * as Actions from '../actions';
import { RemoveLanguageAttemptAction } from '../types';
import { LanguageItem, Props } from '../languages-item';
import { listData } from '../fixtures';

const wrapper = ({ children }: any) => <Provider store={store}>{children}</Provider>;

describe('Languages Item', () => {
    let removeLanguage: any;
    beforeEach(() => {
        removeLanguage = jest.fn(
            (): RemoveLanguageAttemptAction => {
                return Actions.removeLanguage();
            },
        );
    });
    describe('Delete Button', () => {
        test('onClick delete button language is removed.', () => {
            const props: Props = {
                removeLanguage,
                language: listData[1],
            };
            const { getByText, getByRole } = render(<LanguageItem {...props} />, { wrapper });
            expect(getByText(/Estonian/)).toBeInTheDocument();
            fireEvent.click(getByRole('remove'));
            expect(removeLanguage).toHaveBeenCalledTimes(1);
        });
    });
});
