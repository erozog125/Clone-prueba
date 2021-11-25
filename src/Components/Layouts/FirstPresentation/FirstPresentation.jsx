import {Card} from '../../UI/Card/Card';
import Image from '../../../Images/lobo.jpg';
import {Presentation} from '../../UI/Presentation/Presentation';
import './FirstPresentation.css';

export const FirstPresentation = () => {
  const lobo = { id:1, name:"Hola Grupo", URL:Image };
  return(
    <>
      <div className="first-layout">        
        <Presentation />
        <Card
          lobo={lobo}
        />
      </div>      
    </>
  )
}