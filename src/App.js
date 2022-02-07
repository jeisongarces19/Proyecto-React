import React from "react";
import "./App.css";

/*Todo esto de aqui es jsx o javascrit , no html */


export default function Cabezera(props) {
  return (
    <div className='Cabezera' id='Titulo'>
      <h1 id='Color'>{props.texto}</h1>    
      <h3 id='Subtitulo'>{props.subtitulo}</h3>      
    </div>
  );
}

/* Propiedades props que son para cambiar cosas a los componente*/

export default function App() {
  return (
    <div className='App'>
      <p><Cabezera texto='Bienvenido a COLTEC!' subtitulo='Ingenieria SAS'> Llamar un componente</Cabezera></p>

      <h3><Cabezera texto='Revision Diaria' > Llamar un componente usando un prop</Cabezera></h3>

      <header className='App-header'>
        <p>Por favor, Ingrese los datos:</p>        
      </header>
    </div>
  );
}
