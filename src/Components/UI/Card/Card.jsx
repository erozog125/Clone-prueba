import './Card.css';

export const Card = ( {lobo} ) => {

  return(
    <div key={lobo.id} className="card">
        <img className="image-card" src={lobo.URL} alt="Lobito" />
        <h2 className="title-card">{lobo.name}</h2>
    </div>    
  )
}

