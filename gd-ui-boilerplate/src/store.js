// Copyright (C) 2007-2018, GoodData(R) Corporation. All rights reserved.
import { createStore, combineReducers } from 'redux';
import { AfmReducers } from '@gooddata/gdc-afm-connect';

const { filterGroups } = AfmReducers;

const rootReducer = combineReducers({ filterGroups });

export default createStore(
  rootReducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
