import * as Types from 'types'

/**
 * Replaces all metrics in the metric context with
 * the specified ones.
 *
 * The metric context is expected to be injected into
 * the AFM parameters of AFM components.
 *
 * A metric provided as a String is treated as a metric
 * identifier rather than an AFM metric object.
 */
export const setMetrics = (metricContext, ...metrics) => ({
  type: Types.SET_METRIC,
  metricContext, metrics
})

/**
 * Adds the specified metric into the metric context.
 *
 * The metric context is expected to be injected into
 * the AFM parameters of AFM components.
 *
 * If metric is provided as a String, it's treated
 * as a metric identifier
 */
export const addMetric = (metricContext, metric) => ({
  type: Types.ADD_METRIC,
  metricContext, metricId
})

/**
 * Removes the specified metrics from the metric context.
 *
 * Consequently, a redux-connected component is expected to
 * remove the specified metrics from the AFMs of connected
 * AFM components.
 *
 * The metricIds are expected to be AFM identifiers (which
 * are the same as metadata identifiers for metrics added
 * via setMetric or addMetric action creators above).
*/
export const removeMetrics = (metricContext, ...metricIds) => ({
  type: Types.REMOVE_METRIC,
  metricContext, metricId
})

export const updateAttributeFilter = (filterContext, label, valuesIn ) => ({
  type: Types.UPDATE_ATTRIBUTE_FILTER,
  filterContext, label, valuesIn
})

export const removeAttributeFilter = (filterContext, label) => ({
  type: Types.REMOVE_ATTRIBUTE_FILTER,
  filterContext, label
})

export const updateDateFilter = (filterContext, dataSet, grain, start, end) => ({
  type: Types.UPDATE_DATE_FILTER,
  filterContext, dataSet, grain, start, end
})

export const removeDateFilter = (filterContext, dataSet) => ({
  type: Types.REMOVE_DATE_FILTER,
  filterContext, dataSet
})