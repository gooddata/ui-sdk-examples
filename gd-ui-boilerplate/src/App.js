import React, { useState, useEffect } from 'react';
import { Headline, ColumnChart, Execute, Visualization, Model } from '@gooddata/react-components';
import C from './catalog';
import config from './config';
import AttributeDropdown from './components/AttributeDropdown';
import CustomBarChart from './components/CustomBarChart';
import { loginMachinery } from './utils';

import '@gooddata/react-components/styles/css/main.css';
import './App.css';

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    loginMachinery({ ...config }, () => setIsLogged(true));
  });

  if (!isLogged) {
    return <span>Checking your credentials, please wait…</span>;
  }

  return (
    <div className="App">
      <div style={{ width: 400, margin: 'auto', marginBottom: 20, marginTop: 20 }}>
        <AttributeDropdown
          {...config}
          placeholder="Filter cities"
          attribute={C.attributeDisplayForm('Location City')}
          filters={filters}
          updateFilters={setFilters}
        />
      </div>
      <div>
        # of Location City: <Headline
          {...config}
          filters={filters}
          primaryMeasure={Model.measure(C.measure('# Location City'))}
        />
        <br />
        <br />
      </div>
      <div style={{ height: 400 }}>
        <Visualization
          {...config}
          filters={filters}
          identifier="aby6oS6DbpFX"
        />
      </div>
      <div style={{ height: 400 }}>
        <ColumnChart
          {...config}
          filters={filters}
          measures={[Model.measure(C.measure('# Checks'))]}
          viewBy={Model.attribute(C.attributeDisplayForm('Location City'))}
          stackBy={Model.attribute(C.attributeDisplayForm('Location Name'))}
        />
      </div>
      <div style={{ height: 400 }}>
        <Execute
          {...config}
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
            }],
            filters
          }}
          children={CustomBarChart}
        />
      </div>
    </div>
  );
}

export default App;
