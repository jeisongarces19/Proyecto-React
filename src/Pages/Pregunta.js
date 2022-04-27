import React from 'react';
import Constantes from "../Constantes";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Link } from 'react-router-dom';
import '../App.css';
import '../Styles/pregunta.css';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dates: {
                "pregunta": "",
            },
        };
        // Indicarle a las funciones a quién nos referimos con "this"
        
        this.manejarCambio = this.manejarCambio.bind(this);
        this.manejarEnvioDeFormulario = this.manejarEnvioDeFormulario.bind(this);
    }
    render() {
        return (

            

            <div className="columns central">

              <div className="column"></div>

                <div className="column" >

                  <div className="cardPregunta">
                    <center>

                      <h1 className="title">🧐 Hazme Una Pregunta ❓ </h1>                

                      <ToastContainer></ToastContainer>

                      
                      <form className="fToastContainerield" onSubmit={this.manejarEnvioDeFormulario}>


                          <div className="form-group">                                
                            <input autoFocus required placeholder=" Pregunta ❓ " type="text" id="pregunta" className="FondoInput" onChange={this.manejarCambio} value={this.state.dates.user} >
                              
                            </input>
                          </div>                         
                      

                        
                          <div className="form-group">
                              <button className="button is-success mt-2">
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
            toast('Usuario guardado 🎮', {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
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
            // Si es la calificación o el nombre, necesitamos castearlo a entero
            //if (clave !== "nombre") {
            //    valor = parseFloat(valor);
            //}
            // Actualizamos el valor del dates, solo en el campo que se haya cambiado
            datesActualizado[clave] = valor;
            return {
                dates: datesActualizado,
            }
        });
    }
    
}

export default Login;