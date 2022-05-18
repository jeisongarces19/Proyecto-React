
//import Constantes from "../Constantes";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';
import '../Styles/login.css';


import React, {useState} from 'react';


class Login extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            dates: {
                "email": "",
                "password": "",
                "manager" : false,
                "user" : true,
            },
        };
        // Indicarle a las funciones a quién nos referimos con "this"
        
        this.manejarCambio = this.manejarCambio.bind(this);
        this.manejarEnvioDeFormulario = this.manejarEnvioDeFormulario.bind(this);
        this.handleSwitchChange = this.handleSwitchChange.bind(this);


    }


    render() {
        return (

            

            <div className="columns central">

              <div className="column"></div>

                <div className="column" >

                  <div className="card2">
                    <center>

                      <h1 className="is-size-1 colorletra">Iniciar Sesion</h1>                

                      <ToastContainer></ToastContainer>

                      
                      <form className="fToastContainerield" onSubmit={this.manejarEnvioDeFormulario}>


                          <div className="form-group">                                
                            <input autoFocus required placeholder="✉️ Email" type="text" id="email" className="FondoInput" onChange={this.manejarCambio} value={this.state.dates.email} >
                              
                            </input>
                          </div>
                          

                          <div className="form-group">
                              <input required placeholder="🔑 Password" type="password" id="password" className="FondoInput" onChange={this.manejarCambio} value={this.state.dates.password} >
                              </input>
                          </div>

                          <div className="form-group">
                            <label style={{color: 'black'}}> User <span> </span> 
                                <input type="checkbox" 
                                name="user" 
                                id="user" 
                                defaultChecked={this.state.dates.user}
                                value={this.state.dates.user}

                                 ></input>
                                
                            </label>  
                            <span> </span>   


                            <label style={{color: 'black'}}> Manager 
                                <input type="checkbox"
                                    name="manager"
                                    id="manager"
                                    onChange={this.handleSwitchChange}
                                    value={this.state.dates.manager} 
                                />                                
                            </label> 



                          </div>
                          
                          
                          {/*  

                          <label>
                                <input
                                  type="radio"
                                  id="name"
                                  checked={this.state.selectedOption === "Male"}
                                  onChange={this.onValueChange}
                                  value={this.state.dates.name} 
                                />
                                Male
                            </label>


                            <div>
                            
                            <select id="blend-top" className="FondoInput" >
                              <option selected>User</option>
                              <option>manager</option>                             
                            </select>
                          </div>*/}
                      

                        
                          <div className="form-group">
                              <button className="button is-success mt-2">
                              Iniciar sesion
                              </button>

                            &nbsp;
                            <a href="/Registrarse" className="button is-primary mt-2">Registrarse</a>


                          </div>
                       

                      </form>

                      <a className="Recuperacion" href="http://#">Deseas recuperar tu clave?</a>

                    </center>
                  </div>
                </div>
                
                <div className="column" >
                   
                </div>

            </div>
            
        );
    }


    async handleSwitchChange(event){
        if(event.target.checked === false){
            this.setState({
                dates: {
                    email: this.state.dates.email,
                    password: this.state.dates.password,
                    manager: event.target.checked,
                    user: !this.state.dates.user,
                }
            })
            
        }else{
            this.setState({
                dates: {
                    email: this.state.dates.email,
                    password: this.state.dates.password,
                    manager: event.target.checked,
                    user: !this.state.dates.user,
                    
                }
            })
        }
    }

      
    

    async manejarEnvioDeFormulario(evento) {


        
        evento.preventDefault();       

        const cargaUtil = JSON.stringify(this.state.dates);
        console.log(cargaUtil);
      
        const respuesta = 1;

        /*
        const respuesta = await fetch(`${Constantes.RUTA_API}/Guardar_user`, 
        {
            method: "POST",            
            body: cargaUtil,
        });
        */
        

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
                    manager: false,
                    user: true,
                    
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