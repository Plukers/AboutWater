import React, { PropTypes } from 'react'
import Papa from 'papaparse'
import Immutable from 'immutable'

import MapContainer from '../container/MapContainer'

let stationData = {};

class App extends React.Component {

    componentWillMount() {
        this.stationData = [];
    }

    componentDidMount() {    
        const props = this.props;

        Papa.parse("/data/station.csv", {
            download: true,
            complete: (result) => {
                this.stationData = Immutable.List(result.data).delete(0);// remove first row of the table
                props.onStationDataLoaded();
            }
        });
    }

    render() {
        const { store } = this.context;

        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-6'>
                        <MapContainer stations={this.stationData}/>
                    </div>
                    <div className='col-md-6'>
                        
                    </div>
                </div>
            </div>
        );
    }
}

App.propTypes = {
  stateProps: PropTypes.object.isRequired,
  onStationDataLoaded: PropTypes.func.isRequired
}


export default App