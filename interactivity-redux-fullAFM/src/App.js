// Copyright (C) 2007-2017, GoodData(R) Corporation. All rights reserved.
import React, { Component } from 'react';
import '@gooddata/react-components/styles/css/main.css';

import { Execute } from '@gooddata/react-components'
import afmConnect from './afmConnect'
import { Kpi, ColumnChart } from './components/smart'
import './App.css';

import { AVAILABLE_MEASURES } from './measures'
import C from './catalog'

const projectId = { projectId: "la84vcyhrq8jwbu4wpipw66q2sqeb923" }

/*
 * A simple presentation component that renders a dropdown
 * populated with metrics passed via the "available" property
 * and associates it with action creators to be received from
 * a container component (the MeasureDropdown component defined
 * right underneath).
 *
 * The action created by the setMeasures action creator will
 * result into putting the specified measure(s) into a metric
 * group so it can be used by the wrapper components imported
 * from './components/smart'.
 */
const PureMeasureDropdown = ({ measures, available, setMeasures, measureGroup }) => {
  const selected = (measures && measures.length > 0) ? measures[0] : AVAILABLE_MEASURES[0]
  return (
    <select onChange={e => setMeasures(measureGroup, e.target.value)}
            defaultValue={selected}>
      {available.map(measureName =>
        <option key={measureName} value={C.metric(measureName)}>
          {measureName}
        </option>
      )}
    </select>
  )
}

const MeasureDropdown = afmConnect(PureMeasureDropdown)

/*
 * A simple presentation component that renders a dropdown
 * with attribute values for a given attributeLabel.
 *
 * The updateAttributeFilter is analogous to the setMeasures
 * action creator described above.
 */
const PureAttributeElementsDropdown = ({ attributeLabel, filterGroup, updateAttributeFilter }) => {
  const afm = { attributes: [ { id: attributeLabel, type: "attribute" } ]}
  return (
    <Execute {...projectId} afm={afm} onLoadingChanged={e=>{}} onError={e=>{}}>{
      (output) => (
        <select onChange={e => updateAttributeFilter(filterGroup, attributeLabel, e.target.value)}>
          <option key="-1" value="">All Regions</option>
          {
            output.result.rawData.map(row => (
              <option key={row[0].id} value={row[0].id}>
                {row[0].name || 'Unknown Region'}
              </option>
            ))
          }
        </select>
    )}</Execute>
  )
}

const AttributeElementsDropdown = afmConnect(PureAttributeElementsDropdown)

const measureTransformation = AVAILABLE_MEASURES.map(measureName =>
  ({ id: C.metric(measureName), title: measureName })
)

/*
 * A sample application component demonstrates how measureGroups
 * and filterGroups are used to connect input controls (such as
 * MeasureDropdown or AttributeElementsDropdown) with visualization
 * components imported from './components/smart'.
 */
const App = () => (
  <div className="App">
    <span>Select measure:</span>
    <MeasureDropdown measureGroup="mg1" available={AVAILABLE_MEASURES} />
    <span> AccountRegion:</span>
    <AttributeElementsDropdown attributeLabel={C.attributeDisplayForm("Account Region")} filterGroup="fg1" />
    <div>
      <Kpi measureGroup="mg1" filterGroup="fg1"
        measure={C.metric(AVAILABLE_MEASURES[0])}
        format="#,##0"
        { ...projectId } />
    </div>
    <div style={{height: 400, width: 600}}>
      <ColumnChart measureGroup="mg1" filterGroup="fg1"
        { ...projectId }
        transformation={{ measures: measureTransformation }} />
    </div>
  </div>
)

export default App;
