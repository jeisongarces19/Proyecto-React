import React from 'react';
import './Asistente.css';

import Typical from 'react-typical';


import ReactPlayer from 'react-player';


class Audio extends React.Component {
  render() {
    return (
        <div>          
          <ReactPlayer 
              url={this.props.urlc} 
              controls
              width='20%'
              height='5%'
              className="audio"

          />
        </div>
    );
  }
}



function Parrafos(props){

    var texto=props.pagesR;
    var hablar;

    //console.log("lo que hay",texto)

    if (texto==="Login") {
      hablar=[5000,"Bienvenido a MECA!",5000,"Soy tu asistente virtual",5000,"Te encuentras ubicado en Login",5000,"donde podrás ingresar a tu cuenta.",5000,"Si no tienes una cuenta.",5000,"Debes registrarte",5000,"Aun así, hay una ventana de preguntas",5000,"donde encontraras diferentes respuestas",5000,"a preguntas diferentes preguntas",5000,"Saludos",5000]
    }
    else{
      hablar=[5000,"Bienvenido"]
    }


    
    return (
      <div>
        <span className='primary-text'>
            {" "}
            <h1>
                {" "}
                <Typical loop={Infinity}
                    steps ={hablar}>
                </Typical>
            </h1>
            
        </span>
            
      </div>
    );
}



class Asistente extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {     
      urlc: "" ,
      show: "",
      pages: [],
    };
    this.manejarCambio1 = this.manejarCambio1.bind(this);

  
  }  

  

  manejarCambio1() {  
    console.log("Musica para:",this.props.show);

    if(this.props.show==="Login"){
      console.log("ingreso")
      
      this.setState({ 
        urlc: "https://cdn.pixabay.com/audio/2022/05/05/audio_1395e7800f.mp3", 
      });
    }

    if(this.props.show==="Perfil"){
      
      this.setState({ 
        urlc: "https://cdn.pixabay.com/download/audio/2022/04/27/audio_67bcf729cf.mp3?filename=whip-110235.mp3" 
      });
    }


  }

 
  
  render() {    
    return (
      <div className="posicionAsis">

        
        <button className="AsistenteV" onClick={this.manejarCambio,this.manejarCambio1} >

        
        {this.props.show.length===0 ?(
          <h2 >Cargando...</h2>
          ):( 
              <Parrafos pagesR={this.props.show}></Parrafos>                                                    
              
          )
        }

        <img src="https://i.pinimg.com/originals/02/9f/b2/029fb284000fd5bdad2629f7a37c3595.gif"/>
        </button>

        <ReactPlayer 
              url={this.state.urlc} 
              controls
              width= '9%'
              height= "4%"
              backgroundcolor= 'rgba(0, 0, 0, 0.5)'
              className="audiomio"
              playing 

        />


        <br></br>
        <br></br>

            
         
      </div>
    );

    
    
  }

  
}
export default Asistente;

