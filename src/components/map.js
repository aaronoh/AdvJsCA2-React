import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const CustomMarker = () => <div><i style={{'color': '#e74c3c'}}className=" medium material-icons">location_on</i></div>;

class Map extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 18
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '350px', width: '100%' }}>

                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyC4YGO5oEObcrCc-PODsPJwIBc09E5I5Fg' }}
                    center={this.props.center}
                    zoom={this.props.zoom}
                >
                    <CustomMarker
                        lat={this.props.lat}
                        lng={this.props.lng}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;
