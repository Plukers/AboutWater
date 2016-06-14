import Immutable from 'immutable'
import deepFreeze from 'deep-freeze'

import { 
         TOGGLE_STATION_SELECTION, 
         DESELECT_ALL_STATIONS, 
         STATIONS_LOADED  
        } from '../actions/ActionTypes'

const StationFilter = (state  =  {loaded: false, selected: Immutable.Set()}, action) => {

    deepFreeze(state);

    switch (action.type) {

        case TOGGLE_STATION_SELECTION:
            if(state.selected.has(action.id)) {
                return Object.assign({}, state, {
                    selected: state.selected.delete(action.id)
                });
            } else {
                return Object.assign({}, state, {
                    selected: state.selected.add(action.id)
                });
            }

        case DESELECT_ALL_STATIONS:
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