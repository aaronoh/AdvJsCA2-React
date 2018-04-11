import React from "react";
import {Modal} from 'react-materialize';
import Map from './map';

class Station extends React.Component {
    render() {
        return (
                <div className ='col s12 m6 l4'>
                    <div className="card" style={{'height': '350px'}}>
                        <table>
                            <tbody>
                         <tr><td>
                            <h4 className='s-head'>{this.props.name}</h4>
                         </td></tr>
                         <tr><td>
                        <p>Bikes Available: {this.props.bikes}</p>
                          </td>
                          <td>
                        <i className="small material-icons">directions_bike</i>
                          </td></tr>
                          <tr><td>
                        <p style={{'width': '200px'}}>Stands Available: {this.props.stands}</p>
                           </td><td>
                        <i className="small material-icons">local_parking</i>
                           </td></tr>
                            </tbody>
                        </table>
                            <div className="card-action">
                                <Modal
                                    className="map-modal"
                                    header={this.props.name}
                                    trigger={<a className="map-btn btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">map</i></a>}>
                                   <Map center={{ lat: this.props.lat, lng: this.props.lng }} name = {this.props.name} lat = {this.props.lat} lng = {this.props.lng}/>
                                </Modal>
                            </div>


                    </div>
                </div>

        );
    }
}

export default Station