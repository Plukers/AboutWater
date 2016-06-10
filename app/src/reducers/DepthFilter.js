import Immutable from 'immutable';

import { DEPTH_FROM, DEPTH_TILL } from '../actions/ActionTypes';

const depthFilter = (state  = Immutable.Map({from:0, till:3000}), action) => {

  switch (action.type) {

    case DEPTH_FROM:
        return state.set('from', action.depth);

    case DEPTH_TILL:
        return state.set('till', action.depth);

    default:
        return state;
  }
}

export default depthFilter