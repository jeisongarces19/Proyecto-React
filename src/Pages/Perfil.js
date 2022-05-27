import React from 'react';
import Constantes from "../Constantes";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';
import '../Styles/perfil.css';
import swal from 'sweetalert';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const idUser6 = cookies.get('idUser');

class Perfil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                "id":"",
                "name":"" ,
                "last_name_1": "",
                "last_name_2": "",                
                "email": " ",
                "password_hash": "",                  
                "born_date": "",   
                "describe": "",           
                "picture":"",
            },
        };

        this.componentDidMount = this.componentDidMount.bind(this)
        this.manejarCambio = this.manejarCambio.bind(this);
        this.manejarEnvioDeFormulario = this.manejarEnvioDeFormulario.bind(this);
        
    }


    async componentDidMount() {    

        var respuesta = await fetch(`https://proyecto-meca-cali.herokuapp.com/Users/Search/id/`+idUser6, 
        {
            method: "GET",   
        });

        var Users= await respuesta.json();

        var Name=Users.name;
        var Last_name_1=Users.last_name_1;
        var Last_name_2=Users.last_name_2;
        var Email=Users.email;
        var Password_hash=Users.password_hash;
        var Born_date=Users.born_date;
        var Describe=Users.describe;
        var Picture=Users.picture;        
        
        if (Name===null) {
          Name="";
        }
        if (Last_name_1===null) {
          Last_name_1="";
        }
        if (Last_name_2===null) {
          Last_name_2="";
        }
        if (Email===null) {
          Email="";
        }        
        if (Password_hash===null) {
          Password_hash="";
        }
        if (Born_date===null) {
          Born_date="";
        }
        if (Describe===null) {
          Describe="";
        }
        if (Picture===null) {
          Picture="";
        }

        this.setState({
          data: {
                id:idUser6,
                name:Name,
                last_name_1: Last_name_1,
                last_name_2: Last_name_2,                
                email: Email,
                password_hash:Password_hash,                  
                born_date:Born_date,   
                describe:Describe,           
                picture:Picture,
          }
        });
    }

    render() {
        return (

            <div className="columns central">
                <div className="column"></div>

                <div className="column" >

                    <div className="cardPerfil">
                        <center>
                    
                        <div className="photo-container">
                            <img alt="..." src={this.state.data.picture}>
                            </img>
                        </div>

                        <h1 className="perfilletra">PERFIL</h1>  

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
                                <input disabled="disabled" autoFocus required placeholder="✉️ Email ✔" type="text" id="email" className="FondoInput"  onChange={this.manejarCambio} value={this.state.data.email} >
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
                                <button className="button is-primary mt-2" >
                                    Actualizar Información
                                </button>                                
                            </div>    

                        </form>
                        </center>
                    </div>
                </div>

                <div className="column">  </div>
            </div>
        );
    }

    async manejarEnvioDeFormulario(evento) {

         const continuar = () =>{
            swal({
              title: "ACTUALIZAR",
              text: "Tu usuario ha sido actualizado :) ¡Ingrese nuevamente!",
              icon: "success",              
            }).then(function() {
                window.location = "/Perfil";
            });
        }

        const detener = () =>{
            swal({
              title: "ERROR",
              text: "Surgio un error al actualizar el usuario",
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

        
        var respuesta = await fetch(`https://proyecto-meca-cali.herokuapp.com/Users/Actualizar`, 
        {
            method: "PUT",            
            body: cargaUtil,   
        });

        console.log("respuesta de todo",respuesta)
        var statusr=0;
       
        var statusr=respuesta.status;     

        if (statusr===200) {
            continuar(); 
        } else {        
            detener();
        }

    }

    manejarCambio(evento) {
        const clave = evento.target.id;
        let valor = evento.target.value;
        this.setState(state => {
            const userActualizado = state.data;
            userActualizado[clave] = valor;
            return {
                data: userActualizado,
            }
        });
    }
    
}

export default Perfil;