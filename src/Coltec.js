import React from "react";
import "./Coltec.css";

/*Todo esto de aqui es jsx o javascrit , no html */

/*Los datos internos de los componentes se llaman estados(stade) */
export default function Ayuda(props) {
  return (
    <div className='Ayuda' id='Titulo'>
      <h1 id='Color'>{props.texto}</h1>         
    </div>
  );
}


class Cabezera extends React.Component{
    //Los estados se manejan asi
    state = {
      show: true
    }
  
    render(){
      if(this.state.show){
        return (    
          <div className='Cabezera' id='Titulo'>
            <h1>{this.props.texto}</h1> 
            {this.props.subtitulo}                   
          </div>
        )
      }else{
        return <h1>No hay elementos</h1> 
      }
    }
}

class DatosRegistro extends React.Component{
  //Los estados se manejan asi
  state = {
    show: true
  }
  render(){
    if(this.state.show){
      return (    
        <div>
          <p>{this.props.texto}</p> 
          <input type="checkbox"/>
        </div>
      )
    }else{
      return <h1>No hay elementos</h1> 
    }
  }
}

/* Propiedades props que son para cambiar cosas a los componente*/

export default function AppPrincipal() {
  return (
    <div>
      
      <p><Cabezera texto='Bienvenido a COLTEC!' subtitulo='Ingenieria SAS'> Llamar un Cabezera</Cabezera></p>


      <header className='App-header'>
        <p>Por favor, Ingrese los datos:</p>        
      </header>

      <p><DatosRegistro texto='Covid'> Llamar un </DatosRegistro></p>    <p><DatosRegistro texto='Gripa'> Llamar un </DatosRegistro></p>
      <p><DatosRegistro texto='Algo'> Llamar un </DatosRegistro></p>
      <p><DatosRegistro texto='Peligro'> Llamar un </DatosRegistro></p>




      <button> Enviar Informacion desde AppPrincipal </button>

    </div>
  );
}
