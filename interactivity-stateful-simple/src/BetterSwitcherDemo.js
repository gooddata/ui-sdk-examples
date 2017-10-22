import React, { Component } from 'react';
import { Kpi } from '@gooddata/react-components';

import '@gooddata/react-components/styles/css/main.css';
import './Better.css';
import C from './catalog.json';

const MEASURE_1 = 'Avg Activities per Rep'
const MEASURE_2 = '# of Activities'
const MEASURE_3 = 'Non-existing Measure'

class App extends Component {
  constructor(props) {
    super(props);
    this.newMeasureName = MEASURE_1
    this.state = {
      measureName: this.newMeasureName,
      measureId: C[MEASURE_1],
      isLoading: false,
      error: null
    };
  }

  setMeasure(measureName) {
    console.log('setMeasure ', measureName)
    this.setState({
      measureId: C[measureName], // triggers refreshing the Kpi component
      error: null // let's start again and forget about previous errors
    })
    this.newMeasureName = measureName
  }

  onLoadingChanged(e) {
    console.log('loading changed', e); // e = { isLoading: true|false}
    const state = {
      ...e,
    }
    if (!e.isLoading && !this.state.error) {
      state.measureName = this.newMeasureName // triggers refreshing the Kpi label
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
        <select onChange={(e) => this.setMeasure(e.target.value)}>
          <option key={MEASURE_1}>{MEASURE_1}</option>
          <option key={MEASURE_2}>{MEASURE_2}</option>
          <option key={MEASURE_3}>{MEASURE_3}</option>
        </select>

        <div>
          {this.state.measureName} is {' '}
          <Kpi
             onLoadingChanged={this.onLoadingChanged.bind(this)}
             onError={this.onError.bind(this)}
             projectId="la84vcyhrq8jwbu4wpipw66q2sqeb923"
             measure={this.state.measureId}
             format="#,##0" />
          <div className={'loading ' + this.loadingActiveClassName()}>Loading...</div>
          <div className={'error ' + this.errorActiveClassName()}>
            Error loading <i>{this.state.measureName}</i>!
          </div>
        </div>
      </div>
    );
  }
}

export default App;
