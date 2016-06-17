import Immutable from 'immutable'
import deepFreeze from 'deep-freeze'

import { TIME_FROM, TIME_TILL, TIME_RANGE } from '../actions/ActionTypes';

/**
 * TimeStamp reducer
 * Handles state of the time range to display
 */
const TimeFilter = (state  = Immutable.Map({'from': new Date("1967-04-10 16:15:00"), 'till': new Date("2015-02-24 12:15:00")}), action) => {

    deepFreeze(state);

    switch (action.type) {

        case TIME_FROM:
            return state.set('from', action.date);

        case TIME_TILL:
            return state.set('till', action.date);

        case TIME_RANGE:
            const tmpState = state.set('from', action.dateFrom);
            return tmpState.set('till', action.dateTill)

        default:
            return state;
    }
}

export default TimeFilter