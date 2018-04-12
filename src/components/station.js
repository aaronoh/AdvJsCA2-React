import React from "react";
import {Modal, Button} from 'react-materialize';
import Map from './map';


class Station extends React.Component {
    constructor(){
        super();
        this.state = {
            show: false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log(target,name,value);

        this.setState({
            [name]: value,
        });
    };

    render() {
        console.log(this.state.show);
        let modal = <div></div>;
        if(this.state.show) {
             modal = <Modal
                className="map-modal"
                id={this.props.num.toString()}
                header={this.props.name}>
                <Map center={{lat: this.props.lat, lng: this.props.lng}} name={this.props.name} lat={this.props.lat}
                     lng={this.props.lng}/>
            </Modal>
            let modalid = '#' + this.props.num.toString();
            setTimeout(function() {
                window.$(modalid).modal('open');
            }, 1);

            console.log(modalid);

        }
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
                        <div>
                            <Button name ='show' icon='map' value={true} onClick={this.handleInputChange}>Show Map</Button>
                            {/*<Modal*/}
                                {/*className="map-modal"*/}
                                {/*id='foo'*/}
                                {/*header={this.props.name}>*/}
                                {/*<Map center={{ lat: this.props.lat, lng: this.props.lng }} name = {this.props.name} lat = {this.props.lat} lng = {this.props.lng}/>*/}
                            {/*</Modal>*/}
                            {modal}
                            </div>


                    </div>
                </div>

        );
    }

}
export default Station