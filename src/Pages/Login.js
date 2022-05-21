
import Constantes from "../Constantes";

import '../App.css';
import '../Styles/login.css';
import swal from 'sweetalert';

import React from 'react';

import Cookies from 'universal-cookie';

const cookies = new Cookies();



class Login extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            data: {
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
                      
                      <form className="" onSubmit={this.manejarEnvioDeFormulario}>

                          <div className="form-group">                                
                            <input autoFocus required placeholder="✉️ Email" type="text" id="email" className="FondoInput" onChange={this.manejarCambio} value={this.state.data.email} >
                              
                            </input>
                          </div>
                          
                          <div className="form-group">
                              <input required placeholder="🔑 Password" type="password" id="password" className="FondoInput" onChange={this.manejarCambio} value={this.state.data.password} >
                              </input>
                          </div>

                          <div className="form-group">
                            <label style={{color: 'black'}}> User <span> </span> 
                                <input type="checkbox" 
                                name="user" 
                                id="user" 
                                defaultChecked={!this.state.data.manager}
                                value={!this.state.data.manager}
                                ></input>
                                
                            </label>  
                            <span> </span>   


                            <label style={{color: 'black'}}> Manager 
                                <input type="checkbox"
                                    name="manager"
                                    id="manager"
                                    onChange={this.handleSwitchChange}
                                    value={this.state.data.manager} 
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
                                  value={this.state.data.name} 
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
                data: {
                    email: this.state.data.email,
                    password: this.state.data.password,
                    manager: event.target.checked,                    
                }
            })
            
        }else{
            this.setState({
                data: {
                    email: this.state.data.email,
                    password: this.state.data.password,
                    manager: event.target.checked,                   
                    
                }
            })
        }
    }

      
    async manejarEnvioDeFormulario(evento) {

        const continuar = () =>{
            swal({
              title: "Hola!",
              text: "Puedes comenzar con el recorrido",
              icon: "success",                        
            }).then(function() {
                window.location = "/MenuUsuario";
            });
        }

        const detener = () =>{
            swal({
              title: "Error",
              text: "Surgio un error al iniciar sesion",
              icon: "error",
              timer: 2000,
            });
        }

        
        evento.preventDefault();       

        const cargaUtil = JSON.stringify(this.state.data);
        console.log(cargaUtil);
      
        //const respuesta = 1;

        
        const respuesta = await fetch(`${Constantes.RUTA_API}/Users`);
        
        

        console.log("lo del respuesta",respuesta); 

        const exitoso = await respuesta.json();
        //const exitoso = 1;

        console.log("lo del exitoso",exitoso); 

        if (exitoso) {

            cookies.set('email', this.state.data.email, {path: "/"});
            cookies.set('manager', this.state.data.manager, {path: "/"});


            
            this.setState({
                data: {
                    email: "",
                    password: "",
                    manager: false,                   
                }
            });

            
           
            //alert(`Bienvenido ${this.state.data.email}`);
            
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

export default Login;
