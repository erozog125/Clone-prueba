import React from 'react';
import {lobos} from '../../../lobos';
import { Card } from '../../UI/Card/Card';

export const MainCards = () => {
  return (    
      lobos.map(lobo=>(
          <div className="main-card"> 
          <Card          
            lobo={lobo}
          />
        </div>     
      ))
  )
}
