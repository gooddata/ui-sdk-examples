// Copyright (C) 2007-2018, GoodData(R) Corporation. All rights reserved.
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import config from './config';
import { loginMachinery } from './utils';

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
  registerServiceWorker();
};

loginMachinery(config.sdk, config.projectId, config.domain, renderApp);
