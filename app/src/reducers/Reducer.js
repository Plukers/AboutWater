import { combineReducers } from 'redux'
import TimeFilter from './TimeFilter'
import DepthFilter from './DepthFilter'
import StationFilter from './StationFilter'
import PropertyFilter from './PropertyFilter'
import Data from './Data'

/**
 * Main Reducer, handles state updates.
 */
const AppReducer = combineReducers({
  TimeFilter,
  DepthFilter,
  StationFilter,
  PropertyFilter,
  Data
})

export default AppReducer