import React, { Component } from 'react';
import { Kpi } from '@gooddata/react-components';
import C from './catalog';
import config from './config';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Kpi
          {...config}
          measure={C.measure('# Checks')}
        />
      </div>
    );
  }
}

export default App;
