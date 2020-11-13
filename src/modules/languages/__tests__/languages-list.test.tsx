import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store';
import * as Actions from '../actions';
import { FetchLanguagesListAction } from '../types';
import { LanguagesList, Props } from '../languages-list';
import { listData } from '../fixtures';

const wrapper = ({ children }: any) => <Provider store={store}>{children}</Provider>;

describe('Languages List', () => {
    let fetchLanguages: any;
    beforeEach(() => {
        fetchLanguages = jest.fn(
            (): FetchLanguagesListAction => {
                return Actions.fetchLanguages();
            },
        );
    });
    describe('Languages List Items', () => {
        test('Only added Languages are displayed in the list', () => {
            const props: Props = {
                fetchLanguages,
                list: Array(listData[1]),
                listData,
            };
            const { getByText, queryAllByText } = render(<LanguagesList {...props} />, { wrapper });
            expect(queryAllByText(/Latvian/).length).toBe(0);
            expect(getByText(/Estonian/)).toBeInTheDocument();
        });
    });
    describe('Fetch Languages', () => {
        test('Fetch languages if languages list is empty', () => {
            const props: Props = {
                fetchLanguages,
                list: [],
                listData: [],
            };
            render(<LanguagesList {...props} />, { wrapper });
            expect(fetchLanguages).toBeCalledTimes(1);
        });
        test('Do not fetch languages if already provided', () => {
            const props: Props = {
                fetchLanguages,
                list: [],
                listData,
            };
            render(<LanguagesList {...props} />, { wrapper });
            expect(fetchLanguages).toBeCalledTimes(0);
        });
    });
});
