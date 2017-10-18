import React, { Component } from 'react';
import '@gooddata/react-components/styles/css/main.css';
import C from './catalog.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <select>
          <option value={C["# of Opportunities"]}>Opportunities</option>
          <option value={C["# of Won Opps."]}>Won</option>
          <option value={C["Amount 1"]}>Amount</option>
        </select>
      </div>
    );
  }
}

export default App;
