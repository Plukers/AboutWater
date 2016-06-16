import { connect } from 'react-redux'
import { dataLoaded, stationsLoaded } from '../../actions/DataActions'
import { toggleProperty, deselectAllProperties } from '../../actions/PropertyFilterActions'
import { timeRange } from '../../actions/TimeFilterActions'
import { depthRange } from '../../actions/DepthFilterActions'
import { changeSelectionGroup, deselectAllStations } from '../../actions/StationFilterActions'

import App from '../App'

const mapStateToProps = (state) => {
  return {
      stateProps: {},
      loaded: state.Data,
      group: state.StationFilter.group,
      fromDepth: state.DepthFilter.get('from'),
      tillDepth: state.DepthFilter.get('till'),
      fromDate: state.TimeFilter.get('from'),
      tillDate: state.TimeFilter.get('till')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onStationDataLoaded: () => {
      dispatch(stationsLoaded())
    },
    onDataLoaded: () => {
      dispatch(dataLoaded())
    },
    toggleProperty: (property) => {
      dispatch( toggleProperty(property.property) )
    },
    clearProperties: (property) => {
      dispatch( deselectAllProperties() )
    },
    setTimeRange: (fromDate, tillDate) => {
      dispatch( timeRange(fromDate, tillDate) )
    },
    setDepthRange: (fromDepth, tillDepth) => {
      dispatch( depthRange(fromDepth, tillDepth) )
    },
    changeSelectionGroup: (group) => {
      dispatch( changeSelectionGroup(Number(group)) )
    },
    clearStationSelection: () => {
      dispatch( deselectAllStations() )
    }
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer