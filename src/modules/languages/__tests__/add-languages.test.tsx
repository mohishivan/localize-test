import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store';
import { AddLanguage } from '../add-language';

const wrapper = ({ children }: any) => <Provider store={store}>{children}</Provider>;

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
}));

describe('Add Language Button', () => {
    test('Click on AddLanguage open Modal [test React.useState]', () => {
        const toggleOpen = jest.fn();
        const toggleOpenMock: any = (initState: boolean) => [initState, toggleOpen];

        jest.spyOn(React, 'useState').mockImplementation(toggleOpenMock);

        render(<AddLanguage />, { wrapper });
        fireEvent.click(screen.getByText(/Add language/i));
        expect(toggleOpen).toHaveBeenCalledTimes(1);
    });
});
