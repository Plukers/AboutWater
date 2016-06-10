import { combineReducers } from 'redux';
import timeFilter from './TimeFilter';
import depthFilter from './DepthFilter';
import stationFilter from './StationFilter';


const appReducer = combineReducers({
  timeFilter,
  depthFilter,
  stationFilter
})

export default appReducer