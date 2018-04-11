import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const CustomMarker = ({ text }) => <div className="custom-marker"><p>{text}</p></div>;

class Map extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 13
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyC4YGO5oEObcrCc-PODsPJwIBc09E5I5Fg' }}
                    center={this.props.center}
                    zoom={this.props.zoom}
                >
                    <CustomMarker
                        lat={this.props.lat}
                        lng={this.props.lng}
                        text={this.props.name}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;
