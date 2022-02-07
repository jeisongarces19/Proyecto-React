import React from "react";
import "./App.css";

/*Todo esto de aqui es jsx o javascrit , no html */


export default function Cabezera() {
  return (
    <div className='Cabezera' id='Titulo'>
      <h1>Bienvenido a COLTEC!</h1>     
    </div>
  );
}

/* Estas tres cosas son equivalentes para llamar componentes*/



export default function App() {
  return (
    <div className='App'>
      <p><Cabezera> Llamar un componente</Cabezera></p>
      <header className='App-header'>
        <p>Por favor, Ingrese los datos:</p>        
      </header>
    </div>
  );
}
