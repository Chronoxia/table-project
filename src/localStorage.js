export const loadState = () => {
  try {
    const rows = localStorage.getItem('rows');
    const cells = localStorage.getItem('cells');
    const rowIds = localStorage.getItem('rowsById');
    const cols = localStorage.getItem('columnsById');

    if (rows === null || cells === null || rowIds === null || cols === null) {
      return undefined;
    }

    return {
      cells: JSON.parse(cells),
      rows: JSON.parse(rows),
      rowsById: JSON.parse(rowIds),
      columnsById: JSON.parse(cols)
    }

  } catch(err) {
    return undefined;
  }
};