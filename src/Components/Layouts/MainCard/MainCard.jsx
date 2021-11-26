import React from 'react';
import {lobos} from '../../../lobos.js';
import { Card } from '../../UI/Card/Card';
import './MainCard.css';


export const MainCard = () => {
  return (
    <div className="main-card">
      {lobos.map(lobo=><Card lobo={lobo} />)}
    </div>
  )
}
