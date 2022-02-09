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

class DatosRegistroPersonal extends React.Component{
 
  render(){
   
    if(this.props.elem==="1"){
      return(       
        <div>     
          {this.props.informacion}
          <input type="text"/> 

        </div>
      )
    }

    if(this.props.elem==="2"){
      return (    
        <div>        
          {this.props.informacion}
          <input type="text"/>               
        </div>
      )
    }else{
      return <h1></h1> 
    }

  }
}

class DatosRegistroCovid extends React.Component{
  //Los estados se manejan asi
  state = {
    show: true
  }
  render(){
   
    if(this.props.elem==="1"){
      return(       
        <div id="Titulo">                 
          <h2>{this.props.titulo}</h2>       
        </div>
      )
    }

    if(this.props.elem==="2"){
      return (    
        <div>        
          {this.props.preguntas}
          <input type="checkbox"/>              
        </div>
      )
    }else{
      return <h1></h1> 
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


      <div id="Titulo">
      
        <p><DatosRegistroPersonal fechahora={Date} informacion="Fecha" elem="1">  </DatosRegistroPersonal></p> 

        <p><DatosRegistroPersonal informacion="Hora de entrada" elem="1"> </DatosRegistroPersonal></p> 

        <p><DatosRegistroPersonal informacion="Hora de salida" elem="1"> </DatosRegistroPersonal></p> 

        <p><DatosRegistroPersonal informacion="Nombre y Apellidos" elem="2"> </DatosRegistroPersonal></p> 

        <p><DatosRegistroPersonal informacion="Documento de Identidad" elem="2"> </DatosRegistroPersonal></p> 

        <p><DatosRegistroPersonal informacion="Dirección de Residencia" elem="2"> </DatosRegistroPersonal></p> 

        <p><DatosRegistroPersonal informacion="Telefono de Contacto" elem="2"> </DatosRegistroPersonal></p> 

        <p><DatosRegistroPersonal informacion="EPS" elem="2"> </DatosRegistroPersonal></p> 

        <p><DatosRegistroPersonal informacion="ARL" elem="2"> </DatosRegistroPersonal></p> 

        <p><DatosRegistroPersonal informacion="Motivo Visita" elem="2"> </DatosRegistroPersonal></p> 

        <p><DatosRegistroPersonal informacion="En caso de Emergencias Avisar a:" elem="2"> </DatosRegistroPersonal></p> 



      </div>


      <div id="Titulo">

      <p><DatosRegistroCovid titulo='PREVENCIÓN COVID 19' elem="1"> Llamar un </DatosRegistroCovid></p> 

      
      <p><DatosRegistroCovid preguntas='Usted ha Presentado en la última semana, alguno de estos sintomas: Fiebre, Tos, Malestar General Dolor de cabeza, Dolor de garganta, Pérdida del Apetito, del olfato o gusto, dificultad para respirar, Dolor en el pecho. ¿ Cual? ' elem="2"> Llamar un </DatosRegistroCovid></p> 
      <input type="text"/> 
      
      <p><DatosRegistroCovid preguntas='Usted ha sido diagnogticado como Caso Positivo, Confirmado por prueba de laboratorio para Covid 19 ?' elem="2"> Llamar un </DatosRegistroCovid></p>

      <p><DatosRegistroCovid preguntas='Ha tenido contacto estrecho en los ultimos 14 dias con un caso de infeccion respiratoria grave o un probable o confirmado caso de corona virus Covid 19?' elem="2" > Llamar un </DatosRegistroCovid></p>

      <p><DatosRegistroCovid preguntas='Vive en el mismo hogar, es pareja intima, familiar o brinda atención a personas con Coronavirus Covid 19 confirmado por laboratorio, con o sin sintomas' elem="2"> Llamar un </DatosRegistroCovid></p>

    </div>


    <button> Enviar Informacion desde AppPrincipal </button>

    </div>

    
  );
}
