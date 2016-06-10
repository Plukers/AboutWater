import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import ImmutablePropTypes from 'react-immutable-proptypes'
import L from 'leaflet'

class Map extends React.Component {

    componentDidMount() {

        const ACCESS_TOKEN = 'pk.eyJ1IjoibHVwcm8iLCJhIjoiY2lwOGgxZmdoMDAxMHMxbm1lZGZ2ZjRtcCJ9.JfrfhSQ4miqXJlB7Vi6JtA';
		const MB_ATTR = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="http://mapbox.com">Mapbox</a>';
		const MB_URL = 'https://api.mapbox.com/styles/v1/{id}/cip8h2g48002qdmm2u4zxmoco/tiles/{z}/{x}/{y}?access_token=' + ACCESS_TOKEN;
		const OSM_URL = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
		const OSM_ATTRIB = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors';

        this.map = L.map('map').setView([37.816508, -121.914375], 9);
        L.tileLayer(MB_URL, {attribution: MB_ATTR, id: 'lupro'}).addTo(this.map);

        this.map.on('click', this.onMapClick);
    }

    componentWillUnmount(){
        this.map.off('click', this.onMapClick);
        this.map = null;
    }

    onMapClick() {

    }

    render() {

        console.log("Map render called");
        const props = this.props;
        console.log(props);

        return (
            <div id='map' className='map'></div>
        );
    }
}

Map.propTypes = {
  onSelectStation: PropTypes.func.isRequired,
  onDeselectStation: PropTypes.func.isRequired,
  selected: ImmutablePropTypes.set 
}

export default Map;