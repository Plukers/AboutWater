import React from 'react';
import ReactDOM from 'react-dom';
import L from 'leaflet';

class Map extends React.Component {

    componentDidMount() {
        const ACCESS_TOKEN = 'pk.eyJ1IjoibHVwcm8iLCJhIjoiY2lwOGgxZmdoMDAxMHMxbm1lZGZ2ZjRtcCJ9.JfrfhSQ4miqXJlB7Vi6JtA';
		const MB_ATTR = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="http://mapbox.com">Mapbox</a>';
		const MB_URL = 'https://api.mapbox.com/styles/v1/{id}/cip8h2g48002qdmm2u4zxmoco/tiles/{z}/{x}/{y}?access_token=' + ACCESS_TOKEN;
		const OSM_URL = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
		const OSM_ATTRIB = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors';

        const map = L.map('map').setView([51.505, -0.09], 13);
        L.tileLayer(MB_URL, {attribution: MB_ATTR, id: 'lupro'}).addTo(map);

        map.on('click', this.onMapClick);
    }

    componentWillUnmount(){
        this.map.off('click', this.onMapClick);
        this.map = null;
    }

    onMapClick() {
        // Do some wonderful map things...
    }

    render() {
        return (
            <div id='map' className='map'></div>
        );
    }
}

export default Map