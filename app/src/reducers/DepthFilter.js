import Immutable from 'immutable'
import deepFreeze from 'deep-freeze'

import { DEPTH_FROM, DEPTH_TILL, DEPTH_RANGE } from '../actions/ActionTypes'

const DepthFilter = (state  = Immutable.Map({'from':0, 'till':40}), action) => {

    deepFreeze(state);   

    switch (action.type) {

        case DEPTH_FROM:
            return state.set('from', action.depth);

        case DEPTH_TILL:
            return state.set('till', action.depth);

        case DEPTH_RANGE:
            const tmpState = state.set('from', action.depthFrom);
            return tmpState.set('till', action.depthTill);

        default:
            return state;
    }
}

export default DepthFilter