import Immutable from 'immutable'
import deepFreeze from 'deep-freeze'

import { TIME_FROM, TIME_TILL } from '../actions/ActionTypes';

//{'from': new Date("1967-04-10 16:15:00"), 'till': new Date("2015-02-24 12:15:00")}

const TimeFilter = (state  = Immutable.Map({'from': new Date("2011-04-10 16:15:00"), 'till': new Date("2012-04-15 12:15:00")}), action) => {

    deepFreeze(state);

    switch (action.type) {

        case TIME_FROM:
            return state.set('from', action.date);

        case TIME_TILL:
            return state.set('till', action.date);

        default:
            return state;
    }
}

export default TimeFilter