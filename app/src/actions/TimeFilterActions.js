import { TIME_FROM, TIME_TILL, TIME_RANGE } from './ActionTypes'

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

export function timeRange(dateFrom, dateTill) {
  return {
    type: TIME_RANGE,
    dateFrom,
    dateTill
  }
}
