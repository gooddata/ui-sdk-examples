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
  measureGroups,
  filterGroups
}