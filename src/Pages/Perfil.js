import React from 'react';
import Constantes from "../Constantes";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../App.css';
import '../Styles/perfil.css';

class Perfil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                "name":"Jeison Fernando" ,
                "last_name_1": "Garces ",
                "last_name_2": "Castañeda",                
                "email": "garcesjeison17@gmail.com",
                "password_hash": "*********",                  
                "born_date": "1997-10-05",   
                "describe": "Ingeniero de Sistemas de la PUJ",           
                "picture":"",
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

                    <div className="cardPerfil">
                        <center>

                                    

                    
                        <div className="photo-container">
                            <img alt="..." src=" ">
                            </img>
                        </div>

                        <h1 className="title">Perfil</h1>    
             

                        <ToastContainer></ToastContainer>

                      
                        <form className="" onSubmit={this.manejarEnvioDeFormulario}>

                            <div className="form-group">
                                <input autoFocus required placeholder="🆎 Nombre ✔" type="text" id="name" className="FondoInput"  onChange={this.manejarCambio} value={this.state.data.name} >
                                </input> 
                            </div>

                            <div className="form-group">
                                <input required placeholder="🅰️ Primer Aprellido" type="text" id="last_name_1" className="FondoInput"  onChange={this.manejarCambio} value={this.state.data.last_name_1} >
                                </input>
                            </div>

                            <div className="form-group">
                                <input autoFocus required placeholder="🅱️ Segundo Apellido" type="text" id="last_name_2"className="FondoInput"  onChange={this.manejarCambio} value={this.state.data.last_name_2} >
                                </input>
                            </div>                            
                                   
                            <div className="form-group">
                                <input autoFocus required placeholder="✉️ Email ✔" type="text" id="email" className="FondoInput"  onChange={this.manejarCambio} value={this.state.data.email} >
                                </input>                      
                            </div>

                            <div className="form-group">
                                <input required placeholder="🔑 Contraseña ✔" type="password" id="password_hash" className="FondoInput"  onChange={this.manejarCambio} value={this.state.data.password_hash}>
                                </input> 
                            </div>

                        
                            <div className="form-group">
                                <input required placeholder="📷 Foto (Url)" type="text" id="picture" className="FondoInput"  onChange={this.manejarCambio} value={this.state.data.picture} >
                                </input>
                            </div>
                  
                            <div className="form-group">
                                <textarea placeholder="☕ Descripcion Personal" className="FondoInput" id="describe"  onChange={this.manejarCambio} value={this.state.data.describe}></textarea>
                            </div>                            

                            <div className="form-group">
                                <input autoFocus required placeholder="📅 Fecha de Nacimiento" type="datetime-local" id="born_date" className="FondoInput"  onChange={this.manejarCambio} value={this.state.data.born_date}  >
                                </input>
                            </div> 

                            <div className="form-group">
                                <button className="button is-primary mt-2">
                                    Actualizar Información
                                </button>

                                
                            </div>    

                            
                        </form>
                        </center>
                    </div>
                </div>

                <div className="column">  </div>

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
                    name: "",
                    last_name_1: "",
                    last_name_2: "",                
                    email: "",
                    password_hash: "",                  
                    born_date: "",   
                    describe: "",           
                    picture:"",
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

export default Perfil;