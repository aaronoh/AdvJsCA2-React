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

        this.setState({
            [name]: value,
        });
    };

    render() {
        let banking = <div><i style={{'color': '#ecf0f1'}}className="material-icons">payment</i></div>
        {if (this.props.banking.toString() === 'true'){
            banking = <div><i style={{'color': '#2c3e50'}}className="material-icons">payment</i></div>
        }}

        let modal = <div></div>;
        if(this.state.show) {
             modal = <Modal
                className="map-modal"
                id={this.props.num.toString()}
                header={this.props.name}>
                <Map center={{lat: this.props.lat, lng: this.props.lng}} name={this.props.name} lat={this.props.lat}
                     lng={this.props.lng}/>
                 <table><tr>
                     <td>Banking:</td>
                     <td>{banking}</td>
                 </tr></table>
             </Modal>
            let modalid = '#' + this.props.num.toString();
            setTimeout(function() {
                window.$(modalid).modal('open');
            }, 1);
        }

        return (

                <div className ='col s12 m6 l4'>
                    <div className="card" style={{'height': '350px'}}>
                        <table>
                            <tbody>
                         <tr><td>
                            <h4 className='s-head'>{this.props.name} </h4>
                         </td>
                         <td>{banking}</td>
                         </tr>
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
                        <div className='card-action'>
                            <Button style={{'background-color': '#e74c3c'}}name ='show'  value={true} onClick={this.handleInputChange}>Show Map</Button>
                            {modal}
                        </div>
                    </div>

                </div>

        );
    }

}
export default Station