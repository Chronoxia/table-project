import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import * as actionTypes from './constants';
import tableApp from './reducers';
import { loadState } from './localStorage';

const customMiddleware = (store) => (next) => (action) => {
  if (loadState() === undefined) {
    localStorage.setItem('rows', JSON.stringify(store.getState().rows));
    localStorage.setItem('cells', JSON.stringify(store.getState().cells));
    localStorage.setItem('rowsById', JSON.stringify(store.getState().rowsById));
    localStorage.setItem('columnsById', JSON.stringify(store.getState().columnsById));
  }

  const returnValue = next(action);

  if (action.type === actionTypes.ADD_ROW || action.type === actionTypes.DELETE_ROW) {
    localStorage.setItem('rows', JSON.stringify(store.getState().rows));
    localStorage.setItem('cells', JSON.stringify(store.getState().cells));
    localStorage.setItem('rowsById', JSON.stringify(store.getState().rowsById));
  }

  if (action.type === actionTypes.ADD_COLUMN || action.type === actionTypes.DELETE_COLUMN) {
    localStorage.setItem('rows', JSON.stringify(store.getState().rows));
    localStorage.setItem('cells', JSON.stringify(store.getState().cells));
    localStorage.setItem('columnsById', JSON.stringify(store.getState().columnsById));
  }

  return returnValue;
};

const configureStore = () => {
  const middlewares = [thunk, customMiddleware];
  const persistedState = loadState();
  return createStore(
    tableApp,
    persistedState,
    applyMiddleware(...middlewares),
  );
};

export default configureStore;