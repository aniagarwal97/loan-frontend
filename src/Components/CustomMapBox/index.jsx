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
                    {
                        this.props.mapData && this.props.mapData.length && this.props.mapData.map((value, index) => {
                            return (
                                <Marker
                                    key = {index}
                                    coordinates={[value.longitude, value.latitude]}
                                    anchor="bottom">
                                    <div style={{ width: 3, height: 3, border: '3px solid', borderColor: (value.prediction ? 'green' : 'red'), borderRadius: '25px' }}> </div>
                                </Marker>
                            )
                        })
                    }
                    <Layer
                        type="symbol"
                        layout={{ "icon-image": "harbor-15" }}>
                    </Layer>
                </Map>
            </div>
        )
    }
}
