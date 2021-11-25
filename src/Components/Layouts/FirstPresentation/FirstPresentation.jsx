import {Card} from '../../UI/Card/Card';
import Image from '../../../Images/lobo.jpg';
import {Presentation} from '../../UI/Presentation/Presentation';
import './FirstPresentation.css';

export const FirstPresentation = () => {
  return(
    <>
      <div className="first-layout">        
        <Presentation />
        <Card
          image = {Image}
          name = {'Hola Grupo'}
        />
      </div>      
    </>
  )
}