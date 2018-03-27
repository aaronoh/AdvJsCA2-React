import React from 'react';

class Search extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <label>{this.props.label}</label>
                </div>
                        <div>
                            <input name={this.props.name} value={this.props.value} onChange={this.props.handleChange} type="text" placeholder={this.props.placeholder} />
                        </div>
                    </div>
        );
    }
}

export default Search;