import React from 'react';
import { Card } from '../../UI/Card/Card';
import Image from '../../../Images/Lobos/lobo1.jpeg';

export const MainHome = () => {

  const lobo = { id:1, name: "Lobo Home", URL: Image };
  return (<Card lobo={lobo} />)
}
