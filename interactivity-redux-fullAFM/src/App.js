import React, { Component } from 'react';
import '@gooddata/react-components/styles/css/main.css';

import afmConnect from './afmConnect'
import { Kpi, ColumnChart } from './components/afmConnected'
import './App.css';
import C from './catalog.json';
import { METRIC_1, METRIC_2, METRIC_3 } from './metrics'

const projectId = { projectId: "la84vcyhrq8jwbu4wpipw66q2sqeb923" }

const PureMetricDropdown = ({ metrics, setMetrics, group }) => (
  <select onChange={e => setMetrics(group, e.target.value)}>
    {metrics.map(metricName =>
      <option key={metricName} value={C[metricName]}>{metricName}</option>
    )}
  </select>
)

const MetricDropdown = afmConnect(PureMetricDropdown)

const metrics = [ METRIC_1, METRIC_2, METRIC_3 ]
const metricTransformation = metrics.map(m => ({ id: C[m], title: m }))

const App = () => (
  <div className="App">
    <MetricDropdown group="mg1" metrics={metrics} />
    <div>
      <Kpi metricGroup="mg1" 
        measure={C[METRIC_1]}
        format="#,##0"
        { ...projectId } />
    </div>
    <div style={{height: 400, width: 600}}>
      <ColumnChart metricGroup="mg1"
        { ...projectId }
        transformation={{ measures: metricTransformation }} />
    </div>
  </div>
)

export default App;
