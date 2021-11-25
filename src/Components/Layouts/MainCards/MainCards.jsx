import React from 'react';
import {lobos} from '../../../lobos';
import { Card } from '../../UI/Card/Card';

export const MainCards = () => {
  return (
    <div className="main-card">
      {
        lobos.map(lobo=>(
          <Card
            lobo={lobo}          
          />
        ))
      }
    </div>
  )
}
