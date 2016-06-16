import { DEPTH_FROM, DEPTH_TILL, DEPTH_RANGE } from './ActionTypes'

export function depthFrom(depth) {
  return {
    type: DEPTH_FROM,
    depth
  }
}

export function depthTill(depth) {
  return {
    type: DEPTH_TILL,
    depth
  }
}

export function depthRange(depthFrom, depthTill) {
  return {
    type: DEPTH_RANGE,
    depthFrom,
    depthTill
  }
}
