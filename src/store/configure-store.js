import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import logger from './logger';

function enableHotLoader(store) {
  if (__ENV__ === 'DEV' && module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }
}

function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();

  let middlewares = [
    sagaMiddleware,
    routerMiddleware(browserHistory),
  ];

  if (__ENV__ === 'DEV') {
    middlewares = [...middlewares, logger];
  }

  const store = compose(
    applyMiddleware(...middlewares),
  )(createStore)(rootReducer, initialState);

  sagaMiddleware.run(initSagas);

  enableHotLoader(store);
  return store;
}

export default configureStore;
