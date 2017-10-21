import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Kpi as KpiOrig, Execute as ExecuteOrig, AfmComponents } from '@gooddata/react-components';
import afmConnect from '../afmConnect'

const withoutKeys = (sourceObject, keysToExclude) => (
  Object.keys(sourceObject)
    .filter(key => !keysToExclude[key])
    .reduce((obj, key) => {
      obj[key] = sourceObject[key]
      return obj
    }, {})
)

/**
 * A wrapper for GoodData AFM Components connected to AFM controls via the
 * afmConnect method.
 */
export const AfmComponentWrapper = (InnerComponent) => afmConnect(class extends Component {
  static propTypes = {
    projectId: PropTypes.string.isRequired,
    metricGroup: PropTypes.string,
    metricGroups: PropTypes.object.isRequired, // via afmConnect
    filterGroup: PropTypes.string,
    filterGroups: PropTypes.object.isRequired, // via afmConnect
    afm: PropTypes.object // if no AFM is provided, the component won't be rendered until a measure or an attribute is retrieved from the connected measureGroup or attributeGroup
  }

  render() {
    const { afm, metricGroup, metricGroups, filterGroup, filterGroups } = this.props
    const dontPass = { measure: true, metricGroup: true, metricGroups: true,
                     filterGroup: true, filterGroups: true,
                     attributeGroup: true, attributeGroups: true }
    const props = withoutKeys(this.props, dontPass)
    const metrics = metricGroup ? metricGroups[metricGroup] : null
    const attributes = null // TODO
    const filters = null // TODO
    const newAfm = afm ? { ...afm } : {}
    if (Array.isArray(metrics)) {
      newAfm.measures = metrics.map(metric => (
        (typeof(metric) === "string")
          ? {
            id: metric, // reusing the measure identifier as an AFM specific identifier
            definition: {
              baseObject: {
                id: metric // here we are referring to the actual measure from a GoodData workspace
              }
            }
          }
          : metric
      ))
    }
    if (Array.isArray(attributes)) { // It's actually an array of attribute display forms a.k.a. labels
      newAfm.attributes = attributes.map(attr => ({
        id: attr,
        type: 'attribute' // TODO it can be a 'date' too...
      }))
    }
    if (!Array.isArray(attributes) && !Array.isArray(metrics)) {
      return null
    }
    return (
      <InnerComponent afm={newAfm} {...props} />
    )
  }
})

/**
 * A wrapper of GoodData's Kpi component connected to AFM controls via the
 * afmConnect method.
 *
 * Depending the parameters, the component renders:
 * 1. First metric from the group identified by the metricGroup parameter
 * 2. If no such metri exists, the metric identified by the measure parameter is used
 * 3. If no measure parameter is provided, nothing is rendered (component returns null)
 */
const KpiWrapper = (props) => {
  const { measure, metricGroup, metricGroups, filterGroup, filterGroups } = props
  const dontPass = { measure: true, metricGroup: true, metricGroups: true,
                     filterGroup: true, filterGroups: true }
  const kpiProps = withoutKeys(props, dontPass)

  const metrics = metricGroup ? metricGroups[metricGroup] : null
  const metric  = metrics ? (metrics[0] || measure) : measure

  return metric
    ? <KpiOrig measure={metric} {...kpiProps} />
    : null
}

KpiWrapper.propTypes = {
  measure: PropTypes.string,
  projectId: PropTypes.string.isRequired,
  metricGroup: PropTypes.string,
  metricGroups: PropTypes.object.isRequired, // via afmConnect
  filterGroup: PropTypes.string,
  filterGroups: PropTypes.object.isRequired, // via afmConnect
}

export const Kpi = afmConnect(KpiWrapper)

export const BarChart = AfmComponentWrapper(AfmComponents.BarChart)

export const ColumnChart = AfmComponentWrapper(AfmComponents.ColumnChart)

export const LineChart = AfmComponentWrapper(AfmComponents.LineChart)

export const PieChart = AfmComponentWrapper(AfmComponents.PieChart)

export const Table = AfmComponentWrapper(AfmComponents.Table)

export const Execute = AfmComponentWrapper(ExecuteOrig)