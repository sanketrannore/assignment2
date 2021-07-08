import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import {generateClasses} from './utils'
import {CLASSES} from './config'
import * as storage from './services/storage'
import './index.css';
import App from './App';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';


// set initial data
const initialClasses = generateClasses('python', 1, '1 PM', '4 PM')
storage.setItem(CLASSES, initialClasses)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
