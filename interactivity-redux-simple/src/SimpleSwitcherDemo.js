import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Kpi } from '@gooddata/react-components';
import { connect } from 'react-redux'
import { setMetric } from './actions'

import '@gooddata/react-components/styles/css/main.css';
import C from './catalog.json';

import { METRIC_1, METRIC_2, METRIC_3 } from './metrics'

class App extends Component {

  static propTypes = {
    metricId: PropTypes.string,
    metricName: PropTypes.string,
    setMetric: PropTypes.func.isRequired
  }

  static defaultProps = {
    metricId: C[METRIC_1],
    metricName: METRIC_1
  }

  render() {
    return (
      <div className="Demo">
        <select onChange={(e) => this.props.setMetric(e.target.value)}>
          <option key={METRIC_1}>{METRIC_1}</option>
          <option key={METRIC_2}>{METRIC_2}</option>
          <option key={METRIC_3}>{METRIC_3}</option>
        </select>

        <div>
          {this.props.metricName} is {' '}
          <Kpi
             projectId="la84vcyhrq8jwbu4wpipw66q2sqeb923"
             measure={this.props.metricId}
             format="#,##0" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  metricId: state.metric.id,
  metricName: state.metric.name
})

const _App = connect(
  mapStateToProps,
  { setMetric }
)(App)

export default _App;
