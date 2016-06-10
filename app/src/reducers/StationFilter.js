import Immutable from 'immutable'
import deepFreeze from 'deep-freeze'

import { 
         SELECT_STATION, 
         DESELECT_STATION, 
         DESELECT_ALL, 
         STATIONS_LOADED  
        } from '../actions/ActionTypes'

const StationFilter = (state  =  {loaded: false, selected: Immutable.Set()}, action) => {

    deepFreeze(state);

    switch (action.type) {

        case SELECT_STATION:
            return Object.assign({}, state, {
                selected: state.selected.add(action.id)
            });

        case DESELECT_STATION:
            return Object.assign({}, state, {
                selected: statle.selected.delete(action.id)
            });

        case DESELECT_ALL:
            return Object.assign({}, state, {
                selected: state.selected.clear()
            });

        case STATIONS_LOADED:
            return Object.assign({}, state, {
                loaded: !state.loaded
            });

        default:
            return state;
    }
}

export default StationFilter