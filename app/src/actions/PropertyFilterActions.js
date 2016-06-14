import { TOGGLE_PROPERTY_SELECTION, DESELECT_ALL_PROPERTY_SELECTION } from './ActionTypes'

export function toggleProperty(property) {
  return {
    type: TOGGLE_PROPERTY_SELECTION,
    property
  }
}

export function deselectAllProperties() {
  return {
    type: DESELECT_ALL_PROPERTY_SELECTION
  }
}