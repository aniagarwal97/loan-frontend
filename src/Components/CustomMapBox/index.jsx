import React, { Component } from 'react'
import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl';


const Map = ReactMapboxGl({
    accessToken:
        'pk.eyJ1IjoiemFyYXRodXN0cmF0ZWNoIiwiYSI6ImNrMXZ5dnl2MDA3NG0zY2xiNjdsMm9uNjgifQ.PbaR7gcEAXr_M4G3Fd8v5A'
});

export default class CustomMapBox extends Component {
    render() {
        return (
            <div>
                <Map
                    style="mapbox://styles/mapbox/streets-v9"
                    containerStyle={{
                        height: '283px',
                        width: '500px'
                    }}
                >
                    <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                        <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
                    </Layer>
                    <Marker
                        coordinates={[76.030449, 22.309719]}
                        anchor="bottom">
                        <img style={{ width: 30, height: 'auto' }} alt='alt' src={require('../../Assets/map-icon.png')} />
                    </Marker>
                    <Marker
                        coordinates={[-0.481747846041145, 49.3233379650232]}
                        anchor="bottom">
                        <img style={{ width: 30, height: 'auto' }} alt='alt' src={require('../../Assets/map-icon.png')} />
                    </Marker>                    
                    <Marker
                        coordinates={[-0.481747846041145, 52.3233379650232]}
                        anchor="bottom">
                        <img style={{ width: 30, height: 'auto' }} alt='alt' src={require('../../Assets/map-icon.png')} />
                    </Marker>
                    <Layer
                        type="symbol"
                        layout={{ "icon-image": "harbor-15" }}>
                    </Layer>
                </Map>
            </div>
        )
    }
}
