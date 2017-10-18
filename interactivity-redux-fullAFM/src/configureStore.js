import { createStore, applyMiddleware, combineReducers } from 'redux'
import createLogger from 'redux-logger'
import { metrics, filters } from './reducers/afm'

const configureStore = () => {
  const middlewares = [];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  const store = createStore(
    combineReducers(metrics, filters),
    applyMiddleware(...middlewares)
  );

  return store;
};

export default configureStore;
