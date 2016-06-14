import React, { PropTypes } from 'react'
import Immutable from 'immutable'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { DropdownButton, MenuItem } from 'react-bootstrap';

import Chart from './Chart'

class ChartList extends React.Component {

    render() {
        const props = this.props;
        const { store } = this.context;

        const meta = typeof this.props.meta !== 'undefined' ? this.props.meta : [];
        const data = typeof this.props.data !== 'undefined' ? this.props.data : [];
        const dts = typeof this.props.dataToShow !== 'undefined' ? this.props.dataToShow : [];

        const propertyOptions = this.props.meta.map((property, key) => {
            return (
                <MenuItem key={key} eventKey={key} onClick={() => props.toggleSelected({property})}>{property}</MenuItem>
            );
        });

        const charts = dts.map((property, key) => {
            return (
                <Chart key={key} property={property} />
            );
        });

        return (
            <div>
                <DropdownButton title="Add Property" id="bg-justified-dropdown">
                    {propertyOptions}
                </DropdownButton>   
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