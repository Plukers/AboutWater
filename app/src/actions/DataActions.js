import { DATA_LOADED, STATIONS_LOADED } from './ActionTypes'

/**
 * Returns an action indicating that the data is loaded
 */
export function dataLoaded() {
  return {
    type: DATA_LOADED
  }
}

/**
 * Returns an action indicating that the station data is loaded
 */
export function stationsLoaded() {
  return {
    type: STATIONS_LOADED
  }
}