import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getRows, getColumns } from '../reducers/index';
import TableRow from './TableRow';
import ButtonsRow from './ButtonsRow';

let Table = ({
 rows,
 columns,
}) => {

  if (columns.length === 0 || rows.length === 0) {
    return <p>There is nothing to fetch.</p>
  }

  return (
    <table>
      <tbody>
        {rows.map(id => (
          <TableRow
            rowId={id}
            key={id}
          />
        ))}
        <ButtonsRow
          columns={columns}
        />
      </tbody>
    </table>
  )
};

Table.propTypes = {
  rows: PropTypes.array,
  columns: PropTypes.array,
  // actions: PropTypes.shape({
  //   deleteColumn: PropTypes.func,
  //   deleteRow: PropTypes.func,
  // }),
};

const mapStateToProps = (state) => ({
  rows: getRows(state),
  columns: getColumns(state),
});

Table = connect(
  mapStateToProps,
  null,
)(Table);

export default Table;