import React, { Component } from 'react';
import { Kpi } from '@gooddata/react-components';

import '@gooddata/react-components/styles/css/main.css';
import C from './catalog.json';

const METRIC_1 = 'Avg Activities per Rep'
const METRIC_2 = 'Avg Created Opps'
const METRIC_3 = 'Non-existing Metric'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      metric: METRIC_1
    };
  }

  setMetric(metric) {
    console.log('setMetric, metric = ', metric)
    this.setState({
      metric
    })
  }

  render() {
    return (
      <div className="Demo">
        <select onChange={(e) => this.setMetric(e.target.value)}>
          <option key={METRIC_1}>{METRIC_1}</option>
          <option key={METRIC_2}>{METRIC_2}</option>
          <option key={METRIC_3}>{METRIC_3}</option>
        </select>

        <div>
          The result is {' '}
          <Kpi
             projectId="la84vcyhrq8jwbu4wpipw66q2sqeb923"
             measure={C[this.state.metric]}
             format="#,##0" />
        </div>
      </div>
    );
  }
}

export default App;
