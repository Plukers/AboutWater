import { 
         SELECT_STATION, 
         DESELECT_STATION, 
         DESELECT_ALL, 
         STATIONS_LOADED 
        } from './ActionTypes'

export function selectStation(id) {
  return {
    type: SELECT_STATION,
    id
  }
}

export function deselectStation(id) {
  return {
    type: DESELECT_STATION,
    id
  }
}

export function deselectAll() {
  return {
    type: DESELECT_ALL
  }
}

export function stationsLoaded() {
  return {
    type: STATIONS_LOADED
  }
}