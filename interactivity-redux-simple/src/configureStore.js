// Copyright (C) 2007-2017, GoodData(R) Corporation. All rights reserved.
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import { measure, isLoading, error } from './reducers'

const configureStore = () => {
  const middlewares = [];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  const store = createStore(
    combineReducers({ measure, isLoading, error }),
    applyMiddleware(...middlewares)
  );

  return store;
};

export default configureStore;
