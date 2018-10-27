import React, { Component } from 'react';
import { Kpi, ColumnChart, AfmColumnChart } from './components/afmConnected';
import C from './catalog';
import config from './config';
import { FG_MAIN } from './constants';
import AttributeDropdown from './components/AttributeDropdown';

import '@gooddata/react-components/styles/css/main.css';
import './App.css';

class App extends Component {
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
          <ColumnChart
            {...config}
            filterGroup={FG_MAIN}
            measures={[{
              measure: {
                localIdentifier: 'm-checks',
                definition: {
                  measureDefinition: {
                    item: {
                      identifier: C.measure('# Checks')
                    }
                  }
                }
              }
            }]}
            viewBy={{
              visualizationAttribute: {
                localIdentifier: 'a-city',
                displayForm: {
                  identifier: C.attributeDisplayForm('Location City')
                }
              }
            }}
            stackBy={{
              visualizationAttribute: {
                localIdentifier: 'a-name',
                displayForm: {
                  identifier: C.attributeDisplayForm('Location Name')
                }
              }
            }}
          />
        </div>
        <div style={{ height: 400 }}>
          <AfmColumnChart
            {...config}
            filterGroup={FG_MAIN}
            afm={{
              measures: [{
                localIdentifier: 'm-checks',
                definition: {
                  measure: {
                    item: {
                      identifier: C.measure('# Checks')
                    }
                  }
                }
              }],
              attributes: [{
                localIdentifier: 'a-city',
                displayForm: {
                  identifier: C.attributeDisplayForm('Location City')
                }
              }, {
                localIdentifier: 'a-name',
                displayForm: {
                  identifier: C.attributeDisplayForm('Location Name')
                }
              }]
            }}
            resultSpec={{
              dimensions: [{
                itemIdentifiers: ['a-name']
              }, {
                itemIdentifiers: ['a-city', 'measureGroup']
              }]
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
