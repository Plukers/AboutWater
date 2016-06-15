import { connect } from 'react-redux'

import Chart from '../Chart'

const mapStateToProps = (state) => {
  return {
      fromTime: state.TimeFilter.get('from'),
      tillTime: state.TimeFilter.get('till')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchProp: {}
  }
}

const ChartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chart)

export default ChartContainer