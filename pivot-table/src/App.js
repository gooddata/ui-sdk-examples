// Copyright (C) 2007-2017, GoodData(R) Corporation. All rights reserved.
import React from 'react';
import { Visualization } from '@gooddata/react-components';
import CustomTable from './CustomTable';

import '@gooddata/react-components/styles/css/main.css';
import './App.css';

const PROJECT_ID = 'xms7ga4tf3g3nzucd8380o2bev8oeknp';
const VIZ_URI = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/8936';

const App = () => (
  <div className="App">
    <h1>Pivot Table Example Using GoodData.UI <a target="_blank" rel="noopener noreferrer" href="https://sdk.gooddata.com/gooddata-ui/docs/execute_component.html">&lt;Execute /></a> component</h1>
    <p>
      URI of used visualization: <tt>{VIZ_URI}</tt>
    </p>
    <p>
      You can edit visualization in <a target="_blank" rel="noopener noreferrer" href={`https://developer.na.gooddata.com/analyze/#/${PROJECT_ID}/${VIZ_URI.split('/').slice(-1)[0]}/edit`}>Analytical Designer</a> or change the <tt>VIZ_URI</tt> constant in <tt>/src/App.js</tt>.
    </p>
    <p>
      See the implementation of pivoted table in <tt>/src/CustomTable.js</tt> component.
    </p>
    <h2>Table as created in Analytical Designer</h2>
    <div style={{ height: 300 }}>
      <Visualization
        projectId={PROJECT_ID}
        uri={VIZ_URI}
      />
    </div>
    <h2>Custom table with the same data as above</h2>
    <div>
      <CustomTable
        projectId={PROJECT_ID}
        uri={VIZ_URI}
      />
    </div>
  </div>
);

export default App;
