import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, withRouter } from "react-router-dom";

import App from './App';

ReactDOM.render(
    <Router>
      <App />
    </Router>
    , document.getElementById('root')
);
