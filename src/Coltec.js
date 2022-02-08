import React from "react";
import "./Coltec.css";

/*Todo esto de aqui es jsx o javascrit , no html */

/*Los datos internos de los componentes se llaman estados(stade) */
export default function Cabezera(props) {
  return (
    <div className='Cabezera' id='Titulo'>
      <h1 id='Color'>{props.texto}</h1>    
      <h3 id='Subtitulo'>{props.subtitulo}</h3>      
    </div>
  );
}


class EnviarInfo extends React.Component{
    //Los estados se manejan asi
    state = {
      show: true
    }  
    CambioEstado = () => {
      //con el ! cambio los estados, si esta en false cmabia a true y biserversa
      this.setState({show: !this.state.show})
    }
    render(){
      if(this.state.show){
        return (    
          <div className='Cabezera' id='Titulo'>
            <h1>{this.props.texto}</h1> 
            {this.props.subtitulo}
            
            <button onClick={this.CambioEstado}> Cambio de estado apagar objeto funcion</button>
          
          </div>
        )
      }else{
        return <h1>No hay elementos
                  
                </h1> 
      }
    }
  }

/* Propiedades props que son para cambiar cosas a los componente*/

export default function AppPrincipal() {
  return (
    <div>
      <p><EnviarInfo texto='Bienvenido a COLTEC!' subtitulo='Ingenieria SAS'> Llamar un componente</EnviarInfo></p>


      <header className='App-header'>
        <p>Por favor, Ingrese los datos:</p>        
      </header>

      <button> Enviar Informacion desde AppPrincipal </button>

    </div>
  );
}
