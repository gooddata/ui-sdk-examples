import React from 'react'
import PropTypes from 'prop-types'
import { Kpi } from '@gooddata/react-components';
import { withoutKeys } from './util'

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
  const kpiProps = withoutKeys(props, dontPass)
  if (Array.isArray(measures) && measures[0]) {
    kpiProps.measure = measures[0]
  } else {
    kpiProps.measure = props.measure
  }

  return measure
    ? <Kpi {...kpiProps} />
    : null
}

KpiWrapper.propTypes = {
  measure: PropTypes.string,
  projectId: PropTypes.string.isRequired,
  measureGroup: PropTypes.string,
  filterGroup: PropTypes.string
}

export default KpiWrapper