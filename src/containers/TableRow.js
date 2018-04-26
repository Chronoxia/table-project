import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';

import TableCell from './TableCell';
import { getRowCells } from '../reducers/index';
import { deleteRow } from '../actions/index';

let TableRow = ({
  rowId,
  cells,
  deleteRow,
}) => (
  <tr
    className='row'
  >
    {cells.map(cell => (
      <TableCell
        key={cell}
        id={cell}
      />
    ))}
    <td
      className='cell cell-delete'
      onClick={() => deleteRow(rowId)}
    >
      Delete row
    </td>
  </tr>
);

TableRow.propTypes = {
  rowId: PropTypes.string.isRequired,
  cells: PropTypes.array.isRequired,
  deleteRow: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  cells: getRowCells(state, ownProps.rowId)
});

const mapDispatchToProps = (dispatch) => ({
  deleteRow: bindActionCreators(deleteRow, dispatch)
});

TableRow = connect(
  mapStateToProps,
  mapDispatchToProps
)(TableRow);

export default TableRow;