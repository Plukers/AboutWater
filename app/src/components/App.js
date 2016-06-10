import React, { PropTypes } from 'react'
import Papa from 'papaparse'

import MapContainer from '../container/MapContainer'

let stationData = {};

class App extends React.Component {

    componentWillMount() {
        this.stationData = {};
    }

    componentDidMount() {    
        const props = this.props;

        Papa.parse("/data/station.csv", {
            download: true,
            complete: (result) => {
                console.log('Finished loading');
                this.stationData = result;
                props.onStationDataLoaded();
            }
        });
    }

    loadedStationData(results) {
        
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("ShouldComponentUpdate");
        console.log(nextProps);
        return true;
    }


    render() {
        const { store } = this.context;
        console.log("App render called");
        console.log(this.stationData);

        const stationData = {};
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