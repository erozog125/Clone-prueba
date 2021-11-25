import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Home} from './Components/Pages/Home/Home.jsx';
import { Products } from './Components/Pages/Products/Products';
import { MainCards } from './Components/Layouts/MainCards/MainCards.jsx';



ReactDOM.render(
  <>
    <MainCards />
  </>,  
  document.getElementById('root')
);