import React from 'react';

class Contract extends React.Component {
    render() {
        const options = this.props.options.map(item => {
            return <option key={item} value={item}>{item}</option>;
        });
        return (
            <div>
                <label>{this.props.label}</label>
                <select value={this.props.selected} name={this.props.name} defaultValue={'Dublin'} onChange={this.props.handleChange}>{options}</select>
             </div>
        );
    }
}

export default Contract;