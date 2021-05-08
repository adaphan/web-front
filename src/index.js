import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './config/redux';
import './assets/sass/vendors/bootstrap.scss';
import './assets/sass/vendors/normalize.scss';
import './assets/sass/vypereum/vypereum.sass';

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
