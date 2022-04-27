import React from 'react';
import Constantes from "../Constantes";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../App.css';
import { Link } from 'react-router-dom';

class Registrarse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                "nombres": "",
                "primerAprellido": "",
                "segundoApellido": "",
                "fechaNacimiento": "",
                "correo": "",
                "pass": "",
                "ubicacion": "",
                "descripcion": "",
            },
        };
        // Indicarle a las funciones a quién nos referimos con "this"
        this.manejarCambio = this.manejarCambio.bind(this);
        this.manejarEnvioDeFormulario = this.manejarEnvioDeFormulario.bind(this);
    }
    render() {
        return (

            <div className="columns">
                <div className="column"></div>

                <div className="column" >

                    <div className="card2">
                        <center>

                        <h1 className="is-size-1 colorletra">Registrarse</h1>                

                        <ToastContainer></ToastContainer>

                      
                        <form className="fToastContainerield" onSubmit={this.manejarEnvioDeFormulario}>

                            <div className="form-group">
                                <input autoFocus required placeholder="🆎 Nombres" type="text" id="nombres" className="FondoInput"  onChange={this.manejarCambio} value={this.state.data.nombres} >
                                </input>
                            </div>

                            <div className="form-group">
                                <input required placeholder="🅰️ Primer Aprellido" type="text" id="primerAprellido" className="FondoInput"  onChange={this.manejarCambio} value={this.state.data.primerAprellido} >
                                </input>
                            </div>

                            <div className="form-group">
                                <input autoFocus required placeholder="🅱️ Segundo Apellido" type="text" id="segundoApellido"className="FondoInput"  onChange={this.manejarCambio} value={this.state.data.segundoApellido} >
                                </input>
                            </div>                            
                                   
                            <div className="form-group">
                                <input autoFocus required placeholder="✉️ Email" type="text" id="correo" className="FondoInput"  onChange={this.manejarCambio} value={this.state.data.correo} >
                                </input>                       
                            </div>

                            <div className="form-group">
                                <input required placeholder="🔑 Password" type="text" id="pass" className="FondoInput"  onChange={this.manejarCambio} value={this.state.data.pass}>
                                </input>
                            </div>

                            <div className="form-group">
                                <input required placeholder="📌 Ubicacion" type="text" id="ubicacion" className="FondoInput"  onChange={this.manejarCambio} value={this.state.data.ubicacion} >
                                </input>
                            </div>

                            <div className="form-group">
                                <input required placeholder="☕ Descripcion Personal" type="text" id="descripcion" className="FondoInput"  onChange={this.manejarCambio} value={this.state.data.descripcion}>
                                </input>
                            </div>  

                            <div className="form-group">
                                <input autoFocus required placeholder="📅 Fecha de Nacimiento" type="date" id="fechaNacimiento" className="FondoInput"  onChange={this.manejarCambio} value={this.state.data.fechaNacimiento}  >
                                </input>
                            </div> 

                            <div className="form-group">
                                <button className="button is-primary mt-2">
                                    Registrarse
                                </button>

                                
                            </div>                    
                        
                        </form>
                        </center>
                    </div>
                </div>

                <div className="column"></div>

            </div>
            //Para comentar

        );
    }
    async manejarEnvioDeFormulario(evento) {

        evento.preventDefault();
       
        const cargaUtil = JSON.stringify(this.state.data);

        
        console.log("aqui estas los data de login");
        console.log(cargaUtil);
   

        const respuesta = await fetch(`${Constantes.RUTA_API}/Guardar_user.php`, 
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
                data: {
                    nombres: "",
                    primerAprellido: "",
                    segundoAprellido: "",
                    fechaNacimiento: "",
                    correo: "",
                    pass: "",
                    ubicacion: "",
                    descripcion: "",
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
            const videojuegoActualizado = state.data;
            // Si es la calificación o el nombres, necesitamos castearlo a entero
            //if (clave !== "nombre") {
            //    valor = parseFloat(valor);
            //}
            // Actualizamos el valor del data, solo en el campo que se haya cambiado
            videojuegoActualizado[clave] = valor;
            return {
                data: videojuegoActualizado,
            }
        });
    }
    
}

export default Registrarse;