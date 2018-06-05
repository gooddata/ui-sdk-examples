import React, { Component } from 'react';
import { Kpi, Visualization, ColumnChart, Execute } from '@gooddata/react-components';
import { CatalogHelper } from '@gooddata/react-components';
import catalogJson from './catalog.json';
import logo from './logo.svg';
import '@gooddata/react-components/styles/css/main.css';
import './App.css';

const C = new CatalogHelper(catalogJson);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <Kpi
            projectId="xms7ga4tf3g3nzucd8380o2bev8oeknp"
            measure={C.measure('$ Total Sales')}
          />
          <div style={{ height: 400 }}>
            <Visualization
              projectId="xms7ga4tf3g3nzucd8380o2bev8oeknp"
              identifier="aby6oS6DbpFX"
            />
          </div>
          <div style={{ height: 400 }}>
            <ColumnChart
              projectId="xms7ga4tf3g3nzucd8380o2bev8oeknp"
              config={{
                colors: ['#5B9BD5', '#FFC819', '#6B67DB', '#FFD962', '#FFBE62', '#82B7E6', '#908DE9', '#FFE388', '#FFCE88'],
                legend: {
                  enabled: false
                }
              }}
              measures={[{
                measure: {
                  localIdentifier: 'm1',
                  alias: '# Checks 💰',
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
                  localIdentifier: 'a1',
                  alias: 'Location 🏙',
                  displayForm: {
                    identifier: C.attributeDisplayForm('Location City')
                  }
                }
              }}
              stackBy={{
                visualizationAttribute: {
                  localIdentifier: 'a2',
                  displayForm: {
                    identifier: C.attributeDisplayForm('Location Name')
                  }
                }
              }}
            />
          </div>
          <Execute
            projectId="xms7ga4tf3g3nzucd8380o2bev8oeknp"
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
              }, {
                localIdentifier: 'a2',
                displayForm: {
                  identifier: C.attributeDisplayForm('Location Name')
                }
              }]
            }}
            resultSpec={{
              dimensions: [{
                itemIdentifiers: ['a2']
              }, {
                itemIdentifiers: ['a1', 'measureGroup']
              }]
            }}
            onLoadingFinish={({ result }) => console.log(result)}
            children={({error, isLoading, result}) => (
              result && <pre style={{ textAlign: 'left' }}>{JSON.stringify(result.executionResult, null, 2)}</pre>
            )}
          />
        </div>
      </div>
    );
  }
}

export default App;
