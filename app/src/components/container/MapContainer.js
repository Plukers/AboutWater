import { connect } from 'react-redux'
import { toggleStationSelection, deselectAllStations } from '../../actions/StationFilterActions'

import Map from '../Map'

const mapStateToProps = (state) => {
  return {
      selected: state.StationFilter.selected
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