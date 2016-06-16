import Immutable from 'immutable'
import deepFreeze from 'deep-freeze'

import { DATA_LOADED, STATIONS_LOADED } from '../actions/ActionTypes'

const Data = (state  = {loaded: false, stationsLoaded: false}, action) => {

    deepFreeze(state);   

    switch (action.type) {

        case DATA_LOADED:
            return Object.assign({}, state, {
                loaded: !state.loaded
            });

        case STATIONS_LOADED:
            return Object.assign({}, state, {
                stationsLoaded: !stationsLoaded.loaded
            });

        default:
            return state;
    }
}

export default Data