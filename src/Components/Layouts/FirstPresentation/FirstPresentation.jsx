import {Card} from '../../UI/Card/Card';
import {Presentation} from '../../UI/Presentation/Presentation';
import './FirstPresentation.css';

export const FirstPresentation = () => {
  return(
    <>
      <div className="first-layout">        
        <Presentation />
        <Card />
      </div>      
    </>
  )
}