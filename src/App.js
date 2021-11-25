import React from "react";
import {Home} from './Components/Pages/Home/Home.jsx';
import {Products} from './Components/Pages/Products/Products.jsx';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";

export default function App() {
  return (
    <div className="div-app">
      <Router>
        <Switch>
            <Route path="/products">
              <Products />
            </Route>          
            <Route path="/">
              <Home />
            </Route>
          </Switch>      
      </Router>
    </div>  
  );
}