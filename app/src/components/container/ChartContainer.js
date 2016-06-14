import { connect } from 'react-redux'

import Chart from '../Chart'

const mapStateToProps = (state) => {
  return {
      stateProp: {}
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