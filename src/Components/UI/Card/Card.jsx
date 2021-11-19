import image from '.././../../Images/lobo.jpg';
import './Card.css';

export const Card = () => {
  return(
    <>
      <div className="card">
        <img className="image-card" src={image} alt="Lobito" />
        <h2 className="title-card">Hola Grupo</h2>
      </div>
    </>
  )
}

