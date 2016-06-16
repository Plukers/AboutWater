import { TIME_FROM, TIME_TILL } from './ActionTypes'

export function timeFrom(date) {
  return {
    type: TIME_FROM,
    date
  }
}

export function timeTill(date) {
  return {
    type: TIME_TILL,
    date
  }
}
