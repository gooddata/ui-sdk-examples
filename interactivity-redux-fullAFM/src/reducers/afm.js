// Copyright (C) 2007-2017, GoodData(R) Corporation. All rights reserved.
import * as Types from '../actions/afmTypes'

const measureGroups = (state = {}, action) => {
  switch (action.type) {
    case Types.SET_MEASURE:
      const { measureContext, measures } = action
      return {
        ...state,
        [measureContext]: measures
      }

    default:
      return state
  }
}

const labelGroups = (state = {}, action) => {
  switch (action.type) {
    case Types.SET_LABEL:
      const { labelContext, labels } = action
      return {
        ...state,
        [labelContext]: labels
      }

    default:
      return state
  }
}

const filterGroups = (state = {}, action) => {
  switch (action.type) {
    case Types.UPDATE_POSITIVE_ATTRIBUTE_FILTER: {
      const { filterContext, label, values } = action
      const filters = state[filterContext] || {}
      return {
        ...state,
        [filterContext]: {
          ...filters,
          [label]: { in: (typeof(values) === "array") ? values : [ values ] }
        }
      }
    }

    case Types.REMOVE_ATTRIBUTE_FILTER: {
      const { filterContext, label } = action
      const filters = state[filterContext]
      if (!filters) {
        return state
      }
      const newState = {
        ...state,
        [filterContext]: { ...filters }
      }
      delete newState[filterContext][label]
      return newState
    }

    default:
      return state
  }
}

export {
  measureGroups,
  labelGroups,
  filterGroups
}