import { connect } from 'react-redux'
import {
  setMeasures,
  addMeasure,
  removeMeasures
} from './actions/afm'

const mapStateToProps = (state, ownProps) => {
  const { measureGroups, filterGroups } = state
  const { measureGroup, filterGroup } = ownProps
  return {
    _measures: measureGroup ? measureGroups[measureGroup] : [],
    _filters: filterGroup ? filterGroups[filterGroup] : []
  }
}

export default (component) => (
  connect(
    mapStateToProps,
    { setMeasures, addMeasure, removeMeasures }
  )(component)
)