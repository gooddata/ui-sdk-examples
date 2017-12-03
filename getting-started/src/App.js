// Copyright (C) 2007-2017, GoodData(R) Corporation. All rights reserved.
import React, { Component } from 'react';
import { Kpi } from '@gooddata/react-components';
import '@gooddata/react-components/styles/css/main.css';
import C from './catalog.json';
 
import logo from './logo.svg';
import './App.css';
 
class App extends Component {
   render() {
      return (
         <div className="App">
            <div className="App-header">
               <img src={logo} className="App-logo" alt="logo" />
               <h2>Welcome to React</h2>
            </div>
            <Kpi
               projectId="la84vcyhrq8jwbu4wpipw66q2sqeb923"
               measure={C['Avg Deal Size']} />
            <p className="App-intro">
               To get started, edit <code>src/App.js</code> and save to reload.
            </p>
         </div>
      );
   }
}
 
export default App;