import { connect } from 'react-redux'
import { stationsLoaded } from '../actions/StationFilterActions'
import App from '../components/App'

const mapStateToProps = (state) => {
    console.log("StateChanged");
    console.log(state);
  return {
      
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onStationDataLoaded: () => {
      dispatch(stationsLoaded())
    }
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer