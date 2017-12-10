// Copyright (C) 2007-2017, GoodData(R) Corporation. All rights reserved.
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import { measureGroups, filterGroups } from './reducers/afm'
import { isLoading, error } from './reducers/status'
import { AVAILABLE_MEASURES } from './measures'
import C from './catalog'

const configureStore = () => {
  const middlewares = [];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  const initialState = {
    measureGroups: {
      mg1: [ C.metric(AVAILABLE_MEASURES[0]) ]
    }
  }

  const store = createStore(
    combineReducers({ measureGroups, filterGroups, isLoading, error }),
    initialState,
    applyMiddleware(...middlewares)
  );

  return store;
};

export default configureStore;
