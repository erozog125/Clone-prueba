import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {First_Presentation} from './Components/Layouts/First_Presentation/First_Presentation.jsx';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>    
    <First_Presentation />
  </React.StrictMode>,
  document.getElementById('root')
);