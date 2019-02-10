import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ConnectedRouter } from 'react-router-redux';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import Store, { history } from './configs/Store'
import 'rxjs';

import './index.css';

ReactDOM.render(
    <Provider store={Store}>
        <ConnectedRouter store={Store} history={history}>
            <App />
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
