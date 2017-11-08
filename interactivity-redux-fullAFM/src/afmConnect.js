import { connect } from 'react-redux'
import {
  setMeasures,
  addMeasure,
  removeMeasures,
  updateAttributeFilter,
  removeAttributeFilter
} from './actions/afm'

const mapStateToProps = (state, ownProps) => {
  const { measureGroups, filterGroups } = state
  const { measureGroup, filterGroup } = ownProps
  return {
    measures: measureGroup ? measureGroups[measureGroup] : [],
    filters: filterGroup ? filterGroups[filterGroup] : []
  }
}

export default (component) => (
  connect(
    mapStateToProps,
    { setMeasures, addMeasure, removeMeasures,
      updateAttributeFilter, removeAttributeFilter }
  )(component)
)