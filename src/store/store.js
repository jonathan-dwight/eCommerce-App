import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducer/root-reducer';

const middlewares = [thunk, logger];

// if (process.env.NODE_ENV !== 'production') {
//     const { logger } = require("redux-logger");
//     middlewares.push(logger);
// }

const configureStore = (preloadedState = {}) => (
    createStore(rootReducer, preloadedState, applyMiddleware(...middlewares))
)

export default configureStore;
