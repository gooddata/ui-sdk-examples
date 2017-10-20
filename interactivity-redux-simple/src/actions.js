// Used by both SimpleSwitcherDemo and BetterSwitcherDemo
export const setMetric = (metric) => ({
  type: "SET_METRIC",
  metric
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