import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextInput extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  state = {
    text: this.props.text,
  };

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  };

  handleBlur = (e) => {
    this.props.onSave(e.target.value)
  };

  handleKeyDown = (e) => {
    if (e.which === 13) {
      const text = this.state.text.trim();
      this.props.onSave(text);
    }
  };

  render() {
    return (
      <input
        className='cell-input'
        value={this.state.text}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
        onBlur={this.handleBlur}
        autoFocus="true"
      />
    )
  }
}

export default TextInput;