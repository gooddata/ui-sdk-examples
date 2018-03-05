import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Button, ButtonGroup } from 'reactstrap';
import { AfmComponents } from '@gooddata/react-components';

import '@gooddata/react-components/styles/css/main.css';
import 'bootstrap/dist/css/bootstrap.css'

const { LineChart } = AfmComponents

// Date dimension display forms are prefixed with
// the date dimension identifier string and always
// suffixed with the strings like the following ones.
// See https://help.gooddata.com/display/bHsp5IhQjuz0e6HS0s76/gdc-catalog-export
// for 
const SUFFIX = {
  month:   'acx81lMifn6q',  // the "January/2018" display form's suffix
  week:    'aa281lMifn6q',  // the "W1/2018" display form's suffix
  date:    'date.long',     // the "Mon, Feb 19, 2018" display form's suffix
  dataSet: 'dataset.dt'     // used in the AFM filter definition
}

class App extends Component {
  constructor(props) {
    super(props)
    this.back = {
      date:   props.daysBack,
      week:  props.weeksBack,
      month: props.monthsBack
    }
    this.state = {
      grain: props.defaultGrain,
      back:  this.back[props.defaultGrain],
      // External filters are received via inter-frame
      // messaging.
      // See 
      externalFilters: []
    }
  }

  static propTypes = {
    project:       PropTypes.string.isRequired,
    measure:       PropTypes.string.isRequired,
    dateDimension: PropTypes.string.isRequired,
    defaultGrain:  PropTypes.string,
    daysBack:      PropTypes.number,
    weeksBack:     PropTypes.number,
    monthsBack:    PropTypes.number
  }

  static defaultProps = {
    defaultGrain: 'date', // date, week, month
    daysBack:     14,
    weeksBack:    12,
    monthsBack:   12
  }

  componentDidMount() {
    window.addEventListener('message', this.handleMessage)
  } 

  componentWillUnmount() {
    window.removeEventListener('message', this.handleMessage)
  }

  // See https://help.gooddata.com/display/doc/Embedded+Dashboard+and+Report+API+-+Events+and+Methods#EmbeddedDashboardandReportAPI-EventsandMethods-Dashboardattributeanddatefilterschanged
  // TODO this method updates state but the state is not yet
  // reflected in the output of the afm() method
  handleMessage(event) {
    const message = (event.data && typeof(event.data) === 'string')
      ? JSON.parse(event.data) : event.data
    console.log('event', event)
    if (message && message.gdc) {
      if (message.gdc.name === "filter.value.changed" && message.gdc.type === 'app.ok') {
        const stateUpdate = {}
        message.gdc.setFilterContext.forEach(f => {
          stateUpdate[f.label] = f
        })
        console.log('stateUpdate', stateUpdate)
        this.setState(stateUpdate)
      }
    }
  }

  setGrain(grainId) {
    this.setState({
      grain: grainId,
      back:  this.back[grainId]
    })
  }

  afm() {
    const { measure, dateDimension } = this.props
    return {
      measures: [{
        localIdentifier: 'm1',
        definition: {
          measure: {
            item: {
              identifier: measure
            }
          }
        }
      }],
      attributes: [{
        localIdentifier: 'a1',
        displayForm: {
          // An identifier of a date dimension attribute is prefixed
          // with a date dimension specific identifier and ends with
          // a common (though not always easy to guess) constant
          // See also comments next to the definition of the SUFFIX
          // object.
          identifier: dateDimension + '.' + SUFFIX[this.state.grain]
        }
      }],
      filters: [{
        // for each grain, let's set the filter to X weeks/days/month
        // above as defined in this.back
        relativeDateFilter: {
          dataSet: {
            identifier: dateDimension + '.' + SUFFIX.dataSet
          },
          granularity: 'GDC.time.' + this.state.grain,
          from: -1 * this.state.back,
          to: 0 // this day/week/month
        }
      }]
    }
  }

  renderButton(grainId, label) {
    return (
      <Button
        color="primary"
        onClick={() => this.setGrain(grainId)}
        active={this.state.grain === grainId}>{label}</Button>
    )
  }

  // Do not change the grainId values - they map to supported
  // granularities of relative date filters as documented at
  // https://help.gooddata.com/display/bHsp5IhQjuz0e6HS0s76/AFM#AFM-Filter
  render() {
    return (
      <div>
        <ButtonGroup>
          { this.renderButton('date', 'Day') }
          { this.renderButton('week', 'Week') }
          { this.renderButton('month', 'Month') }
        </ButtonGroup>
        <LineChart projectId={this.props.project} afm={this.afm()} />
      </div>
    );
  }
}

export default App;
