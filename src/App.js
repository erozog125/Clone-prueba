import React from 'react'
import { Home } from './Components/Pages/Home/Home.jsx';
import { Products } from './Components/Pages/Products/Products.jsx';

import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";

export default function App() {
  return (
    <Router>    
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>          
        </Switch>      
    </Router>
  );
}
