import React from 'react';
import { Header } from '../../Layouts/Header/Header';
import {lobos} from '../../../lobos';
import { Card } from '../../UI/Card/Card';

export const Products = () => {
  return (
    <div className="products">
      <Header />
        <div className="div-lobos">
          {lobos.map(lobito=><Card lobo={lobito} />)}            
        </div>      
    </div>
  )
}
