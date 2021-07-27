import { applyMiddleware, createStore } from 'redux';
import rootReducer from './root-reducer';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// const thunk =redu-thunk();
const middlewares = [logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares, thunk));

export default store;
