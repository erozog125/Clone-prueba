import React from 'react';
import {Header} from '../../Layouts/Header/Header';
import {Footer} from '../../Layouts/Footer/Footer';
import { MainCards } from '../../Layouts/MainCards/MainCards';
import './Products.css';

export const Products = () => {
  return (
    <div className="products-main">
      <Header />
      <MainCards />
      <Footer />
    </div>    
  )
}
