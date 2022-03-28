import React from 'react';
import Constantes from "./Constantes";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';


class UsuarioCreacionExposiciones extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datos: {
                "user": "",
                "password": "",
            },
        };
        // Indicarle a las funciones a quién nos referimos con "this"
        this.manejarCambio = this.manejarCambio.bind(this);
        this.manejarEnvioDeFormulario = this.manejarEnvioDeFormulario.bind(this);
    }
    render() {
        return (
            <div className="column is-one-third">
                <h1 className="is-size-3">Iniciar Sesion</h1>
                <ToastContainer></ToastContainer>
                <form className="field" onSubmit={this.manejarEnvioDeFormulario}>
                    <div className="form-group">
                        <label className="label" htmlFor="user">user:</label>
                        <input autoFocus required placeholder="user" type="text" id="user" onChange={this.manejarCambio} value={this.state.datos.user} className="input" />
                    </div>
                    <div className="form-group">
                        <label className="label" htmlFor="password">password:</label>
                        <input required placeholder="password" type="text" id="password" onChange={this.manejarCambio} value={this.state.datos.password} className="input" />
                    </div>
                    
                    <div className="form-group">
                        <button className="button is-success mt-2">Guardar</button>
                        &nbsp;
                        <Link to="/datoss/ver" className="button is-primary mt-2">Volver</Link>
                    </div>
                </form>
            </div>
        );
    }
    async manejarEnvioDeFormulario(evento) {

        evento.preventDefault();
        // Codificar nuestro datos como JSON

        const cargaUtil = JSON.stringify(this.state.datos);
        // ¡Y enviarlo!
        console.log("aqui estas los datos de login");
        console.log(cargaUtil);
        const respuesta = await fetch(`${Constantes.RUTA_API}/guardar_datos.php`, {
            method: "POST",
            body: cargaUtil,
        });
        const exitoso = await respuesta.json();
        if (exitoso) {
            toast('datos guardado 🎮', {
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
                    user: "",
                    password: "",
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
            const datosActualizado = state.datos;
            // Si es la calificación o el user, necesitamos castearlo a entero
            //if (clave !== "nombre") {
            //    valor = parseFloat(valor);
            //}
            // Actualizamos el valor del datos, solo en el campo que se haya cambiado
            datosActualizado[clave] = valor;
            return {
                datos: datosActualizado,
            }
        });
    }
}

export default UsuarioCreacionExposiciones;