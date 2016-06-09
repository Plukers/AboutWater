import Immutable from 'immutable';

const depthFilter = (state  = Immutable.Map({from:0, till:3000}), action) => {

  switch (action.type) {

    case 'DEPTH_FROM':
        return state.set('from', action.year);

    case 'DEPTH_TILL':
        return state.set('till', action.year);

    default:
        return state;
  }
}

export default depthFilter