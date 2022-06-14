import './App.css';
import React from 'react';
import "react-router-dom";

import Asistente from './Components/Asistente';
import NavSinLog from './Components/NavSinLog';
import NavAdmin from './Components/NavAdmin';
import NavUser from './Components/NavUser';
import Footer from './Components/Footer';

import Colorlayer from './Components/Colorlayer';

import Login from './Pages/Login';
import Registrarse from "./Pages/Registrarse";
import Pregunta from './Pages/Pregunta';
import AdministrarPreguntas from './Pages/AdministrarPreguntas'

import MenuAdministrativo from './Pages/MenuAdministrativo';
import MenuUsuario from './Pages/MenuUsuario';
import Perfil from './Pages/Perfil';
import OpcionesAdministrativas from './Pages/OpcionesAdministrativas';
import ListarExposicionesVirtuales from './Pages/ListarExposicionesVirtuales';
import AdministrarExposiciones from './Pages/AdministrarExposiciones';

import ExposicionesVirtuales from './Pages/ExposicionesVirtuales';
import CrearExposicionesVirtuales from './Pages/CrearExposicionesVirtuales';
import EditarExposicionesVirtuales from './Pages/EditarExposicionesVirtuales';

import { Route, Switch } from "wouter";


import Cookies from 'universal-cookie';
const cookies2 = new Cookies();

var email2=cookies2.get('email');
var admin2=cookies2.get('adminis');
const id_ser3 = parseInt(cookies2.get('idUser'));
const id_expo = parseInt(cookies2.get('idexpo'));

//console.log('Email: '+ email2);
//console.log('TipoUsuario: '+ admin2);
//console.log("id_ usuario:"+id_ser3)
//console.log("id_ exposicion:"+id_expo)

if(email2==null){
    email2="SinCorreo";
    admin2=2;

    //console.log('email '+ email2);
    //console.log('es administrador '+ admin2);

}else{
  console.log("Hay inicio de sesion")
}


class App extends React.Component {

  constructor(props) {
        super(props);
        this.state = {
            admin:email2,
            Navres:NavSinLog

        };

        // Indicarle a las funciones a quién nos referimos con "this"
       
        this.componentDidMount = this.componentDidMount.bind(this)

  }

  componentDidMount(){
    if(admin2==="1") {
      this.setState({
        admin : 1,
        Navres: NavAdmin
      });
    }
    if(admin2==="0"){
      this.setState({                     
            admin : 0,
            Navres : NavUser
      });
    }
    if(admin2==="2") {
      this.setState({                     
            admin : 2,
            Navres : NavSinLog
      });
    }
        
  }

  

  incrementarC=(e)=>{
    this.setState({
      admin : this.state.admin,
      Navres : this.state.Navres,
      con: this.state.con+1
    });
    
  }


  render() {
    return(

      <div className="">

        <div className="FondoApp" >

          <div className="navproyect">  
            <this.state.Navres></this.state.Navres>
            <Colorlayer></Colorlayer>              
          </div> 
       
             
          <Route path="/">     
              <br></br>    
              <br></br> 
              <br></br>   
              <div className="bodyproyectLogin">
                <Login/> 
                <Asistente show="Login"></Asistente> 
              </div>                              
          </Route>

          <Switch>

            <Route path="/Login">
              <br></br>    
              <br></br> 
              <br></br>
              <div className="bodyproyectLogin"> 
                <Login/>
                <Asistente show="Login"></Asistente> 
              </div>
            </Route>

            <Route path="/Registrarse">
              <div className="bodyproyectRegister">  
                <Registrarse/>
                <Asistente show="Registrarse"></Asistente> 
              </div>
            </Route>           

            <Route path="/Pregunta">
              <div className="bodyproyectLogin">  
                <Pregunta/>
                <Asistente show="Pregunta"></Asistente>             
              </div>
            </Route>

            <Route path="/Perfil">
                <div className="bodyproyectLogin">
                  <br></br>
                  <br></br>  
                  <Perfil/>   
                  <Asistente show="Perfil"  style={{color: "#black" , height:"100vh", backgroundColor:"#fde2e4"}}></Asistente>                             
                </div>
              </Route>

              <Route path="/MenuAdministrativo">
                <br></br>
                <br></br>
                <div className="bodyproyectLogin">  
                  <MenuAdministrativo/>     
                  <Asistente show="MenuAdministrativo"></Asistente>            
                </div>
              </Route>

              <Route path="/OpcionesAdministrativas">
                <div className="bodyproyectLogin">  
                  <OpcionesAdministrativas/>  
                  <Asistente show="OpcionesAdministrativas"></Asistente> 
                </div>
              </Route>

              

              <Route path="/MenuUsuario">
                <div className="bodyproyectLogin">  
                  <br></br>
                  <br></br>
                  <MenuUsuario/>    
                  <Asistente show="MenuUsuario"></Asistente>              
                </div>
              </Route>

              <Route path="/ListarExposicionesVirtuales">
                <div className="bodyproyectLogin">  
                  <ListarExposicionesVirtuales/>   
                  <Asistente show="ListarExposicionesVirtuales"></Asistente>               
                </div>
              </Route>

              <Route path="/AdministrarExposiciones">
                <div className="bodyproyectLogin">  
                  <AdministrarExposiciones/>   
                  <Asistente show="AdministrarExposiciones"></Asistente>               
                </div>
              </Route>


              <Route path="/ExposicionesVirtuales">
                <div className="bodyproyectLogin">  
                  <ExposicionesVirtuales/>   
                  <Asistente show="ExposicionesVirtuales"></Asistente>               
                </div>
              </Route>

              <Route path="/CrearExposicionesVirtuales">
                <div className="bodyproyectLogin">  
                  <CrearExposicionesVirtuales/>   
                  <Asistente show="CrearExposicionesVirtuales"></Asistente>               
                </div>
              </Route>

              <Route path="/EditarExposicionesVirtuales">
                <div className="bodyproyectLogin">  
                  <EditarExposicionesVirtuales/>   
                  <Asistente show="EditarExposicionesVirtuales"></Asistente>               
                </div>
              </Route>

              <Route path="/AdministrarPreguntas">
                <div className="bodyproyectLogin">  
                  <AdministrarPreguntas/>   
                  <Asistente show="AdministrarPreguntas"></Asistente>               
                </div>
              </Route>

              


              


              
          </Switch>

          <div className="footerproyect">               
            <Footer></Footer>              
          </div>
          
        </div>
      </div>

    );        
  }


}

export default App;