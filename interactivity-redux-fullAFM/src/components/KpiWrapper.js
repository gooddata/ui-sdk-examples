// Copyright (C) 2007-2017, GoodData(R) Corporation. All rights reserved.
import React from 'react'
import PropTypes from 'prop-types'
import { Kpi } from '@gooddata/react-components';
import { withoutKeys } from './util'

const injectMeasure = (props, measures) => ({
  measure: (Array.isArray(measures) && measures[0])
    ? measures[0]
    : props.measure
})

const injectFilters = (props, filters) => ({
  filters: []
})

/**
 * A wrapper of GoodData's Kpi component connected to AFM controls via the
 * afmConnect method.
 *
 * Depending the parameters, the component renders:
 * 1. First measure from the group identified by the measureGroup parameter
 * 2. If no such metri exists, the measure identified by the measure parameter is used
 * 3. If no measure parameter is provided, nothing is rendered (component returns null)
 */
const KpiWrapper = (props) => {
  const { measure, measures, filters } = props
  const dontPass = { measures: true }
  const origProps = withoutKeys(props, dontPass)
  const measureProps = injectMeasure(props, measures)
  const filterProps = { filters }

  console.log('filters', filters)
  console.log('filterProps', filterProps)

  return measure
    ? <Kpi {...origProps} {...measureProps} {...filterProps} />
    : null
}

KpiWrapper.propTypes = {
  measure: PropTypes.string,
  projectId: PropTypes.string.isRequired,
  measureGroup: PropTypes.string,
  filterGroup: PropTypes.string
}

export default KpiWrapper