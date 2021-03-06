import React, { PropTypes } from 'react'
import Immutable from 'immutable'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { DropdownButton, MenuItem } from 'react-bootstrap';

import ChartContainer from './container/ChartContainer'

/**
 * Component handling a Chart components for every selected property
 */
class ChartList extends React.Component {

    render() {
        const props = this.props;
        const { store } = this.context;

        const meta = typeof this.props.meta !== 'undefined' ? this.props.meta : [];
        const data = typeof this.props.data !== 'undefined' ? this.props.data : [];
        const dts = typeof this.props.dataToShow !== 'undefined' ? this.props.dataToShow : [];

        const charts = dts.map((property, key) => {
            return (
                <ChartContainer key={key} property={property} data={this.props.data} />
            );
        });

        return (
            <div id="chartList">
                {charts}
            </div>
        );
    }
}

Map.propTypes = {
  toggleSelected: PropTypes.func.isRequired,
  dataToShow: ImmutablePropTypes.set 
}

export default ChartList