import Immutable from 'immutable'
import deepFreeze from 'deep-freeze'

import { TIME_FROM, TIME_TILL } from '../actions/ActionTypes';

const timeFilter = (state  = Immutable.Map({from:0, till:3000}), action) => {

    deepFreeze(state);

    switch (action.type) {

        case TIME_FROM:
            return state.set('from', action.year);

        case TIME_TILL:
            return state.set('till', action.year);

        default:
            return state;
    }
}

export default timeFilter