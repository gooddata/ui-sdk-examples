import React, { Component } from 'react';
import { Kpi, ColumnChart, Execute, Visualization } from './components/afmConnected';
import { Model } from '@gooddata/react-components';
import { AfmActions } from '@gooddata/gdc-afm-connect';
import { connect } from 'react-redux';
import C from './catalog';
import config from './config';
import { FG_MAIN } from './constants';
import AttributeDropdown from './components/AttributeDropdown';
import CustomBarChart from './components/CustomBarChart';

import '@gooddata/react-components/styles/css/main.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleCityFilterChanged = this.handleCityFilterChanged.bind(this);
  }

  componentDidMount() {
    window.addEventListener('message', this.handleCityFilterChanged);
  }

  componentWillUnmount() {
    window.removeEventListener('message', this.handleCityFilterChanged);
  }

  handleCityFilterChanged(message) {
      // catching postMessages when embedded into pixel-perfect dashboard
      let data;

      console.log(message);

      if (message.data) {
        try {
          data = JSON.parse(message.data);
        } catch(e) {
          data = message.data;
        }
      }

      if (data && data.gdc && data.gdc.name === 'filter.value.changed') {
        const values = data.gdc.data;

        if (values.length && values[0].label === C.attributeDisplayForm('Location City')) {
          this.props.cityFilterChanged(values)
        }
      }
  }

  render() {
    return (
      <div className="App">
        <div style={{ width: 400, margin: 'auto', marginBottom: 20, marginTop: 20 }}>
          <AttributeDropdown
            {...config}
            filterGroup={FG_MAIN}
            attribute={C.attributeDisplayForm('Location City')}
            placeholder="Filter cities"
          />
        </div>
        <Kpi
          {...config}
          filterGroup={FG_MAIN}
          measure={C.measure('# Checks')}
        />
        <div style={{ height: 400 }}>
          <Visualization
            {...config}
            filterGroup={FG_MAIN}
            identifier="aby6oS6DbpFX"
          />
        </div>
        <div style={{ height: 400 }}>
          <ColumnChart
            {...config}
            filterGroup={FG_MAIN}
            measures={[Model.measure(C.measure('# Checks'))]}
            viewBy={Model.attribute(C.attributeDisplayForm('Location City'))}
            stackBy={Model.attribute(C.attributeDisplayForm('Location Name'))}
          />
        </div>
        <div style={{ height: 400 }}>
          <Execute
            {...config}
            filterGroup={FG_MAIN}
            afm={{
              measures: [{
                localIdentifier: 'm1',
                definition: {
                  measure: {
                    item: {
                      identifier: C.measure('# Checks')
                    }
                  }
                }
              }],
              attributes: [{
                localIdentifier: 'a1',
                displayForm: {
                  identifier: C.attributeDisplayForm('Location City')
                }
              }]
            }}
            children={CustomBarChart}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  cityFilterChanged: (values) => dispatch(AfmActions.updatePositiveAttributeFilter(
    FG_MAIN,
    C.attributeDisplayForm('Location City'),
    values.map(value => value.elementUri)
  ))
});

export default connect(null, mapDispatchToProps)(App);
