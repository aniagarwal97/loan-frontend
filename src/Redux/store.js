import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from "redux-saga";
import reducer from '../Reducers';
import sagas from './sagas';
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose

const enhancers = [applyMiddleware(sagaMiddleware)]

const store = createStore(reducer,composeEnhancers(...enhancers));

sagaMiddleware.run(sagas);

export default store;