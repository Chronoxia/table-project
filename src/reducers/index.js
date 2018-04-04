import v4 from '../utils';

const initialState = {
  cells: {
    'cell-1': {
      id: 'cell-1',
      text: 'Hey',
      columnId: 'column-1',
      rowId: 'row-1',
    },
    'cell-2': {
      id: 'cell-2',
      text: 'Ho',
      columnId: 'column-2',
      rowId: 'row-1',
    },
    'cell-3': {
      id: 'cell-3',
      text: 'Hey',
      columnId: 'column-1',
      rowId: 'row-2',
    },
    'cell-4': {
      id: 'cell-4',
      text: 'Ho',
      columnId: 'column-2',
      rowId: 'row-2'
    }
  },
  rows: {
    'row-1': {
      rowId: 'row-1',
      cells: ['cell-1', 'cell-2', ]
    },
    'row-2': {
      rowId: 'row-2',
      cells: ['cell-3', 'cell-4', ]
    }
  },
  columnsById: ['column-1', 'column-2', ],
  rowsById: ['row-1', 'row-2', ]
};

const tableApp = (state = initialState, action) => {
  let copy = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'EDIT_CELL':
      copy = { ...state };
      copy.cells[action.payload.id] = {
        ...copy.cells[action.payload.id],
        text: action.payload.text
      };
      return copy;
    case 'ADD_ROW':
      const newRow = copy.columnsById.map(columnId => {
        const cellId = v4();
        copy.cells[cellId] = {
          id: cellId,
          text: '',
          columnId,
          rowId: action.payload.rowId,
        };
        return cellId;
      });
      copy.rows[action.payload.rowId] = {
        rowId: action.payload.rowId,
        cells: newRow,
      };
      copy.rowsById.push(action.payload.rowId);
      return copy;
    case 'DELETE_ROW':
      copy.rows[action.payload.id].cells.forEach(id => {
        delete copy.cells[id]
      });
      delete copy.rows[action.payload.id];
      copy.rowsById = copy.rowsById.filter(id => id !== action.payload.id);
      return copy;
    case 'ADD_COLUMN':
      copy.rowsById.forEach(rowId => {
        const cellId = v4();
        copy.cells[cellId] = {
          id: cellId,
          text: '',
          columnId: action.payload.id,
          rowId
        };
        copy.rows[rowId].cells.push(cellId);
      });
      copy.columnsById.push(action.payload.id);
      return copy;
    case 'DELETE_COLUMN':
      copy.rowsById.forEach(id => {
        copy.rows[id].cells = copy.rows[id].cells.filter(cellId => {
          const check = copy.cells[cellId].columnId !== action.payload.id;
          if (!check) {
            delete copy.cells[cellId];
          }
          return check;
        })
      });
      copy.columnsById = copy.columnsById.filter(id => id !== action.payload.id);
      return copy;
    default:
      return state;
  }
};

export default tableApp;

export const getRows = (state) =>
    state.rowsById.map(rowId => state.rows[rowId]);

export const getColumns = (state) =>
    state.columnsById;

export const getCellText = (state, id) =>
    state.cells[id].text;