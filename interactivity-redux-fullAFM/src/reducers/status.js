// Copyright (C) 2007-2017, GoodData(R) Corporation. All rights reserved.
import * as Types from '../actions/statusTypes'

export const isLoading = (state = false, action) => {
  const { componentId, isLoading } = action
  switch (action.type) {
    case Types.LOADING_CHANGED:
      return action.isLoading
    default:
      return state
  }
}

export const error = (state = null, action) => {
  switch (action.type) {
    case Types.ERROR:
      return action.error
    default:
      return state
  }
}