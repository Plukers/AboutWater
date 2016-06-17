import Immutable from 'immutable'
import deepFreeze from 'deep-freeze'

import { TOGGLE_PROPERTY_SELECTION, DESELECT_ALL_PROPERTY_SELECTION } from '../actions/ActionTypes'

const PropertyFilter = (state  = Immutable.Set(), action) => {

    deepFreeze(state);   

    switch (action.type) {

        case TOGGLE_PROPERTY_SELECTION:
            if(state.has(action.property)) {
                return state.delete(action.property);
            } else {
                let tmpState = state.reverse();
                tmpState = tmpState.add(action.property);
                return tmpState.reverse();
            }

        case DESELECT_ALL_PROPERTY_SELECTION:
            return state.clear();

        default:
            return state;
    }
}

export default PropertyFilter