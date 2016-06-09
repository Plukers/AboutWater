import Immutable from 'immutable';

const timeFilter = (state  = Immutable.Map({from:0, till:3000}), action) => {

  switch (action.type) {

    case 'TIME_FROM':
        return state.set('from', action.year);

    case 'TIME_TILL':
        return state.set('till', action.year);

    default:
        return state;
  }
}

export default timeFilter