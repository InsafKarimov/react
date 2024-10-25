import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOMClient from 'react-dom';

import './index.scss';
import 'macro-css';

import App from './App';

ReactDOMClient.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
