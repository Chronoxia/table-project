import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { getRows, getColumns } from '../reducers/index';
import TableRow from '../components/TableRow';
import ButtonsRow from '../components/ButtonsRow';
import { deleteRow, deleteColumn } from '../actions/index';

let Table = ({
 rows,
 columns,
 actions,
}) => (
  <table>
    <tbody>
      {rows.map(row => (
        <TableRow
          {...row}
          key={row.rowId}
          deleteRow={actions.deleteRow}
        />
      ))}
        <ButtonsRow
          columns={columns}
          deleteColumn={actions.deleteColumn}
        />
    </tbody>
  </table>
);

Table.propTypes = {
  rows: PropTypes.array,
  columns: PropTypes.array,
  actions: PropTypes.shape({
    deleteColumn: PropTypes.func,
    deleteRow: PropTypes.func,
  }),
};

const mapStateToProps = (state) => ({
  rows: getRows(state),
  columns: getColumns(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ deleteColumn, deleteRow }, dispatch)
});

Table = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Table);

export default Table;