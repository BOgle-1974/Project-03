import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
/**************************************************************
 * REDUX 4: Import the createStore, Provider and allReducers
 **************************************************************/
import {createStore} from 'redux';
import {Provider} from'react-redux';
import allReducers from './reducers';

/*******************************************************************
 * REDUX 5: Create a REDUX store that incluides the allReducers
 * from the previous step (see REDUX 4), and then pass the
 * REDUX store as an attribute to the Provider JSX tag. In
 * this example, the second parameter to the createStore
 * function links your store to the REDUX Chrome extension.
 *******************************************************************/
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
   <App />
  </Provider>
);