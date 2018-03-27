import React from "react";

class Station extends React.Component {
    render() {
        return (
            <div>

                <div style={{'borderStyle': 'dotted'}}>
                    <h3>{this.props.name}</h3>
                    <p>Bikes Available: {this.props.bikes}</p>
                    <p>Stands Available: {this.props.stands}</p>
                </div>
            </div>
        );
    }
}

export default Station