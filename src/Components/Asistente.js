import React from 'react';
import './Asistente.css';

//import Typical from 'react-typical';


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


          {/*<span className='primary-text'>
            {" "}
            <h1>
                {" "}
                <Typical loop={Infinity}
                    steps ={[                                
                         "Hola!",
                         1800,
                         "Soy tu Asistente Virtual...",
                         1800
                        ]}>
                </Typical>
            </h1>
            
          </span>
        */}
          
          
        </div>
    );
  }
}


               


class Asistente extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      //
      fondo: "posicionAsis" ,  
      urlc: "" ,
      show: ""
    };

    this.manejarCambio = this.manejarCambio.bind(this);
    this.manejarCambio1 = this.manejarCambio1.bind(this);
  
  }  

  manejarCambio() {  
        this.setState({ 
          fondo: "posicionAsis" 
        });
      }

  manejarCambio1() {  
    console.log("Musica para:",this.props.show);

    if(this.props.show==="Login"){
      
      this.setState({ 
        urlc: "https://cdn.pixabay.com/audio/2022/05/05/audio_1395e7800f.mp3" 
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
      <div className={this.state.fondo}>
        <button className="AsistenteV" onClick={this.manejarCambio,this.manejarCambio1} >
        Hola! Soy tu Asistente Virtual 
        <img src="https://i.pinimg.com/originals/02/9f/b2/029fb284000fd5bdad2629f7a37c3595.gif"/>
        ¡Push me!
        </button>

        <ReactPlayer 
              url={this.state.urlc} 
              controls
              width= '9%'
              height= "4%"
              backgroundColor= 'rgba(0, 0, 0, 0.5)'
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

