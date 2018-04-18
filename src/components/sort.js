import React from 'react';
import PropTypes from 'prop-types';
//Could be adjusted to take a prop containing the list of radio button options
class SortRadioButton extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <label>Sort by name?</label>
                </div>
                <div>
                            <label>
                                <input className= 'with-gap' type="radio" name="sort" value="yes" checked={this.props.checked === 'yes'} onChange={this.props.handleChange}/>
                                <span>Yes</span>
                            </label>
                            <label>
                                <input className= 'with-gap' type="radio" name="sort" value="no" checked={this.props.checked === 'no'} onChange={this.props.handleChange}/>
                                <span>No</span>
                            </label>
                </div>
            </div>
        )
    }
}

SortRadioButton.propTypes ={
    checked: PropTypes.string.isRequired
}
export default SortRadioButton;