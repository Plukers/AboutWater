import { TIME_FROM, TIME_TILL, TIME_RANGE } from './ActionTypes'

/**
 * Returns an action for a new from time
 */
export function timeFrom(date) {
  return {
    type: TIME_FROM,
    date
  }
}

/**
 * Returns an action for a new till time
 */
export function timeTill(date) {
  return {
    type: TIME_TILL,
    date
  }
}

/**
 * Returns an action for a new time range
 */
export function timeRange(dateFrom, dateTill) {
  return {
    type: TIME_RANGE,
    dateFrom,
    dateTill
  }
}
