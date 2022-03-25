import React from 'react';
import Constantes from "./Constantes";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

class AgregarVideojuego extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videojuego: {
                "nombre": "",
                "precio": "",
                "calificacion": "",
            },
        };
        // Indicarle a las funciones a quién nos referimos con "this"
        this.manejarCambio = this.manejarCambio.bind(this);
        this.manejarEnvioDeFormulario = this.manejarEnvioDeFormulario.bind(this);
    }
    render() {
        return (
            <div className="column is-one-third">
                <h1 className="is-size-3">Agregar videojuego</h1>
                <ToastContainer></ToastContainer>
                <form className="fToastContainerield" onSubmit={this.manejarEnvioDeFormulario}>
                    <div className="form-group">
                        <label className="label" htmlFor="nombre">Nombre:</label>
                        <input autoFocus required placeholder="Nombre" type="text" id="nombre" onChange={this.manejarCambio} value={this.state.videojuego.nombre} className="input" />
                        
                    </div>

                    <div className="form-group">
                        <label className="label" htmlFor="precio">Precio:</label>
                        <input required placeholder="Precio" type="number" id="precio" onChange={this.manejarCambio} value={this.state.videojuego.precio} className="input" />
                    </div>

                    <div className="form-group">
                        <label className="label" htmlFor="calificacion">Calificación:</label>
                        <input required placeholder="Calificación" type="number" id="calificacion" onChange={this.manejarCambio} value={this.state.videojuego.calificacion} className="input" />
                    </div>
                    
                    <div className="form-group">
                        <button className="button is-success mt-2">
                        Guardar Video juego
                        </button>

                        &nbsp;
                        <Link to="/videojuegos/Login" className="button is-primary mt-2">Login</Link>

                    </div>

                    



                </form>
            </div>
        );
    }
    async manejarEnvioDeFormulario(evento) {

        evento.preventDefault();
        // Codificar nuestro videojuego como JSON 
        // console.log(cargaUtil);
        // ¡Y enviarlo!

        const cargaUtil = JSON.stringify(this.state.videojuego);
        

        const respuesta = await fetch(`${Constantes.RUTA_API}/guardar_videojuego.php`, 
        {
            method: "POST",            
            body: cargaUtil,
        });

        //headers: { 'Content-Type': 'application/json' },

        const exitoso = await respuesta.json();

        if (exitoso) {
            toast('Videojuego guardado 🎮', {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            this.setState({
                videojuego: {
                    nombre: "",
                    precio: "",
                    calificacion: "",
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
            const videojuegoActualizado = state.videojuego;
            // Si es la calificación o el nombre, necesitamos castearlo a entero
            if (clave !== "nombre") {
                valor = parseFloat(valor);
            }
            // Actualizamos el valor del videojuego, solo en el campo que se haya cambiado
            videojuegoActualizado[clave] = valor;
            return {
                videojuego: videojuegoActualizado,
            }
        });
    }
}

export default AgregarVideojuego;