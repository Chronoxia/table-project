import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCellText } from '../reducers';
import { editCell } from '../actions';
import TextInput from './TextInput';

class TableCell extends Component {
  static propTypes = {
    editCell: PropTypes.func,
    text: PropTypes.string,
    id: PropTypes.string.isRequired,
  };

  state = {
    editing: false
  };

  handleDoubleClick() {
    this.setState({
      editing: true
    })
  };

  handleSave = (text) => {
    const { id, editCell } = this.props;
    editCell(id, text);
    this.setState({
      editing: false
    });
  };

  render() {
    let element;

    const { text } = this.props;

    if (!this.state.editing) {
      element = (
        <label
        >
          {text}
        </label>
      )
    } else {
      element = (
        <TextInput
          onSave={this.handleSave}
          text={text}
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
  editCell(id, text) {
    dispatch(editCell(id, text))
  }
});

TableCell = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TableCell);

export default TableCell;