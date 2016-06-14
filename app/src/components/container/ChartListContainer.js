import { connect } from 'react-redux'

import ChartList from '../ChartList'
import { toggleProperty } from '../../actions/PropertyFilterActions'

const mapStateToProps = (state) => {
  return {
      dataToShow: state.PropertyFilter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSelected: (property) => {
            console.log(property.property);
            dispatch( toggleProperty(property.property) )
        }
  }
}

const ChartListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartList)

export default ChartListContainer