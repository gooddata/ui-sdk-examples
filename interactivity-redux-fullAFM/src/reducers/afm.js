// Copyright (C) 2007-2017, GoodData(R) Corporation. All rights reserved.
import * as Types from '../actions/afmTypes'
import { MEASURE_2 } from '../measures'
import C from '../catalog.json';

const measureGroups = (state = {
  mg1: [ C[MEASURE_2] ]
}, action) => {
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

const filterGroups = (state = {}, action) => {
  switch (action.type) {
    case Types.UPDATE_ATTRIBUTE_FILTER: {
      const { filterContext, label, valuesIn } = action
      const filters = state[filterContext] || {}
      return {
        ...state,
        [filterContext]: {
          ...filters,
          [label]: { in: (typeof(valuesIn) === "array") ? valuesIn : [ valuesIn ] }
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
  filterGroups
}