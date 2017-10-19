export const metric = (state = {}, action) => {
  switch (action.type) {
    case "SET_METRIC":
      return {
        ...state,
        active: action.metric
      }

    default:
      return state
  }
}