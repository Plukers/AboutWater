import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import Immutable from 'immutable'
import ImmutablePropTypes from 'react-immutable-proptypes'
import L from 'leaflet'

class Map extends React.Component {

    componentDidMount() {

        const ACCESS_TOKEN = 'pk.eyJ1IjoibHVwcm8iLCJhIjoiY2lwOGgxZmdoMDAxMHMxbm1lZGZ2ZjRtcCJ9.JfrfhSQ4miqXJlB7Vi6JtA';
		const MB_ATTR = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="http://mapbox.com">Mapbox</a>';
		const MB_URL = 'https://api.mapbox.com/styles/v1/{id}/cip8h2g48002qdmm2u4zxmoco/tiles/256/{z}/{x}/{y}?access_token=' + ACCESS_TOKEN;
		const OSM_URL = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
		const OSM_ATTRIB = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors';
        this.map = L.map('map').setView([37.74997, -121.952572], 10);

        L.tileLayer(MB_URL, {attribution: MB_ATTR, id: 'lupro'}).addTo(this.map);

        this.greenIcon = L.icon({
            iconUrl: '../../../images/marker.png',

            iconSize:     [20, 29], // size of the icon
            iconAnchor:   [10, 29], // point of the icon which will correspond to marker's location
            popupAnchor:  [0, -29] // point from which the popup should open relative to the iconAnchor
        });

        this.greyIcon = L.icon({
            iconUrl: '../../../images/marker_grey.png',

            iconSize:     [20, 29], // size of the icon
            iconAnchor:   [10, 29], // point of the icon which will correspond to marker's location
            popupAnchor:  [0, -29] // point from which the popup should open relative to the iconAnchor
        });

        this.brightIcon = L.icon({
            iconUrl: '../../../images/marker_bright.png',

            iconSize:     [20, 29], // size of the icon
            iconAnchor:   [10, 29], // point of the icon which will correspond to marker's location
            popupAnchor:  [0, -29] // point from which the popup should open relative to the iconAnchor
        });


        this.markers = new L.FeatureGroup();
        this.map.addLayer(this.markers);
        
    }

    componentWillUnmount(){
        this.map.off('click', this.onMapClick);
        this.map = null;
    }

    render() {
        const props = this.props;

        const stationData = typeof this.props.stations !== 'undefined' ? this.props.stations : [];

        const selectionExisting = 0 !== this.props.selected.size;
        
        if(typeof this.markers !== 'undefined') {
            console.log(this.markers);
            this.markers.clearLayers();
        }

        stationData.map((s) => {

            let icon = this.greenIcon;

            if(selectionExisting) {
                if(this.props.selected.has(parseInt(s[0]))) {
                    icon = this.brightIcon;
                } else {
                    icon = this.greyIcon;
                }                
            } 

            const m = L.marker(new L.LatLng(parseFloat(s[3]), parseFloat(s[4])), {icon: icon}).addTo(this.map)
                .bindPopup('<strong>' + s[1] + '</strong><br>Depth: ' + s[2] + 'm')
                .openPopup();

            m.id = parseInt(s[0]);
            
            m.on('mouseover', function (e) {
                this.openPopup();
            });
            m.on('mouseout', function (e) {
                this.closePopup();
            });

            const onMarkerClick = (event) => {
                props.onToggleStation(event.target.id);
            }
            
            m.on('click', onMarkerClick);

            this.markers.addLayer(m);

        });

        return (
            <div id='map' className='map'></div>
        );
    }
}

Map.propTypes = {
  onToggleStation: PropTypes.func.isRequired,
  onDeselectAll: PropTypes.func.isRequired,
  selected: ImmutablePropTypes.set 
}

export default Map;