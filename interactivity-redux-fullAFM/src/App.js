// Copyright (C) 2007-2017, GoodData(R) Corporation. All rights reserved.
import React, { Component } from 'react';
import '@gooddata/react-components/styles/css/main.css';

import { AttributeElements } from '@gooddata/react-components';
import afmConnect from './afmConnect'
import { Kpi, ColumnChart } from './components/afmConnected'
import './App.css';

import { AVAILABLE_MEASURES, AVAILABLE_ATTRIBUTES } from './constants'
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
        <option key={measureName} value={C.measure(measureName)}>
          {measureName}
        </option>
      )}
    </select>
  )
}

const MeasureDropdown = afmConnect(PureMeasureDropdown)

/*
 * A simple presentation component that renders a dropdown
 * populated with attributes (resp. their default labels
 * a.k.a. display forms) passed via the "available" property
 * and associates it with action creators to be received from
 * a container component (the AttributeDropdown component defined
 * right underneath).
 *
 * The action created by the setLabels action creator will
 * result into putting the specified label(s) into a label
 * group so it can be used by the wrapper components imported
 * from './components/smart'.
 */
const PureAttributeDropdown = ({ labels, available, setLabels, labelGroup }) => {
  const selected = (labels && labels.length > 0) ? labels [0] : AVAILABLE_ATTRIBUTES[0]
  return (
    <select onChange={e => setLabels(labelGroup, e.target.value)}
            defaultValue={selected}>
      {available.map(attributeName =>
        <option key={attributeName} value={C.attributeDisplayForm(attributeName)}>
          {attributeName}
        </option>
      )}
    </select>
  )
}

const AttributeDropdown = afmConnect(PureAttributeDropdown)

/*
 * A simple presentation component that renders a dropdown
 * with attribute values for a given attributeLabel.
 *
 * The updateAttributeFilter is analogous to the setMeasures
 * action creator described above.
 */
const PureAttributeElementsDropdown = ({ attributeLabel, filterGroup, updatePositiveAttributeFilter }) => {
  // for the sake of simplicity, let's assume no paging is required
  // to render filter
  return (
    <AttributeElements identifier={attributeLabel} {...projectId} options={{ limit: 20 }}>{
      (output) => (
        <select onChange={e => updatePositiveAttributeFilter(filterGroup, attributeLabel, e.target.value)}>
          <option key="-1" value="">All Regions</option>
          {console.log('output', output)}
          {
            (output.validElements == null) ? null : output.validElements.items.map(({ element }) => (
              <option key={element.uri} value={element.uri}>
                {element.title || 'Unknown Region'}
              </option>
            ))
          }
        </select>
    )}</AttributeElements>
  )
}

const AttributeElementsDropdown = afmConnect(PureAttributeElementsDropdown)

const measureTransformation = AVAILABLE_MEASURES.map(measureName =>
  ({ id: C.measure(measureName), title: measureName })
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
    <span> Slice by:</span>
    <AttributeDropdown labelGroup="lg1" available={AVAILABLE_ATTRIBUTES} />
    <span> AccountRegion:</span>
    <AttributeElementsDropdown attributeLabel={C.attributeDisplayForm("Account Region")} filterGroup="fg1" />
    <h1>
      <Kpi measureGroup="mg1" filterGroup="fg1"
        measure={C.measure(AVAILABLE_MEASURES[0])}
        format="#,##0"
        { ...projectId } />
    </h1>
    <div style={{height: 400, width: 600}}>
      <ColumnChart measureGroup="mg1" labelGroup="lg1" filterGroup="fg1"
        { ...projectId }
        transformation={{ measures: measureTransformation }} />
    </div>
  </div>
)

export default App;
