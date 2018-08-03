import React, { Component } from 'react';
import Route from './app/routes';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'; 
import configureStore from './app/store';
import history from './app/store/history';
import logo from './logo.svg';
import './App.css';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Route />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
