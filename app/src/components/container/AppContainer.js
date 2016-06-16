import { connect } from 'react-redux'
import { stationsLoaded } from '../../actions/StationFilterActions'
import { dataLoaded } from '../../actions/DataActions'
import { toggleProperty, deselectAllProperties } from '../../actions/PropertyFilterActions'

import App from '../App'

const mapStateToProps = (state) => {
  return {
      stateProps: {}
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
    }
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer