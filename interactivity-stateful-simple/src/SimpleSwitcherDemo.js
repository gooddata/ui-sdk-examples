// Copyright (C) 2007-2017, GoodData(R) Corporation. All rights reserved.
import React, { Component } from 'react';
import { Kpi } from '@gooddata/react-components';

import '@gooddata/react-components/styles/css/main.css';
import C from './catalog.json';

const MEASURE_1 = 'Avg Activities per Rep'
const MEASURE_2 = '# of Activities'
const MEASURE_3 = 'Non-existing Measure'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      measure: MEASURE_1
    };
  }

  setMeasure(measure) {
    console.log('setMeasure', measure)
    this.setState({
      measure
    })
  }

  render() {
    return (
      <div className="Demo">
        <select onChange={(e) => this.setMeasure(e.target.value)}>
          <option key={MEASURE_1}>{MEASURE_1}</option>
          <option key={MEASURE_2}>{MEASURE_2}</option>
          <option key={MEASURE_3}>{MEASURE_3}</option>
        </select>

        <div>
          The result is {' '}
          <Kpi
             projectId="la84vcyhrq8jwbu4wpipw66q2sqeb923"
             measure={C[this.state.measure]}
             format="#,##0" />
        </div>
      </div>
    );
  }
}

export default App;
