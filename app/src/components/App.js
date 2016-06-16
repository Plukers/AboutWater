import React, { PropTypes } from 'react'
import Papa from 'papaparse'
import Immutable from 'immutable'
import { DropdownButton, MenuItem, Navbar, Nav, NavItem, NavDropdown, Form, FormGroup, FormControl, ControlLabel, Button,
         ButtonGroup, Radio } from 'react-bootstrap'

import MapContainer from './container/MapContainer' 
import ChartListContainer from './container/ChartListContainer'
import { propToColumn } from '../util/PropToColumn'

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
                this.waterDataMeta.splice(0,4);

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

    dateToString(date) {

        let monthString = date.getMonth() + 1;

        if(monthString < 10) {
            monthString = "0" + monthString;
        }

        return "" + date.getFullYear() + "-" + monthString + "-" + date.getDate();
    }

    cleanData(data, fromTime, tillTime) {

        let result = Immutable.List();

        data.forEach((e, k) => { 
            if(k == 1) {
                console.log(e);
            }
            if(e[propToColumn('TimeStamp')] > fromTime && e[propToColumn('TimeStamp')] < tillTime) {
                result = result.insert(k, e)
            }

        });

        console.log(result);

        return data;
    }

    render() {
        const { store } = this.context;
        const props = this.props;

        const onDateChange = () => {
            props.setTimeRange(new Date(document.getElementById('formInlineDateStart').value), new Date(document.getElementById('formInlineDateEnd').value));
        };

        const formInstanceDate = (
            <Form inline>
                <FormGroup controlId="formInlineDateStart">
                    <ControlLabel>Time from </ControlLabel>
                    {' '}
                    <FormControl type="date" defaultValue={this.dateToString(props.fromDate)}/>
                </FormGroup>
                    {' '}
                <FormGroup controlId="formInlineDateEnd">
                    <ControlLabel> till </ControlLabel>
                    {' '}
                    <FormControl type="date"  defaultValue={this.dateToString(props.tillDate)} />
                    </FormGroup>
                {' '}
                <Button onClick={onDateChange}>
                    Set Time Range
                </Button>
            </Form>
        );

        const onDepthChange = () => {
            props.setDepthRange(Number(document.getElementById('formInlineDepthStart').value), Number(document.getElementById('formInlineDepthEnd').value));
        };

        const formInstanceDepth = (
            <Form inline>
                <FormGroup controlId="formInlineDepthStart">
                    <ControlLabel>Depth from </ControlLabel>
                    {' '}
                    <FormControl type="number" defaultValue={props.fromDepth} />
                </FormGroup>
                    {' '}
                <FormGroup controlId="formInlineDepthEnd">
                    <ControlLabel> to </ControlLabel>
                    {' '}
                    <FormControl type="number"  defaultValue={props.tillDepth} />
                </FormGroup>
                {' '}
                <Button onClick={onDepthChange}>
                    Set Depth Range
                </Button>
            </Form>
        );

        const formInstanceSelection = (
            <Form inline>
                <FormGroup>
                    <ButtonGroup>                                             
                            <DropdownButton title={props.group == 0 ? "Add to Group Red" : "Add to Group Yellow" } id="add-property-dropdown">
                                <MenuItem onClick={() => props.changeSelectionGroup(1)}> Add to Group Yellow </MenuItem>
                                <MenuItem onClick={() => props.changeSelectionGroup(0)}> Add to Group Red </MenuItem>
                            </DropdownButton> 
                            <Button onClick={() => props.clearStationSelection()} > Clear Group Selections </Button>                                
                        </ButtonGroup>
                </FormGroup>
            </Form>
        )

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
                            <hr />
                            <div className='col-md-5'/>
                            <div className='col-md-7' id='stationSelection'>
                                {formInstanceSelection}
                            </div>                            
                        </div>
                        <MapContainer stations={this.stationData}/> 
                    </div>
                    <div className='col-md-6'>
                         <ButtonGroup>                                             
                            <DropdownButton title="Add Property" id="add-property-dropdown">
                                {propertyOptions}
                            </DropdownButton>  
                            <Button onClick={() => props.clearProperties()}>Clear All Properties</Button>                                
                        </ButtonGroup>
                
                
                        <ChartListContainer meta={this.waterDataMeta} data={this.cleanData(this.waterData, props.fromDate, props.tillDate)}/>
                    </div>
                </div>
            </div>
        );
    }
}

App.propTypes = {
  loaded: PropTypes.object.isRequired,
  fromDepth: PropTypes.number.isRequired,
  tillDepth: PropTypes.number.isRequired,
  fromDate: PropTypes.object.isRequired,
  tillDate: PropTypes.object.isRequired,
  onStationDataLoaded: PropTypes.func.isRequired,
  onDataLoaded: PropTypes.func.isRequired,
  toggleProperty: PropTypes.func.isRequired,
  clearProperties: PropTypes.func.isRequired,
  setTimeRange: PropTypes.func.isRequired,
  setDepthRange: PropTypes.func.isRequired,
  group: PropTypes.number.isRequired,
  changeSelectionGroup: PropTypes.func.isRequired,
  clearStationSelection: PropTypes.func.isRequired,
}


export default App