import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import appReducers from '../reducers/index';

const loggerMiddleware = createLogger();

function configureStore(preloadedState) {
  return createStore(
    appReducers,
    preloadedState,
    applyMiddleware(thunkMiddleware, loggerMiddleware),
  );
}

export default configureStore;
