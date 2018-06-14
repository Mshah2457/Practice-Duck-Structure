import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import reducers from './reducers';

const middlewares = [thunkMiddleware];

export default createStore(reducers, compose(applyMiddleware(...middlewares)));