import React from 'react';

//Could be adjusted to take a prop containing the list of radio button options
class Range extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <label>
                        <span>Only show stations with at least this many bikes. : </span>
                    </label>
            <p className="range-field">
            <input name ="range" type="range" min="0" max="40"  range={this.value} onChange = {this.props.handleChange} />
            </p>
                </div>
            </div>

        )
    }
}
export default Range;