import React from 'react';
import Constantes from "./Constantes";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

//import "bootstrap/dist/css/bootstrap.min.css";
//para que se muestre las letras recorriendo
import Typical from 'react-typical';
//para poder pedir fechas
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



class PaginaElementos extends React.Component {


    constructor(props) {
        super(props);
        this.state = {

            state2: {
              fecha2: new Date("2018", "06", "22")
            },

            videojuego: {
                "users": "",
                "fecha": "",
            },
        };
        // Indicarle a las funciones a quién nos referimos con "this"
        this.manejarCambio = this.manejarCambio.bind(this);
        this.manejarEnvioDeFormulario = this.manejarEnvioDeFormulario.bind(this);
    }
    render() {
        return (

            <div className="column is-one-third">
                <h1 className="is-size-3">Pagina de los diferentes Elementos de React que me gusta</h1>

                <span className='primary-text'>
                    {" "}
                    <h1>
                        {" "}
                        <Typical loop={Infinity}
                            steps ={[                                
                                 "Jeison a...",
                                 1800,
                                 "Otro...",
                                 1800
                                ]}>
                        </Typical>
                    </h1>
                    
                </span>
                

                <ToastContainer></ToastContainer>
                <form className="fToastContainerield" onSubmit={this.manejarEnvioDeFormulario}>
                    <div className="form-group">
                        <label className="label" htmlFor="users">users:</label>
                        <input autoFocus required placeholder="users" type="text" id="users" onChange={this.manejarCambio} value={this.state.videojuego.users} className="input" />
                        

                        <label className="label" htmlFor="fecha">fecha:</label>
                        <DatePicker selected={this.state.state2.fecha2} onChange={this.onChange2}/>

                        <input type="button" value="Mostrar Fecha2" className="btn btn-primary" onClick={()=>this.mostrarFecha(this.state.state2.fecha2)}/>

                        {/*<DatePicker id="fecha2" selected={this.state.videojuego.fecha2} onChange={this.manejarCambio} value={this.state.videojuego.fecha2}/>
                        
                       
                    <input type="text" id="fecha" onChange={this.manejarCambio} value={this.state.videojuego.fecha} />
                       

                    */}
                    </div>

                    
                    <div className="form-group">
                        <button className="button is-success mt-2">
                        Iniciar Sesion
                        </button>

                        &nbsp;
                        <Link to="/videojuegos/Registrarse" className="button is-primary mt-2">Registrarse</Link>
                    </div>

                    


                </form>
            </div>
        );
    }
    async manejarEnvioDeFormulario(evento) {

        evento.preventDefault();
       
        const cargaUtil = JSON.stringify(this.state.videojuego);
        const cargaUtil2 = JSON.stringify(this.state.state2);
        
        console.log("aqui estas los datos");
        console.log(cargaUtil);
        console.log(cargaUtil2);
   
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
                state2: {
                  fecha2: new Date("2018", "06", "22"),
                },

                videojuego: {
                    users: "",
                    fecha: "",
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
            // Si es la calificación o el users, necesitamos castearlo a entero
            //if (clave !== "nombre") {
            //    valor = parseFloat(valor);
            //}
            // Actualizamos el valor del videojuego, solo en el campo que se haya cambiado
            videojuegoActualizado[clave] = valor;


            return {
                videojuego: videojuegoActualizado,
                
            }
        });

        


    }

    onChange2=fecha2=>{
      this.setState({fecha2: fecha2});
    }

    

    
    mostrarFecha = fecha2=>{
      alert(fecha2);
    }
    
}

export default PaginaElementos;