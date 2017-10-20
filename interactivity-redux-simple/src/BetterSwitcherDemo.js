import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Kpi } from '@gooddata/react-components';
import { connect } from 'react-redux'
import { setMetric, onLoadingChanged, onError } from './actions'

import '@gooddata/react-components/styles/css/main.css';
import './Better.css';
import C from './catalog.json';
import { METRIC_1, METRIC_2, METRIC_3 } from './metrics' // default metric


class App extends Component {

  static propTypes = {
    metricId: PropTypes.string,
    metricName: PropTypes.string,
    newMetricName: PropTypes.string,
    isLoading: PropTypes.bool,
    error: PropTypes.object,
    setMetric: PropTypes.func.isRequired,
    onLoadingChanged: PropTypes.func.isRequired,
    onError: PropTypes.func.isRequired
  }

  static defaultProps = {
    metricId: C['METRIC_1'],
    metricName: METRIC_1,
    newMetricName: METRIC_1,
    isLoading: false
  }

  loadingActiveClassName() {
    return this.props.isLoading ? "active" : ""
  }

  errorActiveClassName() {
    return this.props.error ? "active" : ""
  }

  render() {
    const { metricId, metricName } = this.props
    return (
      <div className="Demo">
        <select onChange={(e) => this.props.setMetric(e.target.value)}>
          <option key={METRIC_1}>{METRIC_1}</option>
          <option key={METRIC_2}>{METRIC_2}</option>
          <option key={METRIC_3}>{METRIC_3}</option>
        </select>

        <div>
          {metricName} is {' '}
          <Kpi
             onLoadingChanged={this.props.onLoadingChanged}
             onError={this.props.onError}
             projectId="la84vcyhrq8jwbu4wpipw66q2sqeb923"
             measure={metricId}
             format="#,##0" />
          <div className={'loading ' + this.loadingActiveClassName()}>Loading...</div>
          <div className={'error ' + this.errorActiveClassName()}>
            Error loading <i>{metricName}</i>!
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  metricId: state.metric.id,
  metricName: state.metric.name,
  isLoading: state.isLoading,
  error: state.error
})

const _App = connect(
  mapStateToProps,
  { setMetric, onLoadingChanged, onError }
)(App)

export default _App;
