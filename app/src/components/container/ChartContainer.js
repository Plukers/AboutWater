import { connect } from 'react-redux'

import { toggleProperty } from '../../actions/PropertyFilterActions'
import Chart from '../Chart'

const mapStateToProps = (state) => {
  return {
      fromTime: state.TimeFilter.get('from'),
      tillTime: state.TimeFilter.get('till')
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