import React, { PropTypes } from 'react'
import Immutable from 'immutable'
import ImmutablePropTypes from 'react-immutable-proptypes'

class Chart extends React.Component {

    render() {
        const props = this.props;
        const { store } = this.context;

        return (
            <div>
                <h2>{props.property}</h2>
            </div>
        );
    }
}

Map.propTypes = {
  dispatchProp: PropTypes.object.isRequired,
  stateProp: PropTypes.object.isRequired
}

export default Chart