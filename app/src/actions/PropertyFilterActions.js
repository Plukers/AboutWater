import { TOGGLE_PROPERTY_SELECTION, DESELECT_ALL_PROPERTY_SELECTION } from './ActionTypes'

/**
 * Returns an action that toggles the display of a property
 */
export function toggleProperty(property) {
  return {
    type: TOGGLE_PROPERTY_SELECTION,
    property
  }
}

/**
 * Returns an action indicating all properties are no longer selected
 */
export function deselectAllProperties() {
  return {
    type: DESELECT_ALL_PROPERTY_SELECTION
  }
}