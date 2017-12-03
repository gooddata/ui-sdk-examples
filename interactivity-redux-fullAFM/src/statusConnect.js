// Copyright (C) 2007-2017, GoodData(R) Corporation. All rights reserved.
import { connect } from 'react-redux'
import uuidv1 from 'uuid/v1';

import {
  onLoadingChanged,
  onError
} from './actions/status'

const mapStateToProps = (state, ownProps) => ({
  isLoading: state.isLoading,
  error: state.error,
  componentId: ownProps.componentId ? ownProps.componentId : uuidv1()
})

export default (component) => (
  connect(
    mapStateToProps,
    { onLoadingChanged, onError }
  )(component)
)