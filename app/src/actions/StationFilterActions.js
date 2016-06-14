import { 
         TOGGLE_STATION_SELECTION, 
         DESELECT_ALL_STATIONS, 
         STATIONS_LOADED 
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

export function stationsLoaded() {
  return {
    type: STATIONS_LOADED
  }
}