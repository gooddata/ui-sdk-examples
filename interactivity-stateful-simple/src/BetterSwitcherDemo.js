import React, { Component } from 'react';
import { Kpi } from '@gooddata/react-components';

import '@gooddata/react-components/styles/css/main.css';
import './Better.css';
import C from './catalog.json';

const METRIC_1 = 'Avg Activities per Rep'
const METRIC_2 = 'Avg Created Opps'
const METRIC_3 = 'Non-existing Metric'

class App extends Component {
  constructor(props) {
    super(props);
    this.newMetricName = METRIC_1
    this.state = {
      metricName: this.newMetricName,
      metricId: C[METRIC_1],
      isLoading: false,
      error: null
    };
  }

  setMetric(metricName) {
    console.log('setMetric, metric = ', metricName)
    this.setState({
      metricId: C[metricName], // triggers refreshing the Kpi component
      error: null // let's start again and forget about previous errors
    })
    this.newMetricName = metricName
  }

  onLoadingChanged(e) {
    console.log('loading changed', e); // e = { isLoading: true|false}
    const state = {
      ...e,
    }
    if (!e.isLoading && !this.state.error) {
      state.metricName = this.newMetricName // triggers refreshing the Kpi label
    }
    this.setState(state)
  }

  onError(e) {
    console.log('error', e)
    this.setState({ error: e})
  }

  loadingActiveClassName() {
    return this.state.isLoading ? "active" : ""
  }

  errorActiveClassName() {
    return this.state.error ? "active" : ""
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
          {this.state.metricName} is {' '}
          <Kpi
             onLoadingChanged={this.onLoadingChanged.bind(this)}
             onError={this.onError.bind(this)}
             projectId="la84vcyhrq8jwbu4wpipw66q2sqeb923"
             measure={this.state.metricId}
             format="#,##0" />
          <div className={'loading ' + this.loadingActiveClassName()}>Loading...</div>
          <div className={'error ' + this.errorActiveClassName()}>
            Error loading <i>{this.state.metricName}</i>!
          </div>
        </div>
      </div>
    );
  }
}

export default App;
