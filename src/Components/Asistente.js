import React from 'react';
import './Asistente.css';


class Asistente extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      fondo: "normal1"    
    };

    this.manejarCambio = this.manejarCambio.bind(this);
    this.manejarCambio1 = this.manejarCambio1.bind(this);
  }  


  /*componentWillMount(){
    setTimeout(()=>{
      this.setState({ 
        fondo: 'Fondoc' 
      });
    },5000)
  }*/

  render() {
      return (
        <div className="posicion1">

          <div className={this.state.fondo}>    
           
            <button className="afuera color11" onClick={this.manejarCambio} >
              <img className="AsistenteV" src="https://i.pinimg.com/originals/02/9f/b2/029fb284000fd5bdad2629f7a37c3595.gif"  />Hola! Soy tú asistente 
            </button>
            <br></br>
            
            <br></br>

            
          </div>
        </div>
      );
    
  }

  manejarCambio() {  
    
    this.setState({ 
      fondo: "normal1" 
    });
  }

   manejarCambio1() {  
    
    this.setState({ 
      fondo: "Fondoc" 
    });
  }

  



  
}
export default Asistente;