import { DEPTH_FROM, DEPTH_TILL, DEPTH_RANGE } from './ActionTypes'

/**
 * Returns an action for a new from depth
 */
export function depthFrom(depth) {
  return {
    type: DEPTH_FROM,
    depth
  }
}

/**
 * Returns an action for a new till depth
 */
export function depthTill(depth) {
  return {
    type: DEPTH_TILL,
    depth
  }
}

/**
 * Returns an action for a new depth range
 */
export function depthRange(depthFrom, depthTill) {
  return {
    type: DEPTH_RANGE,
    depthFrom,
    depthTill
  }
}
