import { connect } from 'react-redux'
import { selectStation, deselectStation } from '../actions/StationFilterActions'
import Map from '../components/Map'

const mapStateToProps = (state) => {
  return {
      selected: state.stationFilter.selected
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSelectStation: (id) => {
            dispatch( selectStation(id))
        },
        onDeselectStation: (id) => {
            dispatch( deselectStation(id))
        }
    }
}

const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)

export default MapContainer