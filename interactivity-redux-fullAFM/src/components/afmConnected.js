// Copyright (C) 2007-2017, GoodData(R) Corporation. All rights reserved.
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import KpiWrapper from './KpiWrapper'
import { Execute as ExecuteOrig, AfmComponents } from '@gooddata/react-components';
import afmConnect from '../afmConnect'
import { withoutKeys } from './util'

/**
 * A wrapper for GoodData AFM Components connected to AFM controls via the
 * afmConnect method.
 */
export const AfmComponentWrapper = (InnerComponent) => afmConnect(class extends Component {
  static propTypes = {
    projectId: PropTypes.string.isRequired,
    measureGroup: PropTypes.string,
    filterGroup: PropTypes.string,
    labelsGroup: PropTypes.string,
    afm: PropTypes.object // if no AFM is provided, the component won't be rendered until a measure or an attribute is retrieved from the connected measureGroup or attributeGroup
  }

  render() {
    const { afm, measures, filters, labels } = this.props
    const dontPass = { measures: true }
    const props = withoutKeys(this.props, dontPass)
    const newAfm = afm ? { ...afm } : {}
    if (Array.isArray(measures)) {
      newAfm.measures = measures.map(measure => (
        (typeof(measure) === "string")
          ? {
            localIdentifier: measure, // reusing the measure identifier as an AFM specific identifier
            definition: {
              measure: {
                item: {
                  identifier: measure // here we are referring to the actual measure from a GoodData workspace
                }
              }
            }
          }
          : measure
      ))
    }
    if (Array.isArray(filters)) {
      newAfm.filters = filters
    }
    if (Array.isArray(labels)) { // even though they are labels, the corresponding AFM key is actually 'attributes'
      newAfm.attributes = labels.map(label => (
        (typeof(label) === "string") ? {
          localIdentifier: label,
          displayForm: {
            identifier: label
          }
        }
        : label
      ))
    }
    if (!Array.isArray(labels) && !Array.isArray(measures)) {
      return null
    }
    return (
      <InnerComponent afm={newAfm} {...props} />
    )
  }
})

export const Kpi = afmConnect(KpiWrapper)

export const BarChart = AfmComponentWrapper(AfmComponents.BarChart)

export const ColumnChart = AfmComponentWrapper(AfmComponents.ColumnChart)

export const LineChart = AfmComponentWrapper(AfmComponents.LineChart)

export const PieChart = AfmComponentWrapper(AfmComponents.PieChart)

export const Table = AfmComponentWrapper(AfmComponents.Table)

export const Execute = AfmComponentWrapper(ExecuteOrig)