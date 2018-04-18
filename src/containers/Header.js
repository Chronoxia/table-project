import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addRow, addColumn } from '../actions/index';

let Header = ({
  actions,
}) => (
  <p className="header">
    <button
      className='btn btn-add'
      onClick={() => actions.addRow()}
    >
      Add row
    </button>
    {' '}
    <button
      className='btn btn-add'
      onClick={() => actions.addColumn()}
    >
      Add column
    </button>
  </p>
);
Header.propTypes = {
  actions: PropTypes.shape({
    addRow: PropTypes.func,
    addColumn: PropTypes.func,
  })
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ addRow, addColumn }, dispatch),
});

Header = connect(
  null,
  mapDispatchToProps,
)(Header);

export default Header;