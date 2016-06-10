import React, { PropTypes } from 'react'
import Papa from 'papaparse';

import MapContainer from '../container/MapContainer';

let stationData = {};

class App extends React.Component {

    test() {
        console.log("Test succeed");
    }

    componentWillMount() {
        this.a = {};
    }

    componentDidMount() {    
        const props = this.props;

        this.a = Papa.parse("/data/station.csv", {
            download: true,
            complete: function(results) {

                console.log('Finished');
                /*
                test();

                stationData = results;
                console.log(stationsData);
                console.log(results);

                */
                props.onStationDataLoaded();
            }
        });
    }

    render() {
        const { store } = this.context;
        console.log("App render called");
        console.log(this.a);

        const stationData = {};
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-6'>
                        <MapContainer stations={stationData}/>
                    </div>
                    <div className='col-md-6'>
                        
                    </div>
                </div>
            </div>
        );
    }
}

App.propTypes = {
  onStationDataLoaded: PropTypes.func.isRequired
}


export default App