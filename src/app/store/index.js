import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import history from './history';
import sagas from '../sagas';
import reducers from '../reducers';
import { connectRouter, routerMiddleware } from 'connected-react-router'

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  let middleware = applyMiddleware(sagaMiddleware, logger, routerMiddleware(history));
  let connectedRouterReducer  = connectRouter(history)(reducers);

  const store = createStore(connectedRouterReducer, {}, middleware);
  sagaMiddleware.run(sagas);

  if(module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(require('../reducers').default);
    })
  }

  return store;
}