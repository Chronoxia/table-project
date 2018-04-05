import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import tableApp from './reducers';
import { saveState, loadState } from './localStorage';

const configureStore = () => {
  // const persistedState = loadState();
  const store = createStore(
      tableApp,
      applyMiddleware(thunk)
    );

  // store.subscribe(() =>
  //   saveState(store.getState())
  // );

  return store;
};

export default configureStore;