import { connect } from 'react-redux'
import { stationsLoaded } from '../../actions/StationFilterActions'
import { dataLoaded } from '../../actions/DataActions'

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
    }
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer