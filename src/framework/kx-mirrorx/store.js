import { routerReducer } from 'react-router-redux';
import { applyMiddleware, combineReducers, compose, createStore as _createStore } from 'redux';
import { all, fork } from 'redux-saga/effects';
import { actions } from './actions';
import { effects } from './effects';

import createMiddleware from './middleware';
import routerMiddleware from './routerMiddleware';
import sagaMiddleware from './sagaMiddleware';
import { isGenerator } from './util';

export let store;

export function createStore(models, reducers, initialState, middlewares = []) {

  const middleware = applyMiddleware(
    routerMiddleware(),
    sagaMiddleware,
    ...middlewares,
    createMiddleware()
  );

  const enhancers = [middleware];

  let composeEnhancers = compose;

  // Following line to exclude from coverage report:
  /* istanbul ignore next */
  if (process.env.NODE_ENV !== 'production') {
    // Redux devtools extension support.
    if (global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
  }

  const reducer = createReducer(models, reducers);
  const enhancer = composeEnhancers(...enhancers);

  store = _createStore(reducer, initialState, enhancer);

  const rootSagas = [];
  Object.keys(actions).forEach(namespace => {
    const modelActions = actions[namespace];
    Object.keys(modelActions).forEach(action => {
      if (actions[namespace][action].isEffect) {
        const handler = effects[namespace + '/' + action];
        if (isGenerator(handler)) {
          rootSagas.push(fork(handler));
        }
      }
    });
  });

  sagaMiddleware.run(function* () {
    return yield all(rootSagas);
  });

  return store;
}

export function replaceReducer(store, models, reducers) {
  const reducer = createReducer(models, reducers);
  store.replaceReducer(reducer);
}

function createReducer(models, reducers) {

  const modelReducers = models.reduce((acc, cur) => {
    acc[cur.name] = cur.reducer;
    return acc;
  }, {});

  return combineReducers({
    ...reducers,
    ...modelReducers,
    routing: routerReducer
  });

}
