import React, { Component } from 'react';
import { Kpi } from '@gooddata/react-components';
import logo from './logo.svg';
import '@gooddata/react-components/styles/css/main.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <Kpi projectId="xms7ga4tf3g3nzucd8380o2bev8oeknp" measure="aa7ulGyKhIE5" />
        </div>
      </div>
    );
  }
}

export default App;
