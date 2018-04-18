import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getCellText } from '../reducers/index';
import { editCell } from '../actions/index';

class TableCell extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  static defaultProps = {
    text: '',
    editCell: () => {},
  };

  state = {
    isEditing: false,
    text: this.props.text,
  };

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  };

  handleSave = (text) => {
    const { id, editCell } = this.props;
    editCell(id, text);
    this.setState({
      isEditing: false
    });
  };

  handleBlur = (e) => {
    this.handleSave(e.target.value)
  };

  handleKeyDown = (e) => {
    if (e.which === 13) {
      const text = this.state.text.trim();
      this.handleSave(text);
    }
  };

  handleDoubleClick() {
    this.setState({
      isEditing: true
    })
  };

  render() {
    let element;

    const { text } = this.props;

    if (!this.state.isEditing) {
      element = (
        <span>
          {text}
        </span>
      )
    } else {
      element = (
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

    return (
      <td
        className='cell'
        onDoubleClick={() => this.handleDoubleClick()}
      >
        {element}
      </td>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  text: getCellText(state, ownProps.id)
});
const mapDispatchToProps = (dispatch) => ({
  editCell: bindActionCreators(editCell, dispatch),
});

TableCell = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TableCell);

export default TableCell;