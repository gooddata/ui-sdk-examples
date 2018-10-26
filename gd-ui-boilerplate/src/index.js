// Copyright (C) 2007-2018, GoodData(R) Corporation. All rights reserved.
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import config from './config';
import { loginMachinery } from './utils';

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

loginMachinery(config.sdk, config.projectId, config.domain, renderApp);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
