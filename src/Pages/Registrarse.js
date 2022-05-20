import React from 'react';
//import Constantes from "../Constantes";
import swal from 'sweetalert';

import '../App.css';

class Registrarse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                "nombres": "",
                "primerAprellido": "",
                "segundoApellido": "",                
                "correo": "",
                "pass": "",
                "ubicacion": "",
                "foto":"",
                "descripcion": "",
                "fecha": "",
                
            },
        };
        // Indicarle a las funciones a quién nos referimos con "this"
        this.manejarEnvioDeFormulario = this.manejarEnvioDeFormulario.bind(this);
        this.manejarCambio = this.manejarCambio.bind(this);
    }
    render() {
        return (

            <div className="columns central">
                <div className="column"></div>

                <div className="column" >

                    <div className="card2">
                        <center>

                        <h1 className="is-size-1 colorletra">Registrarse</h1>                
                      
                        <form className="" onSubmit={this.manejarEnvioDeFormulario}>

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
                                <input required placeholder="📷 Foto (Url)" type="text" id="foto" className="FondoInput"  onChange={this.manejarCambio} value={this.state.data.foto} >
                                </input>
                            </div>
                  
                            <div className="form-group">
                                <textarea placeholder="☕ Descripcion Personal" className="FondoInput" id="descripcion"  onChange={this.manejarCambio} value={this.state.data.descripcion}></textarea>
                            </div>                            

                            <div className="form-group">
                                <input autoFocus required placeholder="📅 Fecha de Nacimiento" type="date" id="fecha" className="FondoInput"  onChange={this.manejarCambio} value={this.state.data.fechaNacimiento}  >
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

        );
    }


    async manejarEnvioDeFormulario(evento) {

        const continuar = () =>{
            swal({
              title: "Registro",
              text: "Tu usuario ha sido creado",
              icon: "success",              
            });
        }

        const detener = () =>{
            swal({
              title: "Error",
              text: "Surgio un error al crear el usuario",
              icon: "error",
              dangerMode: true,
            })
            .then(willDelete => {
              if (willDelete) {
                swal("Volver a intentar!");
              }
            });
        }

        evento.preventDefault();
       
        const cargaUtil = JSON.stringify(this.state.data);
        console.log(cargaUtil);   

        /*
        const respuesta = await fetch(`${Constantes.RUTA_API}/Guardar_user`, 
        {
            method: "POST",            
            body: cargaUtil,
        });
        */        

        /*console.log("lo del respuesta",respuesta); 

        const exitoso = await respuesta.json();*/
        const exitoso = 1;

        console.log("lo del exitoso",exitoso); 


        if (exitoso) {
            continuar();           

            this.setState({
                data: {
                    "nombres": "",
                    "primerAprellido": "",
                    "segundoApellido": "",                
                    "correo": "",
                    "pass": "",
                    "ubicacion": "",
                    "foto":"",
                    "descripcion": "",
                    "fecha": "",
                }
            });
        } else {        
            detener();
        }
    }

    manejarCambio(evento) {
        const clave = evento.target.id;
        let valor = evento.target.value;
        this.setState(state => {
            const dataActualizado = state.data;            
            dataActualizado[clave] = valor;
            return {
                data: dataActualizado,
            }
        });
    }


    
        
}

export default Registrarse;