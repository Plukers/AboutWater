import { TIME_FROM, TIME_TILL } from './ActionTypes'

export function timeFrom(year) {
  return {
    type: TIME_FROM,
    date
  }
}

export function timeTill(year) {
  return {
    type: TIME_TILL,
    date
  }
}
