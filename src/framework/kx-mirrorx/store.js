import { routerReducer } from 'react-router-redux';
import { applyMiddleware, combineReducers, compose, createStore as _createStore } from 'redux';

import createMiddleware from './middleware';
import routerMiddleware from './routerMiddleware';
import sagaMiddleware from './sagaMiddleware';

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
