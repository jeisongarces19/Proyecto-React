import React from 'react';
import Constantes from "./Constantes";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dates: {
                "email": "",
                "password": "",
            },
        };
        // Indicarle a las funciones a quién nos referimos con "this"
        
        this.manejarCambio = this.manejarCambio.bind(this);
        this.manejarEnvioDeFormulario = this.manejarEnvioDeFormulario.bind(this);
    }
    render() {
        return (


            <div className="columns">



                <div className="column ">
                    Aqui va ir el asistente virtual
                                       
                    
                </div>


                <div className="column is-half is-offset-one-quarter" >

                    <h1 className="is-size-1">Iniciar Sesion</h1>                

                    <ToastContainer></ToastContainer>
                    <form className="fToastContainerield" onSubmit={this.manejarEnvioDeFormulario}>
                        <div className="form-group">
                            <label className="label" htmlFor="email">email:</label>
                            <input autoFocus required placeholder="email" type="text" id="email" className="input" onChange={this.manejarCambio} value={this.state.dates.user}  />
                        </div>

                        <div className="form-group">
                            <label className="label" htmlFor="password">password:</label>
                            <input required placeholder="password" type="text" id="password" onChange={this.manejarCambio} value={this.state.dates.password} className="input" />
                        </div>
                    

                        
                        <div className="form-group">
                            <button className="button is-success mt-2">
                            Iniciar Sesion
                            </button>

                            &nbsp;
                            <Link to="/MECA/Registrarse" className="button is-primary mt-2">Registrarse</Link>
                        </div>
                    </form>

                </div>


            </div>
        );
    }
    async manejarEnvioDeFormulario(evento) {

        evento.preventDefault();       
        const cargaUtil = JSON.stringify(this.state.dates);

        console.log("aqui esta lo que envio");
        console.log(cargaUtil);
      
        const respuesta = await fetch(`${Constantes.RUTA_API}/Users`, 
        {
            method: "POST",            
            body: cargaUtil,
        });
        console.log("aqui esta la respuesta");
        console.log(respuesta);

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
                dates: {
                    email: "",
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