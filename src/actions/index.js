import v4 from '../utils/index';

export const editCell = (id, text) => ({
  type: 'EDIT_CELL',
  payload: {
    id,
    text,
  }
});

export const addRow = () => ({
  type: 'ADD_ROW',
  payload: {
    rowId: v4(),
  }
});

export const deleteRow = (id) => ({
  type: 'DELETE_ROW',
  payload: {
    id,
  }
});

export const addColumn = () => ({
  type: 'ADD_COLUMN',
  payload: {
    id: v4(),
  }
});

export const deleteColumn = (id) => ({
  type: 'DELETE_COLUMN',
  payload: {
    id,
  }
});
