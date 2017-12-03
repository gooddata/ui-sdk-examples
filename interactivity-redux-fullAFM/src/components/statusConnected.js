// Copyright (C) 2007-2017, GoodData(R) Corporation. All rights reserved.
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import statusConnect from '../statusConnect'

/**
 * A wrapper for GoodData AFM Components connected to AFM controls via the
 * afmConnect method.
 */
export const StatusWrapper = (InnerComponent) => statusConnect(class extends Component {

  static propTypes = {
    componentId: PropTypes.string,
    projectId: PropTypes.string.isRequired,
    isLoading: PropTypes.bool,
    error: PropTypes.object,
    onLoadingChanged: PropTypes.func.isRequired,
    onError: PropTypes.func.isRequired
  }

  wrapperClassName() {
    return "loadingWrapper loadingWrapper"
      + InnerComponent.toString()
      + " "
      + this.props.loading ? "active" : ""
  }

  render() {
    const { onLoadingChanged, onError } = this.props
    return (
      <div className={this.wrapperClassName()}>
        <InnerComponent {...this.props}
          onLoadingChanged={status => onLoadingChanged(this.componentId, status)}
          onError={error => onError(this.componentId, error)}
        />
      </div>
    )
  }
})

export const PureLoadingIndicatorWrapper = ({ isLoading, error, children }) => {
  return <div /> // TODO
}