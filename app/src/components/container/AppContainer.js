import { connect } from 'react-redux'
import { stationsLoaded } from '../../actions/StationFilterActions'
import { dataLoaded } from '../../actions/DataActions'
import { toggleProperty, deselectAllProperties } from '../../actions/PropertyFilterActions'

import App from '../App'

const mapStateToProps = (state) => {
  return {
      stateProps: {},
      fromDepth: state.DepthFilter.get('from'),
      tillDepth: state.DepthFilter.get('till')
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