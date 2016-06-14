import { combineReducers } from 'redux'
import TimeFilter from './TimeFilter'
import DepthFilter from './DepthFilter'
import StationFilter from './StationFilter'
import PropertyFilter from './PropertyFilter'
import Data from './Data'


const AppReducer = combineReducers({
  TimeFilter,
  DepthFilter,
  StationFilter,
  PropertyFilter,
  Data
})

export default AppReducer