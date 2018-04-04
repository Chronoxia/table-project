import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import TableApp from './TableApp';

const Root = ({
  store,
}) => (
  <Provider store={store} >
    <TableApp />
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;