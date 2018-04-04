import { createStore } from 'redux';
import tableApp from './reducers';
import { saveState, loadState } from './localStorage';

const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(
      tableApp,
      persistedState,
    );
  store.subscribe(() =>
    saveState(store.getState())
  );
  return store;
};

export default configureStore;