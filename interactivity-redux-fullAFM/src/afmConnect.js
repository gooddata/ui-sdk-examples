import { connect } from 'react-redux'
import {
  setMeasures,
  addMeasure,
  removeMeasures
} from './actions'

const mapStateToProps = (state) => ({
  measureGroups: state.measureGroups,
  filterGroups: state.filterGroups,
  isLoading: state.isLoading,
  error: state.error
})

export default (component) => (
  connect(
    mapStateToProps,
    { setMeasures, addMeasure, removeMeasures }
  )(component)
)