import React from 'react'
import {lobos} from '../../../lobos';

import './MainCards.css';
import {Card} from '../../UI/Card/Card.jsx'


export const MainCards =() =>{
  return(
    <div className="cards">
      {lobos.map(lobo=>(<Card lobo={lobo}/>))}
    </div>  
  );
}
