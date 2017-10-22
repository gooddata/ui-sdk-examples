import * as Types from './afmTypes'

/**
 * Replaces all measures in the measure context with
 * the specified ones.
 *
 * The measure context is expected to be injected into
 * the AFM parameters of AFM components.
 *
 * A measure provided as a String is treated as a measure
 * identifier rather than an AFM measure object.
 */
export const setMeasures = (measureContext, ...measures) => ({
  type: Types.SET_MEASURE,
  measureContext, measures
})

/**
 * Adds the specified measure into the measure context.
 *
 * The measure context is expected to be injected into
 * the AFM parameters of AFM components.
 *
 * If measure is provided as a String, it's treated
 * as a measure identifier
 */
export const addMeasure = (measureContext, measure) => ({
  type: Types.ADD_MEASURE,
  measureContext, measure
})

/**
 * Removes the specified measures from the measure context.
 *
 * Consequently, a redux-connected component is expected to
 * remove the specified measures from the AFMs of connected
 * AFM components.
 *
 * The measureIds are expected to be AFM identifiers (which
 * are the same as metadata identifiers for measures added
 * via setMeasure or addMeasure action creators above).
*/
export const removeMeasures = (measureContext, ...measures) => ({
  type: Types.REMOVE_MEASURE,
  measureContext, measures
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