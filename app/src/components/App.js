import React, { PropTypes } from 'react'
import Papa from 'papaparse'
import Immutable from 'immutable'

import MapContainer from './container/MapContainer'
import ChartListContainer from './container/ChartListContainer'

class App extends React.Component {

    componentWillMount() {
        this.stationData = [];
        this.waterDataMeta = [];
        this.waterData = [];
    }

    componentDidMount() {    
        const props = this.props;

        Papa.parse("/data/station.csv", {
            download: true,
            complete: (result) => {
                this.stationData = Immutable.List(result.data).delete(0);
                props.onStationDataLoaded();
            }
        });

        Papa.parse("/data/SFBay.csv", {
            download: true,
            complete: (result) => {
                const tmp = Immutable.List(result.data);
                this.waterDataMeta = tmp.first();
                this.waterData = tmp.delete(0);

                this.waterData.forEach((e, key) => {
                    e[0] = new Date(e[0]);
                    for (let i = 1; i < 26; i++) {
                        e[i] = Number(e[i]);
                    }
                });

                props.onDataLoaded();
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
                        <ChartListContainer meta={this.waterDataMeta} data={this.waterData} />
                    </div>
                </div>
            </div>
        );
    }
}

App.propTypes = {
  stateProps: PropTypes.object.isRequired,
  onStationDataLoaded: PropTypes.func.isRequired,
  onDataLoaded: PropTypes.func.isRequired,
}


export default App