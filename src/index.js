import React from 'react';
import { render } from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore';
import Root from './components/Root';

const store = configureStore();

localStorage.clear();
// setInterval(() => console.log(localStorage), 5000);
// setInterval(() => console.log(store.getState()), 5000);

render(
  <Root store={store} />,
  document.getElementById('root')
);

registerServiceWorker();
