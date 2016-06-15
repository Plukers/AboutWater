import React, { PropTypes } from 'react'
import Papa from 'papaparse'
import Immutable from 'immutable'
import { DropdownButton, MenuItem, Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap'

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
        const props = this.props;

        const propertyOptions = this.waterDataMeta.map((property, key) => {
            return (
                <MenuItem key={key} eventKey={key} onClick={() => props.toggleProperty({property})}>{property}</MenuItem>
            );
        });

        const navbarInstance = (
            <Navbar>
                <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">About Water</a>
                </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                <NavItem eventKey={1} href="#">Link</NavItem>
                <NavItem eventKey={2} href="#">Link</NavItem>
                <NavDropdown eventKey={3} title="Add Property" id="basic-nav-dropdown">
                    {propertyOptions}
                </NavDropdown>
                </Nav>
            </Navbar>
        );

        return (
            <div className='container-fluid'>
                {navbarInstance}
                <div className='.row-fluid'>
                    <div className='col-md-6'>
                        <MapContainer stations={this.stationData}/> 
                    </div>
                    <div className='col-md-6'>
                        <ChartListContainer meta={this.waterDataMeta} data={this.waterData}/>
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
  toggleProperty: PropTypes.func.isRequired
}


export default App