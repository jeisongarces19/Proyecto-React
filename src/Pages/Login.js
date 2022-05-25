
//import Constantes from "../Constantes";
//import axios from 'axios';
//import cors from 'cors';

import '../App.css';
import '../Styles/login.css';
import swal from 'sweetalert';

import React from 'react';

//import Cookies from 'universal-cookie';
//const cookies = new Cookies();

/*
var invocation = new XMLHttpRequest();


var url = 'https://proyecto-meca-cali.herokuapp.com/Login';


function callOtherDomain() {

  if(invocation) {
    invocation.open('POST', url, true);
    //invocation.onreadystatechange = handler;
    invocation.send();
  }
}
*/


class Login extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            data: {
                "email": "",
                "password_hash": "",
                //"manager" : false,               
            },
        };
        // Indicarle a las funciones a quién nos referimos con "this"
        
        this.manejarCambio = this.manejarCambio.bind(this);
        this.manejarEnvioDeFormulario = this.manejarEnvioDeFormulario.bind(this);
        //this.handleSwitchChange = this.handleSwitchChange.bind(this);


    }


    render() {
        return (

            <div className="columns central">

              <div className="column"></div>

                <div className="column" >

                  <div className="card2">
                    <center>

                      <h1 className="loginletra">INICIAR SESIÓN</h1>              
                      
                      <form className="" onSubmit={this.manejarEnvioDeFormulario}>

                          <div className="form-group">                                
                            <input autoFocus required placeholder="✉️ Email" type="text" id="email" className="FondoInput" onChange={this.manejarCambio} value={this.state.data.email} >
                              
                            </input>
                          </div>
                          
                          <div className="form-group">
                              <input required placeholder="🔑 password" type="password" id="password_hash" className="FondoInput" onChange={this.manejarCambio} value={this.state.data.password_hash} >
                              </input>
                          </div>

                          
                           {/*  <div className="form-group">
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

    /*async handleSwitchChange(event){

        if(event.target.checked === false){
            this.setState({
                data: {
                    email: this.state.data.email,
                    password_hash: this.state.data.password_hash,
                    manager: event.target.checked,                    
                }
            })
            
        }else{
            this.setState({
                data: {
                    email: this.state.data.email,
                    password_hash: this.state.data.password_hash,
                    manager: event.target.checked,                   
                    
                }
            })
        }
    }
    */

      
    async manejarEnvioDeFormulario(evento) {

        evento.preventDefault();  
        //callOtherDomain();
        


        const continuar = () =>{
            swal({
              title: "Hola!",
              text: "Puedes comenzar con el recorrido",
              icon: "success",                        
            }).then(function() {
                if (existe.admin===1) {                    
                    window.location = "/MenuAdministrativo";
                }else{
                    window.location = "/MenuUsuario";
                }

                
            });
        }

        const detener = () =>{
            swal({
              title: "Error",
              text: "Surgio un error al iniciar sesion",
              icon: "error",
              timer: 5000,
            });
        }
    
        /*

        componentDidMount(){
            const Url_Base = ConfigData.BASE_URL
            const resource = ConfigData.PAPERS_SOURCE
            axios.get(Url_Base+resource)
            .then( response => {
              var a = this.createStructure(response.data.results.bindings)
              var b  = this.yearPublication(a)
              this.setState({resultGeneral :  a })
              this.setState({yearLine : b })
              this.Autors(response.data.results.bindings)
            })
        }

        */

        

        const cargaUtil = JSON.stringify(this.state.data);
        console.log(cargaUtil);


        /*
        var GuardarUser;

        //const respuesta= 
        await axios({
          method: "POST",
          url:"https://proyecto-meca-cali.herokuapp.com/Login",
          headers: {
            'Content-Type' : 'application/json',
            'accept': 'application/json',
            'Access-Control-Allow-Origin' : 'POST',
            'Access-Control-Allow-Methods':'POST',
          }
        },{"email":"santiflo17@gmail.com","password_hash":"hola1234"}).then((response) => {          
          console.log("respuesta",response)
          GuardarUser= response.data;   
           console.log("Datos",GuardarUser)
        }).catch((error) => {
          if (error.response) {
            console.log("error respuesta",error.response)
            console.log("status",error.response.status)
            console.log(error.response.headers)
            }
        });
        */
        

        /*

        await axios({
          method: "GET",
          url:"https://proyecto-meca-cali.herokuapp.com/Login",
          headers: {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          }
        }).then((response) => {
          const res =response  
          console.log("respuesta1",res)    
        }).catch((error) => {
          if (error.response) {
            console.log("respuesta",error.response)
            console.log("status",error.response.status)
            console.log(error.response.headers)
            }
        });  

        */ 


        var respuesta = await fetch(`https://proyecto-meca-cali.herokuapp.com/Login`, 
        {
            method: "POST",            
            body: cargaUtil,   
        });

        console.log("respuesta de todo",respuesta) 
                
        
        /*await fetch(`https://proyecto-meca-cali.herokuapp.com/Login`, {
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
          },
          method: 'GET',
          mode: 'cors',
          redirect: 'follow',
          referrer: 'no-referrer',
        }).then(response => response.json()){
            //then(function (response) {
            console.log("lo del respuesta",response);

            if (response.status === 200) {
              alert('Se pudo obtener los datos');
            } else {
              alert('Hay un error');
            }
            // you cannot parse your "success" response, since that is not a valid JSON
            // consider using valid JSON req/resp pairs.
            // return response.json();
        });*/

        var a = 1; //admin = 1 y user =0

        var existe;
        var statusr=respuesta.status;  //donde guarda el estatus      

        if (statusr===202) {
            existe= await respuesta.json();
            console.log("GuardarUser",existe) 
            console.log("datos",existe.admin)
            
            this.setState({
                data: {
                    email: "",
                    password_hash: "",
                    //manager: false,                   
                }
            });
            if (existe.admin===1) {
                //cookies.set('email', this.state.data.email, {path: "/"});
                //cookies.set('manager', this.state.data.manager, {path: "/"});
                //cookies.set('manager', 2, {path: "/"});
                a=1;
            }else{
                //cookies.set('email', this.state.data.email, {path: "/"});
                //cookies.set('manager',4, {path: "/"});
                a=0;
            }
        
           
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