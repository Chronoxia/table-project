import { v4 } from '../utils/index';
import { ADD_ROW, ADD_COLUMN, DELETE_ROW, DELETE_COLUMN, EDIT_CELL, ADD_CELL } from '../constants';

const addCell = (cell) => ({
  type: ADD_CELL,
  payload: {
    cell,
  }
});

export const editCell = (id, text) => ({
  type: EDIT_CELL,
  payload: {
    id,
    text,
  }
});

export const addRow = () => (dispatch, getState) => {
  const cols = getState().columnsById;
  const rowId = v4();
  const cells = [];
  for (let i = 0; i < cols.length; i++) {
    const cell = {
      id: v4(),
      text: '',
      columnId: cols[i],
      rowId,
    };
    dispatch(addCell(cell));
    cells.push(cell.id);
  }
  return dispatch({
    type: ADD_ROW,
    payload: {
      rowId,
      cells
    }
  });
};

export const deleteRow = (id) => ({
  type: DELETE_ROW,
  payload: {
    id,
  }
});

export const addColumn = () => (dispatch, getState) => {
  const rows = getState().rowsById;
  const cells = [];
  const columnId = v4();
  for (let i = 0; i < rows.length; i++) {
    const cell = {
      id: v4(),
      text: '',
      columnId,
      rowId: rows[i],
    };
    dispatch(addCell(cell));
    cells.push(cell);
  }
  return dispatch({
    type: ADD_COLUMN,
    payload: {
      columnId,
      cells,
    }
  })
};

export const deleteColumn = (id) => ({
  type: DELETE_COLUMN,
  payload: {
    id,
  }
});
