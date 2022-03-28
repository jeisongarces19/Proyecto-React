import React from 'react';
import Constantes from "./Constantes";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

class Registrarse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datos: {
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
            <div className="column is-one-third">
                <h1 className="is-size-3">Registrarse</h1>
                <ToastContainer></ToastContainer>
                <form className="fToastContainerield" onSubmit={this.manejarEnvioDeFormulario}>

                    <div className="form-group">
                        <label className="label" htmlFor="nombres">nombres:</label>
                        <input autoFocus required placeholder="nombres" type="text" id="nombres" onChange={this.manejarCambio} value={this.state.datos.nombres} className="input"  />
                    </div>

                    <div className="form-group">
                        <label className="label" htmlFor="primerAprellido">primerAprellido:</label>
                        <input required placeholder="primerAprellido" type="text" id="primerAprellido" onChange={this.manejarCambio} value={this.state.datos.primerAprellido} className="input" />
                    </div>

                    <div className="form-group">
                        <label className="label" htmlFor="segundoApellido">segundoApellido:</label>
                        <input autoFocus required placeholder="segundoApellido" type="text" id="segundoApellido" onChange={this.manejarCambio} value={this.state.datos.segundoApellido} className="input" />
                    </div>

                    <div className="form-group">
                        <label className="label" htmlFor="fechaNacimiento">fechaNacimiento:</label>
                        <input autoFocus required placeholder="fechaNacimiento" type="date" id="fechaNacimiento" onChange={this.manejarCambio} value={this.state.datos.fechaNacimiento} className="input" />                       
                    </div>

                    <div className="form-group">
                        <label className="label" htmlFor="correo">correo:</label>
                        <input autoFocus required placeholder="correo" type="text" id="correo" onChange={this.manejarCambio} value={this.state.datos.correo} className="input" />                        
                    </div>

                    <div className="form-group">
                        <label className="label" htmlFor="pass">pass:</label>
                        <input required placeholder="pass" type="text" id="pass" onChange={this.manejarCambio} value={this.state.datos.pass} className="input" />
                    </div>

                    <div className="form-group">
                        <label className="label" htmlFor="ubicacion">ubicacion:</label>
                        <input required placeholder="ubicacion" type="text" id="ubicacion" onChange={this.manejarCambio} value={this.state.datos.ubicacion}  className="input" />
                    </div>

                    <div className="form-group">
                        <label className="label" htmlFor="clave">descripcion:</label>
                        <input required placeholder="descripcion" type="text" id="descripcion" onChange={this.manejarCambio} value={this.state.datos.descripcion} className="input" />
                    </div>


                    
                    <div className="form-group">
                        <button className="button is-success mt-2">
                        Registrarse
                        </button>

                        &nbsp;
                        <Link to="/datoss/Login" className="button is-primary mt-2">iniciarSesion</Link>
                    </div>

                    


                </form>
            </div>
        );
    }
    async manejarEnvioDeFormulario(evento) {

        evento.preventDefault();
       
        const cargaUtil = JSON.stringify(this.state.datos);
        console.log("aqui estas los datos de login");
        console.log(cargaUtil);
   

        const respuesta = await fetch(`${Constantes.RUTA_API}/Guardar_user.php`, 
        {
            method: "POST",            
            body: cargaUtil,
        });

        //headers: { 'Content-Type': 'application/json' },

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
                datos: {
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
        // Extraer la clave del estado que se va a actualizar, así como el valor
        const clave = evento.target.id;
        let valor = evento.target.value;
        this.setState(state => {
            const videojuegoActualizado = state.datos;
            // Si es la calificación o el nombres, necesitamos castearlo a entero
            //if (clave !== "nombre") {
            //    valor = parseFloat(valor);
            //}
            // Actualizamos el valor del datos, solo en el campo que se haya cambiado
            videojuegoActualizado[clave] = valor;
            return {
                datos: videojuegoActualizado,
            }
        });
    }
    
}

export default Registrarse;