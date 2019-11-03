import React, { Component } from 'react'
import ReactMapboxGl, { Layer, Feature, Marker, Popup } from 'react-mapbox-gl';

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
                        width: '507px',
                        //border: '1px solid grey'
                    }}
                    center={[9.1900, 45.4642]}
                >
                    <Marker
                        coordinates={[10.8719, 0.309719]}
                        anchor="bottom">
                        <div style={{ width: 3, height: 3, border: '3px solid red', borderRadius: '25px' }}> </div>
                    </Marker>
                    <Marker
                        coordinates={[15.030449, 2.309719]}
                        anchor="bottom">
                        <div style={{ width: 3, height: 3, border: '3px solid red', borderRadius: '25px' }}> </div>
                    </Marker>
                    <Marker
                        coordinates={[20.030449, 4.309719]}
                        anchor="bottom">
                        <div style={{ width: 3, height: 3, border: '3px solid red', borderRadius: '25px' }}> </div>
                    </Marker>
                    <Marker
                        coordinates={[25.030449, 6.309719]}
                        anchor="bottom">
                        <div style={{ width: 3, height: 3, border: '3px solid green', borderRadius: '25px' }}> </div>
                    </Marker>
                    <Marker
                        coordinates={[-0.481747846041145, 49.3233379650232]}
                        anchor="bottom">
                        <div style={{ width: 3, height: 3, border: '3px solid green', borderRadius: '25px' }}> </div>
                    </Marker>
                    <Marker
                        coordinates={[-0.481747846041145, 52.3233379650232]}
                        anchor="bottom">
                        <div style={{ width: 3, height: 3, border: '3px solid red', borderRadius: '25px' }}> </div>
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
