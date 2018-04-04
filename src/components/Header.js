import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addRow, addColumn } from '../actions';

let Header = ({
  addRow,
  addColumn,
}) => (
  <p className="header">
    <button
        onClick={() => addRow()}
    >
      Add row
    </button>
    {' '}
    <button
      onClick={() => addColumn()}
    >
      Add column
    </button>
  </p>
);
Header.propTypes = {
  addRow: PropTypes.func,
  addColumn: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  addRow() {
    dispatch(addRow())
  },
  addColumn() {
    dispatch(addColumn())
  },
});

Header = connect(
  null,
  mapDispatchToProps,
)(Header);

export default Header;