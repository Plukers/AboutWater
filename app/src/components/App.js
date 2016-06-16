import React, { PropTypes } from 'react'
import Papa from 'papaparse'
import Immutable from 'immutable'
import { DropdownButton, MenuItem, Navbar, Nav, NavItem, NavDropdown, Form, FormGroup, FormControl, ControlLabel, Button,
         ButtonGroup } from 'react-bootstrap'

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
                    e[0].setHours(0,0,0,0);
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

        const onDateChange = () => {
            console.log(document.getElementById('formInlineDateStart').value);
            console.log(document.getElementById('formInlineDateEnd').value);
        };

        const formInstanceDate = (
            <Form inline>
                <FormGroup controlId="formInlineDateStart">
                    <ControlLabel>Time from </ControlLabel>
                    {' '}
                    <FormControl type="date" defaultValue="1967-04-10" placeholder="1967-04-10" />
                    </FormGroup>
                    {' '}
                    <FormGroup controlId="formInlineDateEnd">
                    <ControlLabel> till </ControlLabel>
                    {' '}
                    <FormControl type="date"  defaultValue="2015-02-24" placeholder="2015-02-24" />
                    </FormGroup>
                {' '}
                <Button onClick={onDateChange}>
                    Set Time Range
                </Button>
            </Form>
        );

        const onDepthChange = () => {
            console.log(document.getElementById('formInlineDepthStart').value);
            console.log(document.getElementById('formInlineDepthEnd').value);
        };

        const formInstanceDepth = (
            <Form inline>
                <FormGroup controlId="formInlineDepthStart">
                    <ControlLabel>Depth from </ControlLabel>
                    {' '}
                    <FormControl type="number" defaultValue="0" placeholder="0" />
                </FormGroup>
                    {' '}
                <FormGroup controlId="formInlineDepthEnd">
                    <ControlLabel> to </ControlLabel>
                    {' '}
                    <FormControl type="number"  defaultValue="40" placeholder="40" />
                </FormGroup>
                {' '}
                <Button onClick={onDepthChange}>
                    Set Depth Range
                </Button>
            </Form>
        );

        const propertyOptions = this.waterDataMeta.map((property, key) => {
            return (
                <MenuItem key={key} eventKey={key} onClick={() => props.toggleProperty({property})}>{property}</MenuItem>
            );
        });

        return (
            <div className='container-fluid'>                
                <div className='row-fluid'>
                    <div className='col-md-6'>
                        <div className='row input'>
                            <div className='col-md-12'>
                                {formInstanceDate}  
                            </div>
                            <hr />
                            <div className='col-md-12'>
                                {formInstanceDepth}  
                            </div>
                            
                        </div>
                        <MapContainer stations={this.stationData}/> 
                    </div>
                    <div className='col-md-6'>
                         <ButtonGroup>                                             
                            <DropdownButton title="Add Property" id="add-property-dropdown">
                                {propertyOptions}
                            </DropdownButton>  
                            <Button >Clear all Properties</Button>                                
                        </ButtonGroup>
                
                
                        <ChartListContainer meta={this.waterDataMeta} data={this.waterData}/>
                    </div>
                </div>
            </div>
        );
    }
}
//onClick={props.clearProperties()}


App.propTypes = {
  stateProps: PropTypes.object.isRequired,
  onStationDataLoaded: PropTypes.func.isRequired,
  onDataLoaded: PropTypes.func.isRequired,
  toggleProperty: PropTypes.func.isRequired
}


export default App