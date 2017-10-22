import React, { Component } from 'react';
import '@gooddata/react-components/styles/css/main.css';

import afmConnect from './afmConnect'
import { Kpi, ColumnChart } from './components/smart'
import './App.css';
import C from './catalog.json';
import { MEASURE_1, MEASURE_2, MEASURE_3 } from './measures'

const projectId = { projectId: "la84vcyhrq8jwbu4wpipw66q2sqeb923" }

const PureMeasureDropdown = ({ measures, setMeasures, group }) => (
  <select onChange={e => setMeasures(group, e.target.value)}>
    {measures.map(measureName =>
      <option key={measureName} value={C[measureName]}>{measureName}</option>
    )}
  </select>
)

const MeasureDropdown = afmConnect(PureMeasureDropdown)

const measures = [ MEASURE_1, MEASURE_2, MEASURE_3 ]
const measureTransformation = measures.map(measureName =>
  ({ id: C[measureName], title: measureName })
)

const App = () => (
  <div className="App">
    <MeasureDropdown group="mg1" measures={measures} />
    <div>
      <Kpi measureGroup="mg1"
        measure={C[MEASURE_1]}
        format="#,##0"
        { ...projectId } />
    </div>
    <div style={{height: 400, width: 600}}>
      <ColumnChart measureGroup="mg1"
        { ...projectId }
        transformation={{ measures: measureTransformation }} />
    </div>
  </div>
)

export default App;
