import React from 'react';
import PropTypes from 'prop-types';

const ButtonsRow = ({
  columns,
  deleteColumn,
}) => (
  <tr>
    {columns.map(id => (
      <td
        className='cell delete-cell'
        onClick={() => deleteColumn(id)}
        key={id}
      >
        Delete
      </td>
    ))}
  </tr>
);

ButtonsRow.propTypes = {
  columns: PropTypes.array.isRequired,
  deleteColumn: PropTypes.func.isRequired,
};

export default ButtonsRow;