import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'; 
import configureStore from './app/store';
import history from './app/store/history';

import { initAuth } from './app/firebase/auth';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';


const store = configureStore();

function render() {
    ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));
}

registerServiceWorker();

initAuth(store.dispatch).then(() => render()).catch(error => console.log(error));
