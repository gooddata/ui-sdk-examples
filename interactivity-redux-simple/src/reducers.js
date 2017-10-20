import { METRIC_1 } from './metrics' // default metric
import C from './catalog.json'

export const metric = (state = { name: METRIC_1, id: C[METRIC_1] }, action) => {
  switch (action.type) {
    // Used by both SimpleSwitcherDemo and BetterSwitcherDemo
    case "SET_METRIC":
      return {
        ...state,
        id: C[action.metric],
        newName: action.metric,
        error: false // new request starts, let's clean up errors
      }

    // These actions are only relevant for the BetterSwitcherDemo
    case "LOADING_CHANGED":
      if (!action.isLoading) {
        return {
          ...state,
          name: state.newName
        }
      } else {
        return state
      }

    case "ERROR":
      return {
        ...state,
        error: true
      }

    default:
      return state
  }
}

// The following reducers are only used by the BetterSwitcherDemo
export const isLoading = (state = false, action) => {
  switch (action.type) {
    case "LOADING_CHANGED":
      return action.isLoading
    default:
      return state
  }
}

export const error = (state = null, action) => {
  switch (action.type) {
    case "ERROR":
      return action.error
    default:
      return state
  }
}