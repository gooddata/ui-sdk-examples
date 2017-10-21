import * as Types from '../actions/types'

const metricGroups = (state = {}, action) => {
  switch (action.type) {
    case Types.SET_METRIC:
      const { metricContext, metrics } = action
      return {
        ...state,
        [metricContext]: metrics
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
          [label]: { in: valuesIn }
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
  metricGroups,
  filterGroups
}