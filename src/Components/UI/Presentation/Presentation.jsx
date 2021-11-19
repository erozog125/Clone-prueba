import './Presentation.css';

export const Presentation = () => { 
  return(
    <>
      <div className="presentation">
        <h1>Bienvenidos a mi primera página en React</h1>
        <p>Recordemos algunas de las características de ReactJS</p>
        <ul>
          <li>Es una librería de Javascript</li>
          <li>Funciona basado en un elemento conocido como el virtual DOM</li>
          <li>Renderiza solamente los componentes que necesita, lo que hace que sea más versátil</li>
          <li>La utilización de los hooks facilita su lógica frontend</li>
        </ul>
      </div>  
    </>
  )
}