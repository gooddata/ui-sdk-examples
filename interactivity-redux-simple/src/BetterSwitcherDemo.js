import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Kpi } from '@gooddata/react-components';
import { connect } from 'react-redux'
import { setMeasure, onLoadingChanged, onError } from './actions'

import '@gooddata/react-components/styles/css/main.css';
import './Better.css';
import C from './catalog.json';
import { MEASURE_1, MEASURE_2, MEASURE_3 } from './measures'


class App extends Component {

  static propTypes = {
    measureId: PropTypes.string,
    measureName: PropTypes.string,
    newMeasureName: PropTypes.string,
    isLoading: PropTypes.bool,
    error: PropTypes.object,
    setMeasure: PropTypes.func.isRequired,
    onLoadingChanged: PropTypes.func.isRequired,
    onError: PropTypes.func.isRequired
  }

  static defaultProps = {
    measureId: C['MEASURE_1'],
    measureName: MEASURE_1,
    newMeasureName: MEASURE_1,
    isLoading: false
  }

  loadingActiveClassName() {
    return this.props.isLoading ? "active" : ""
  }

  errorActiveClassName() {
    return this.props.error ? "active" : ""
  }

  render() {
    const { measureId, measureName } = this.props
    return (
      <div className="Demo">
        <select onChange={(e) => this.props.setMeasure(e.target.value)}>
          <option key={MEASURE_1}>{MEASURE_1}</option>
          <option key={MEASURE_2}>{MEASURE_2}</option>
          <option key={MEASURE_3}>{MEASURE_3}</option>
        </select>

        <div>
          {measureName} is {' '}
          <Kpi
             onLoadingChanged={this.props.onLoadingChanged}
             onError={this.props.onError}
             projectId="la84vcyhrq8jwbu4wpipw66q2sqeb923"
             measure={measureId}
             format="#,##0" />
          <div className={'loading ' + this.loadingActiveClassName()}>Loading...</div>
          <div className={'error ' + this.errorActiveClassName()}>
            Error loading <i>{measureName}</i>!
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  measureId: state.measure.id,
  measureName: state.measure.name,
  isLoading: state.isLoading,
  error: state.error
})

const _App = connect(
  mapStateToProps,
  { setMeasure, onLoadingChanged, onError }
)(App)

export default _App;
