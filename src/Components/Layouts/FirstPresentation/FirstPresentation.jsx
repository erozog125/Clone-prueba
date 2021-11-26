import {Card} from '../../UI/Card/Card';
import {Presentation} from '../../UI/Presentation/Presentation';
import lobito from '../../../Images/lobo.jpg';
import './FirstPresentation.css';

export const FirstPresentation =()=> {

  const lobo = { id:1, name:"Hola Grupo", URL:lobito };
  
  return(
    <div className="first-layout">        
      <Presentation />
      <Card lobo={lobo} />
    </div>          
  )
}