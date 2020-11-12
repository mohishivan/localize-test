import React from 'react';
// @ts-expect-error screen not a member error due to modules dependencies imcompatibility
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

const wrapper = ({ children }: any) => <Provider store={store}>{children}</Provider>;

test('renders New Project button', () => {
    render(<App />, { wrapper });
    const button = screen.getByText(/New Project/i);
    expect(button).toBeInTheDocument();
});
