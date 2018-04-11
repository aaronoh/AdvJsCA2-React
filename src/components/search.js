import React from 'react';

class Search extends React.Component {
    render() {
        return (

                        <div className="input-field col s12 m6 l3">
                            <input id = {this.props.id} name={this.props.name} value={this.props.value} onChange={this.props.handleChange} type="text" placeholder={this.props.placeholder} />
                            <label>Search by Station name</label>
                        </div>

        );
    }
}

export default Search;