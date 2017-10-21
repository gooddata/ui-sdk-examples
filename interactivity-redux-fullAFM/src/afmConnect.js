import { connect } from 'react-redux'
import {
  setMetrics,
  addMetric,
  removeMetrics
} from './actions'

const mapStateToProps = (state) => ({
  metricGroups: state.metricGroups,
  filterGroups: state.filterGroups,
  isLoading: state.isLoading,
  error: state.error
})

export default (component) => (
  connect(
    mapStateToProps,
    { setMetrics, addMetric, removeMetrics }
  )(component)
)