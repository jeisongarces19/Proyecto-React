import React from 'react';
import Constantes from "../Constantes";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Link } from 'react-router-dom';
import '../App.css';
import '../Styles/pregunta.css';




class TodoList extends React.Component {
  render() {
    return (
        <div>
          <ul>
            {this.props.items.map(item => (
                <div className="figura" >
                    <li style={{background: '28abdbc7' }} key={item.id}>{item.text}</li>
                </div>    
            ))}
          </ul>
        </div>
    );
  }
}



class Pregunta extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dates: {
                "pregunta": "",
            },
            items: [], 
            text: '',
        };
        // Indicarle a las funciones a quién nos referimos con "this"
        
        this.manejarCambio = this.manejarCambio.bind(this);
        this.manejarEnvioDeFormulario = this.manejarEnvioDeFormulario.bind(this);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    render() {
        return (

            

            <div className="columns central">

              <div className="column"></div>


                <div className="column" >
                  <br></br>
                  <br></br>
                  <br></br>

                  <div className="cardPregunta">
                    <center>


                      <h1 className="preguntaletra">🧐 REALIZA TU PREGUNTA ❓ </h1>                

                      <ToastContainer></ToastContainer>
                      <TodoList items={this.state.items} />
                      
                      <form className="fToastContainerield" onSubmit={this.manejarEnvioDeFormulario,this.handleSubmit}>


                          <div className="form-group">                                
                            <input autoFocus required placeholder=" Que es Meca? " type="text" id="pregunta" className="FondoInput" onChange={this.manejarCambio,this.handleChange} value={this.state.dates.user,this.state.text}>
                              
                            </input>
                          </div>                         
                      

                        
                          <div className="form-group">
                              <button className="button is-success mt-2" >
                              Enviar
                              </button>                     
                          </div>
                      </form>

                    </center>
                  </div>
                </div>
                
                <div className="column"></div>

            </div>
            
        );
    }

    async manejarEnvioDeFormulario(evento) {

        evento.preventDefault();       
        const cargaUtil = JSON.stringify(this.state.dates);

        console.log("aqui esta lo que envio");
        console.log(cargaUtil);
      
        const respuesta = await fetch(`${Constantes.RUTA_API}/Guardar_user`, 
        {
            method: "POST",            
            body: cargaUtil,
        });
        
        

        const exitoso = await respuesta.json();

        if (exitoso) {
            
            this.setState({
                dates: {
                    pregunta: "",
                }
            });
        } else {
            toast.error("Error guardando. Intenta de nuevo");
        }
    }

   


    manejarCambio(evento) {
        
    
        const clave = evento.target.id;
        let valor = evento.target.value;
        this.setState(state => {
            const datesActualizado = state.dates;
            
            datesActualizado[clave] = valor;
            return {
                dates: datesActualizado,
            }
        });
    }


    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.text.length === 0) {
          return;
        }
        const newItem = {
          text: this.state.text,
          id: Date.now()
        };
        this.setState(state => ({
          items: state.items.concat(newItem),
          text: ''
        }));
    }


    
}

export default Pregunta;