// Copyright (C) 2007-2017, GoodData(R) Corporation. All rights reserved.
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import { measureGroups, filterGroups } from './reducers/afm'
import { isLoading, error } from './reducers/status'

const configureStore = () => {
  const middlewares = [];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  const store = createStore(
    combineReducers({ measureGroups, filterGroups, isLoading, error }),
    applyMiddleware(...middlewares)
  );

  return store;
};

export default configureStore;
