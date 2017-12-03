// Copyright (C) 2007-2017, GoodData(R) Corporation. All rights reserved.
import * as Types from './statusTypes'

/**
 * Changes the loading status of the specified component
 */
export const onLoadingChanged = (componentId, status) => ({
  type: Types.LOADING_CHANGED,
  componentId,
  isLoading: status.isLoading
})

/**
 * Sets the error coming from a specified component
 */
export const onError = (componentId, error) => ({
  type: Types.ERROR,
  componentId, error
})