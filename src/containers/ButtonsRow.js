import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { deleteColumn } from '../actions/index';

let ButtonsRow = ({
  columns,
  deleteColumn,
}) => (
  <tr>
    {columns.map(id => (
      <td
        className='cell delete-column'
        key={id}
      >
        <span
          onClick={() => deleteColumn(id)}
        >
          X
        </span>
      </td>
    ))}
  </tr>
);

ButtonsRow.propTypes = {
  columns: PropTypes.array.isRequired,
  deleteColumn: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  deleteColumn: bindActionCreators(deleteColumn, dispatch)
});

ButtonsRow = connect(
  null,
  mapDispatchToProps
)(ButtonsRow);

export default ButtonsRow;