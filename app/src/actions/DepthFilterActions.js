import { DEPTH_FROM, DEPTH_TILL } from './ActionTypes';

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
