import './App.css';
import React, {Component} from 'react';
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

console.log('email111111 '+ email2);
console.log('admin1111111 '+ admin2);

if(email2==null){
    email2="SinCorreo";
    admin2=2;

    console.log('email '+ email2);
    console.log('es administrador '+ admin2);

}else{
  console.log("Hay un inicio de sesion")
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
            
              <div className="bodyproyectLogin">

                <Login /> 
                <Asistente show="Login"></Asistente> 
              </div>                              
          </Route>

          <Switch>

            <Route path="/Login">
              <div className="bodyproyectLogin"> 
                <Login />
                <Asistente show="Login"></Asistente> 
              </div>
            </Route>

            <Route path="/Registrarse">
              <div className="bodyproyectRegister">  
                <Registrarse/>
                <Asistente show="Login"></Asistente> 
              </div>
            </Route>           

            <Route path="/Pregunta">
              <div className="bodyproyectLogin">  
                <Pregunta/>
                <Asistente show="Login"></Asistente>             
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
                  <Asistente show="Login"></Asistente>            
                </div>
              </Route>

              <Route path="/OpcionesAdministrativas">
                <div className="bodyproyectLogin">  
                  <OpcionesAdministrativas/>  
                  <Asistente show="Login"></Asistente> 
                </div>
              </Route>

              

              <Route path="/MenuUsuario">
                <div className="bodyproyectLogin">  
                  <br></br>
                  <br></br>
                  <MenuUsuario/>    
                  <Asistente show="Login"></Asistente>              
                </div>
              </Route>

              <Route path="/ListarExposicionesVirtuales">
                <div className="bodyproyectLogin">  
                  <ListarExposicionesVirtuales/>   
                  <Asistente show="Login"></Asistente>               
                </div>
              </Route>

              <Route path="/AdministrarExposiciones">
                <div className="bodyproyectLogin">  
                  <AdministrarExposiciones/>   
                  <Asistente show="Login"></Asistente>               
                </div>
              </Route>


              <Route path="/ExposicionesVirtuales">
                <div className="bodyproyectLogin">  
                  <ExposicionesVirtuales/>   
                  <Asistente show="Login"></Asistente>               
                </div>
              </Route>

              <Route path="/CrearExposicionesVirtuales">
                <div className="bodyproyectLogin">  
                  <CrearExposicionesVirtuales/>   
                  <Asistente show="Login"></Asistente>               
                </div>
              </Route>

              <Route path="/EditarExposicionesVirtuales">
                <div className="bodyproyectLogin">  
                  <EditarExposicionesVirtuales/>   
                  <Asistente show="Login"></Asistente>               
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