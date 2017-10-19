import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Kpi } from '@gooddata/react-components';
import { connect } from 'react-redux'
import { setMetric } from './actions'

import '@gooddata/react-components/styles/css/main.css';
import C from './catalog.json';

const METRIC_1 = 'Avg Activities per Rep'
const METRIC_2 = 'Avg Created Opps'

class App extends Component {

  static propTypes = {
    metric: PropTypes.string,
    setMetric: PropTypes.func.isRequired
  }

  static defaultProps = {
    metric: METRIC_1
  }

  render() {
    return (
      <div className="App">
        <select onChange={(e) => this.props.setMetric(e.target.value)}>
          <option key={METRIC_1}>{METRIC_1}</option>
          <option key={METRIC_2}>{METRIC_2}</option>
        </select>

        <div>
          {this.props.metric} is {' '}
          <Kpi
             projectId="la84vcyhrq8jwbu4wpipw66q2sqeb923"
             measure={C[this.props.metric]}
             format="#,##0" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  metric: state.metric.active
})

const _App = connect(
  mapStateToProps,
  { setMetric }
)(App)

export default _App;
