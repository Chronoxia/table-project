import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getRows, getColumns } from '../reducers';
import TableRow from './TableRow';
import ButtonsRow from './ButtonsRow';
import { deleteRow, deleteColumn } from '../actions';

let Table = ({
 rows,
 columns,
 deleteRow,
 deleteColumn,
}) => (
  <table>
    <tbody>
      {rows.map(row => (
        <TableRow
          {...row}
          key={row.rowId}
          deleteRow={deleteRow}
        />
      ))}
        <ButtonsRow
            columns={columns}
            deleteColumn={deleteColumn}
        />
    </tbody>
  </table>
);

Table.propTypes = {
  rows: PropTypes.array,
  columns: PropTypes.array,
  deleteRow: PropTypes.func,
  deleteColumn: PropTypes.func,
};

const mapStateToProps = (state) => ({
  rows: getRows(state),
  columns: getColumns(state),
});

const mapDispatchToProps = (dispatch) => ({
  deleteColumn(id) {
    dispatch(deleteColumn(id))
  },
  deleteRow(id) {
    dispatch(deleteRow(id))
  },
});

Table = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Table);

export default Table;