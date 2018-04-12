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
            <input name ="range" type="range" id="test5" min="0" max="30"  range={this.props.range === this.value} onChange = {this.props.handleChange} />
            </p>
                </div>
            </div>

        )
    }
}

export default Range;