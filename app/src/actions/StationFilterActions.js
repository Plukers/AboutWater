import { 
         TOGGLE_STATION_SELECTION, 
         DESELECT_ALL_STATIONS
        } from './ActionTypes'

export function toggleStationSelection(id) {
  return {
    type: TOGGLE_STATION_SELECTION,
    id
  }
}

export function deselectAllStations() {
  return {
    type: DESELECT_ALL_STATIONS
  }
}