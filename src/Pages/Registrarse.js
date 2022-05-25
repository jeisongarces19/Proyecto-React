import React from 'react';
//import Constantes from "../Constantes";
import swal from 'sweetalert';

import '../App.css';
import '../Styles/registrarse.css';

class Registrarse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                "name": "" ,
                "last_name_1": "",
                "last_name_2": "",                
                "email": "",
                "password_hash": "",                  
                "born_date": "",   
                "describe": "",           
                "picture":"",
                
                
                
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

                        <h1 className="registerletra">REGISTRARSE</h1>                
                      
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
                                    Registrarse
                                </button>

                                
                            </div>    

                            <p className="colorblanco"> Campos obligatorios (✔)</p>                
                        
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
            }).then(function() {
                window.location = "/Login";
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

        var respuesta = await fetch(`https://proyecto-meca-cali.herokuapp.com/CrearUsuario`, 
        {
            method: "POST",            
            body: cargaUtil,   
        });

        console.log("respuesta de todo",respuesta) 


       
        var statusr=respuesta.status;     

        if (statusr===201) {
           
            this.setState({
                data: {
                    "name": "",
                    "last_name_1": "",
                    "last_name_2": "",                
                    "email": "",
                    "password_hash": "",                  
                    "born_date": "",   
                    "describe": "",           
                    "picture":"",
                }
            });

            continuar(); 

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