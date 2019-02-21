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
import { loginMachinery } from './utils';

import '@gooddata/react-components/styles/css/main.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogged: false
    };

    this.handleIncomingCityFilterChange = this.handleIncomingCityFilterChange.bind(this);
    this.handleOutcomingCityFilterChange = this.handleOutcomingCityFilterChange.bind(this);
  }

  componentDidMount() {
    loginMachinery({ ...config }, () => this.setState({ isLogged: true }) );

    window.addEventListener('message', this.handleIncomingCityFilterChange);
  }

  componentWillUnmount() {
    window.removeEventListener('message', this.handleIncomingCityFilterChange);
  }

  handleIncomingCityFilterChange(message) {
    // catching postMessages when embedded into pixel-perfect dashboard
    let data;

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

  handleOutcomingCityFilterChange(payload) {
    const { label, values } = payload;

    var postMessageStructure = {
      gdc: {
        setFilterContext: values.length ? values.map(value => ({
          label,
          type: 'attribute',
          value: value.label
        })) : [{
          label,
          type: 'attribute',
          value: 'GDC_SELECT_ALL'
        }]
      }
    };

    window.parent.postMessage(JSON.stringify(postMessageStructure), '*');
  }

  render() {
    const { isLogged } = this.state;

    if (!isLogged) {
      return <span>Checking your credentials, please wait…</span>;
    }

    return (
      <div className="App">
        <div style={{ width: 400, margin: 'auto', marginBottom: 20, marginTop: 20 }}>
          <AttributeDropdown
            {...config}
            filterGroup={FG_MAIN}
            attribute={C.attributeDisplayForm('Location City')}
            placeholder="Filter cities"
            onChange={this.handleOutcomingCityFilterChange}
          />
        </div>
        <div>
          # of Location City: <Kpi
            {...config}
            filterGroup={FG_MAIN}
            measure={C.measure('# Location City')}
          />
          <br />
          <br />
        </div>
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
  cityFilterChanged: (values) => {
    if (values[0].value === 'GDC_SELECT_ALL') {
      dispatch(AfmActions.removeAttributeFilter(
        FG_MAIN,
        C.attributeDisplayForm('Location City')
      ));
    } else {
      dispatch(AfmActions.updatePositiveAttributeFilter(
        FG_MAIN,
        C.attributeDisplayForm('Location City'),
        values.map(value => value.elementUri)
      ));
    }
  }
});

export default connect(null, mapDispatchToProps)(App);
