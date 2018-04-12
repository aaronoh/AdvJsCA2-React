import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const CustomMarker = ({ text }) => <div className="custom-marker"><p>{text}</p></div>;

class Map extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 17
    };

    render() {
        console.log('map render');
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
                        text={this.props.name}
                    />
                    {console.log(1)}
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;
