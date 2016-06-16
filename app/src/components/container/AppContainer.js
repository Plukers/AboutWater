import { connect } from 'react-redux'
import { dataLoaded, stationsLoaded } from '../../actions/DataActions'
import { toggleProperty, deselectAllProperties } from '../../actions/PropertyFilterActions'

import App from '../App'

const mapStateToProps = (state) => {
  return {
      stateProps: {},
      loaded: state.Data,
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
    }
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer