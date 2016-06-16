import { connect } from 'react-redux'

import { toggleProperty } from '../../actions/PropertyFilterActions'
import Chart from '../Chart'

const mapStateToProps = (state) => {
  return {
      fromDepth: state.DepthFilter.get('from'),
      tillDepth: state.DepthFilter.get('till'),
      fromTime: state.TimeFilter.get('from'),
      tillTime: state.TimeFilter.get('till'),
      selectedG0: state.StationFilter.selectedG0,
      selectedG1: state.StationFilter.selectedG1
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleProperty: (property) => {
      console.log(property);
      dispatch( toggleProperty(property) )
    }
  }
}

const ChartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chart)

export default ChartContainer