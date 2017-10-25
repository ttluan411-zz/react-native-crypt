// @flow

import { combineReducers, applyMiddleware, createStore} from 'redux';
import thunk from 'redux-logger';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';


const middlewares = [thunk];


if (__DEV__) {
    middlewares.push(createLogger());
}
export default createStore(rootReducer, undefined, applyMiddleware(...middlewares))