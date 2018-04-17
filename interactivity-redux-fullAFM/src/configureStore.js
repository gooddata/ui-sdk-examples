// Copyright (C) 2007-2017, GoodData(R) Corporation. All rights reserved.
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

import { measureGroups, filterGroups, labelGroups } from './reducers/afm'
import { AVAILABLE_MEASURES, AVAILABLE_ATTRIBUTES } from './constants'
import C from './catalog'

const configureStore = () => {
  const middlewares = [];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  const initialState = {
    measureGroups: {
      mg1: [ C.measure(AVAILABLE_MEASURES[0]) ]
    },
    labelGroups: {
      lg1: [ C.attributeDisplayForm(AVAILABLE_ATTRIBUTES[0])]
    }
  }

  const store = createStore(
    combineReducers({ measureGroups, labelGroups, filterGroups }),
    initialState,
    composeWithDevTools(
        applyMiddleware(...middlewares)
    )
  );

  return store;
};

export default configureStore;
