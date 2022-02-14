import React from "react";
import "./Coltec.css";

//imagenes
import ImgColtec from "./src/img/CargarImg.js";

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
          <center>
          <div className='Cabezera' id='Titulo'>            
            <h1>{this.props.texto}</h1> 
            {this.props.subtitulo}                   
          </div>
          </center>
        )
      }else{
        return <h1>No hay elementos</h1> 
      }
    }
}

class DatosRegistroPersonal extends React.Component{
 
  render(){
   
    //Fecha
    if(this.props.elem==="1"){
      return(       
        <div>     
          {this.props.informacion} 
          <br></br>
          <input type="Date" />         
        </div>
      )
    }
    //Otros Datos Personales
    if(this.props.elem==="2"){
      return (    
        <div>        
          {this.props.informacion}
          <br></br>
          <input id="Titulo" type="text"/>               
        </div>
      )
    }else{
      return <h1>No hay campos que mostrar</h1> 
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
        <center>     
        <div id="Titulo">                
          <h2>{this.props.titulo}</h2>       
        </div>
        </center>
      )
    }

    if(this.props.elem==="2"){
      return (   
        <center> 
        <div>        
          {this.props.preguntas}
          <br></br>
          <input type="checkbox" name="Opcion1"/>              
        </div>
        </center>
      )
    }else{
      return <h1></h1> 
    }

  }
}


class ImagenesEnviar extends React.Component{
 
  render(){
    return(       
      <div>     
        <p id="imagen"></p>        
      </div>
    )
  }
}
/* Propiedades props que son para cambiar cosas a los componente*/

export default function AppPrincipal() {
  return (


    <div id="principal">
      
      <header className='App-header'>
        <center>
          <p><ImagenesEnviar elem="1">  </ImagenesEnviar></p>
             
        <p posicion="center"><Cabezera texto='Bienvenido a COLTEC!' subtitulo='Ingenieria SAS'> Llamar un Cabezera</Cabezera></p> 

        <p>Por favor, Ingrese los datos:</p> 
        </center> 


        

      </header>

      <form method="POST" action="index.php" id="login_form" onsubmit="return IniciarSeccion();" name="miForm"> 
      </form>

      <center>

      <div id="Titulo">      
        <p><DatosRegistroPersonal informacion="Fecha" elem="1">  </DatosRegistroPersonal></p> 
        <p><DatosRegistroPersonal informacion="Hora de entrada" elem="2"> </DatosRegistroPersonal></p> 
        <p><DatosRegistroPersonal informacion="Hora de salida" elem="2"> </DatosRegistroPersonal></p> 
        <p><DatosRegistroPersonal informacion="Nombre y Apellidos" elem="2"> </DatosRegistroPersonal></p> 
        <p><DatosRegistroPersonal informacion="Documento de Identidad" elem="2"> </DatosRegistroPersonal></p> 
        <p><DatosRegistroPersonal informacion="Dirección de Residencia" elem="2"> </DatosRegistroPersonal></p>         <p><DatosRegistroPersonal informacion="Telefono de Contacto" elem="2"> </DatosRegistroPersonal></p> 
        <p><DatosRegistroPersonal informacion="EPS" elem="2"> </DatosRegistroPersonal></p> 
        <p><DatosRegistroPersonal informacion="ARL" elem="2"> </DatosRegistroPersonal></p> 
        <p><DatosRegistroPersonal informacion="Motivo Visita" elem="2"> </DatosRegistroPersonal></p> 
        <p><DatosRegistroPersonal informacion="En caso de Emergencias Avisar a:" elem="2"> </DatosRegistroPersonal></p> 
      </div>

      </center>

      <br></br>

      <center>

      <div id="Titulo">

        <p style={{background: 'red'}}><DatosRegistroCovid titulo='PREVENCIÓN COVID 19' elem="1"> Llamar un </DatosRegistroCovid></p> 
        
        <p><DatosRegistroCovid preguntas='Usted ha Presentado en la última semana, alguno de estos sintomas: Fiebre, Tos, Malestar General Dolor de cabeza, Dolor de garganta, Pérdida del Apetito, del olfato o gusto, dificultad para respirar, Dolor en el pecho. ¿ Cual? ' elem="2"> Llamar un </DatosRegistroCovid></p> 
        <input type="text"/> 
        
        <p ><DatosRegistroCovid preguntas='Usted ha sido diagnogticado como Caso Positivo, Confirmado por prueba de laboratorio para Covid 19 ?' elem="2"> Llamar un </DatosRegistroCovid></p>

        <p><DatosRegistroCovid preguntas='Ha tenido contacto estrecho en los ultimos 14 dias con un caso de infeccion respiratoria grave o un probable o confirmado caso de corona virus Covid 19?' elem="2" > Llamar un </DatosRegistroCovid></p>

        <p><DatosRegistroCovid preguntas='Vive en el mismo hogar, es pareja intima, familiar o brinda atención a personas con Coronavirus Covid 19 confirmado por laboratorio, con o sin sintomas' elem="2"> Llamar un </DatosRegistroCovid></p>

      </div>
      </center>

      <center>
      <br></br>
      <div id="Titulo">
        <p><DatosRegistroCovid preguntas='Autorizo el Tratamiento de Datos Personales' elem="2"> </DatosRegistroCovid></p>

        <button color="primary"  id="Titulo">
           <b>Enviar Informacion</b>
        </button>
        
        <br></br>
        <br></br>

      </div>



      </center>
      <br></br>
      <br></br>


      <center>
      <p>La Ley de Protección de Datos Personales: Reconoce y protege el derecho que tienen todas las personas a conocer, actualizar y rectificar las informaciones que se hayan recogido sobre ellas en bases de datos o archivos que sean susceptibles de tratamiento por entidades de naturaleza pública o privada.</p>
      </center>

    </div>

    

    
  );
}
