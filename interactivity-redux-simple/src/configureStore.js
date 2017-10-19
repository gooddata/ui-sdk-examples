import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import { metric } from './reducers'

const configureStore = () => {
  const middlewares = [];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  const store = createStore(
    combineReducers({ metric }),
    applyMiddleware(...middlewares)
  );

  return store;
};

export default configureStore;
