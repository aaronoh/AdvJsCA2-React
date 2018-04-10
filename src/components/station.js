import React from "react";

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
                        <p className='col l5'>Stands Available: {this.props.stands}</p>
                           </td><td>
                        <i className="small material-icons">local_parking</i>
                           </td></tr>
                            </tbody>
                        </table>
                            <div className="card-action">
                                <a onClick={this.cardClicked} className="map-btn btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">map</i></a>
                            </div>


                    </div>
                </div>

        );
    }
}

export default Station