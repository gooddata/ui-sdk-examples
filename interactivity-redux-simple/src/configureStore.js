import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import { metric, isLoading, error } from './reducers'

const configureStore = () => {
  const middlewares = [];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  const store = createStore(
    combineReducers({ metric, isLoading, error }),
    applyMiddleware(...middlewares)
  );

  return store;
};

export default configureStore;
