import React from 'react';
import PropTypes from 'prop-types';
import TableCell from './TableCell';

const TableRow = ({
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
      className='cell delete-cell'
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

export default TableRow;