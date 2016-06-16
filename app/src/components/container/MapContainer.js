import { connect } from 'react-redux'
import { toggleStationSelection, deselectAllStations } from '../../actions/StationFilterActions'

import Map from '../Map'

const mapStateToProps = (state) => {
  return {
      selectedG0: state.StationFilter.selectedG0,
      selectedG1: state.StationFilter.selectedG1
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onToggleStation: (id) => {
            dispatch( toggleStationSelection(id))
        },
        onDeselectAll: () => {
            dispatch( deselectAllStations())
        }
    }
}

const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)

export default MapContainer