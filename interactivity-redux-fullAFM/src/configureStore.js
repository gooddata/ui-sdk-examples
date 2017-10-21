import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import { metricGroups, filterGroups } from './reducers/afm'

const configureStore = () => {
  const middlewares = [];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  const store = createStore(
    combineReducers({ metricGroups, filterGroups }),
    applyMiddleware(...middlewares)
  );

  return store;
};

export default configureStore;
