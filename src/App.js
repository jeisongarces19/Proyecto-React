/*import React from "react";*/
/*Importar component directamente*/
import React, {Component} from "react";
import "./App.css";

//aqui voy a crear un arreglo con multiples objetos y cada obejeto sera una tarea
import tareas from './Tareas'

/* Cosas Que se aprendio Funciones, Clases, Estados*/
/*Todo esto de aqui es jsx o javascrit , no html */


//console.log(props)

/*Los datos internos de los componentes se llaman estados(stade) */
/*export default function Cabezera(props) {
  return (
    <div className='Cabezera' id='Titulo'>
      <h1 id='Color'>{props.texto}</h1>    
      <h3 id='Subtitulo'>{props.subtitulo}</h3>      
    </div>
  );
}*/

/*
class Cabezera extends React.Component{
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
          <button onClick={()=> alert('Welcome')}> Boton Alerta</button>
          <button onClick={this.CambioEstado}> Cambio de estado apagar objeto funcion</button>
        
        </div>
      )
    }else{
      return <h1>No hay elementos
                <button onClick={this.CambioEstado}> Cambio de estado apagar objeto funcion</button>
              </h1> 
    }
  }
}
*/
/* Propiedades props que son para cambiar cosas a los componente*/

/*
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
*/

/*SEGUNDA PARTE. APRENDER A HACER UNA APP CORRECTA*/

/* UN COMPONENTE SOLO PUEDE RETORNAR UN ELEMENTO, POR ESO SE METE EN <div></div>
class App extends Component{


  state = {
    tasks: tareas
  }
  //El key es algo que pide el javascrit ques es especificar los elementos
  render(){
    return <div>{5+5}
    
    <div>{this.state.tasks.map(e => <p key={e.id}>{e.title}- {e.id}</p> )}</div>
    
    </div>
    
    
  }  
}
export default App;