import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Card} from './Components/UI/Card/Card.jsx';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>    
    <Card />
  </React.StrictMode>,
  document.getElementById('root')
);