import { DATA_LOADED, STATIONS_LOADED } from './ActionTypes'

export function dataLoaded() {
  return {
    type: DATA_LOADED
  }
}

export function stationsLoaded() {
  return {
    type: STATIONS_LOADED
  }
}