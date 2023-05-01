import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.scss';
import App from './App.js';
import { Provider } from 'react-redux';
import { setupStore } from './Store/store';
import { BrowserRouter } from 'react-router-dom';

const store = setupStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
