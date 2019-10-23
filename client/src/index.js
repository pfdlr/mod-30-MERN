import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss';
import 'animate.css/animate.min.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const Root = () => (
    <Router>
      <App />
    </Router>
  );

ReactDOM.render(<Root />, document.getElementById('root'));
