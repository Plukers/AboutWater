import Immutable from 'immutable'
import deepFreeze from 'deep-freeze'

import { DATA_LOADED } from '../actions/ActionTypes'

const Data = (state  = {loaded: false}, action) => {

    deepFreeze(state);   

    switch (action.type) {

        case DATA_LOADED:
            return Object.assign({}, state, {
                loaded: !state.loaded
            });

        default:
            return state;
    }
}

export default Data