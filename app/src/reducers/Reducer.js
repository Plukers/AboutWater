import { combineReducers } from 'redux';
import timeFilter from './TimeFilter';
import depthFilter from './DepthFilter';


const appReducer = combineReducers({
  timeFilter,
  depthFilter
})

export default appReducer