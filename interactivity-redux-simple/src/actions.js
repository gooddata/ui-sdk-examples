// Used by both SimpleSwitcherDemo and BetterSwitcherDemo
export const setMeasure = (measure) => ({
  type: "SET_MEASURE",
  measure
})

// The following action creators are only used by the
// BetterSwitcherDemo
export const onLoadingChanged = (status) => ({ // status = { loading: true|false }
  type: "LOADING_CHANGED",
  isLoading: status.isLoading
})

export const onError = (error) => ({
  type: "ERROR",
  error
})