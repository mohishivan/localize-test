import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
/* eslint-disable no-use-before-define */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import App from './App';
import theme from './theme';
import { store, persistor } from './store';

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root'),
);
