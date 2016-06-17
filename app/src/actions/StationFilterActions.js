import { 
         TOGGLE_STATION_SELECTION, 
         DESELECT_ALL_STATIONS,
         CHANGE_SELECTION_GROUP
        } from './ActionTypes'

/**
 * Returns an action that toggles the selection of a station
 */
export function toggleStationSelection(id) {
  return {
    type: TOGGLE_STATION_SELECTION,
    id
  }
}

/**
 * Returns an action that tells to deselect all stations
 */
export function deselectAllStations() {
  return {
    type: DESELECT_ALL_STATIONS
  }
}

/**
 * Returns an action giving the new group id of the group where selected stations shall be added to
 */
export function changeSelectionGroup(group) {
  return {
    type: CHANGE_SELECTION_GROUP,
    group
  }
}