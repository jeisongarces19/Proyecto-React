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
                "nombres": "Jeison Fernando",
                "primerAprellido": "Garces ",
                "segundoApellido": "Castañeda",
                "fechaNacimiento": "1997-10-05",
                "correo": "garcesjeison17@gmail.com",
                "pass": "*********",
                "ubicacion": "Cali,Colombia",
                "descripcion": "Ingeniero de Sistemas de la PUJ",
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
                            <img alt="..." src="https://scontent.fclo8-1.fna.fbcdn.net/v/t1.6435-9/96763841_2560962134004181_6427503684715806720_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_eui2=AeH3cpBhmPB-hqAaoYFwMxZl0F4KPX8zzBvQXgo9fzPMG9JvJhrlLApTCsCh5sT0YRg2lzYIIr817q1iLfdK6o4W&_nc_ohc=NF6WcE8xaj8AX_UmsOK&_nc_ht=scontent.fclo8-1.fna&oh=00_AT8hhlsjaFUZG9E0nLQKiEpUCRHe4SVqkCB9QPAJZcr5DA&oe=629717C5">
                            </img>
                        </div>

                        <h1 className="title">Perfil</h1>    
             

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
                                    Actualizar informacion
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

export default Perfil;