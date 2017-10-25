// @flow

import { combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-logger';
import { createLogger } from 'redux-logger';

const middlewares = [thunk];


if (__DEV__) {
    middlewares.push(createLogger());
}
export default createStore(rootReducer, undefined, applyMiddleware(...middlewares))