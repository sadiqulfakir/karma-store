import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Provider from './store'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
  
);