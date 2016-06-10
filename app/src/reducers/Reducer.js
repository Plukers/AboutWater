import { combineReducers } from 'redux'
import TimeFilter from './TimeFilter'
import DepthFilter from './DepthFilter'
import StationFilter from './StationFilter'


const AppReducer = combineReducers({
  TimeFilter,
  DepthFilter,
  StationFilter
})

export default AppReducer