import Immutable from 'immutable'
import deepFreeze from 'deep-freeze'

import { 
         TOGGLE_STATION_SELECTION, 
         DESELECT_ALL_STATIONS, 
         CHANGE_SELECTION_GROUP
        } from '../actions/ActionTypes'

const StationFilter = (state  =  {loaded: false, group: 0, selectedG0: Immutable.Set(), selectedG1: Immutable.Set()}, action) => {

    deepFreeze(state);

    switch (action.type) {

        case TOGGLE_STATION_SELECTION:            
            if(state.group === 0) {
                if(state.selectedG0.has(action.id)) {
                    return Object.assign({}, state, {
                        selectedG0: state.selectedG0.delete(action.id),
                        
                    });
                } else {
                    return Object.assign({}, state, {
                        selectedG0: state.selectedG0.add(action.id),
                        selectedG1: state.selectedG1.delete(action.id)
                    });
                }
            } else {
                if(state.selectedG1.has(action.id)) {
                    return Object.assign({}, state, {
                        selectedG1: state.selectedG1.delete(action.id)
                    });
                } else {
                    return Object.assign({}, state, {
                        selectedG0: state.selectedG0.delete(action.id),
                        selectedG1: state.selectedG1.add(action.id)
                    });
                }
            }

        case DESELECT_ALL_STATIONS:
            return Object.assign({}, state, {
                selectedG0: state.selectedG0.clear(),
                selectedG1: state.selectedG0.clear()
            });


        case CHANGE_SELECTION_GROUP:
            return Object.assign({}, state, {
                group: action.group
            });


        default:
            return state;
    }
}

export default StationFilter