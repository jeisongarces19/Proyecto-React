import './App.css';
import "react-router-dom";

import Asistente from './Components/Asistente';
import Nav from './Components/Nav';
import Footer from './Components/Footer';

import Colorlayer from './Components/Colorlayer';

import Login from './Pages/Login';
import Registrarse from "./Pages/Registrarse";
import MenuAdministrativo from './Pages/MenuAdministrativo';
import MenuUsuario from './Pages/MenuUsuario';
import Perfil from './Pages/Perfil';
import Pregunta from './Pages/Pregunta';
import OpcionesAdministrativas from './Pages/OpcionesAdministrativas';
import ListarExposicionesVirtuales from './Pages/ListarExposicionesVirtuales';
import AdministrarExposiciones from './Pages/AdministrarExposiciones';

import ExposicionesVirtuales from './Pages/ExposicionesVirtuales';
import CrearExposicionesVirtuales from './Pages/ExposicionesVirtuales';


import { Route, Switch } from "wouter";

function App() {
  return (
    
      
        <div className="">

          
          <div className="FondoApp" >

            <div className="navproyect">  
              <Nav></Nav>
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

              <Route path="/Pregunta">
                <div className="bodyproyectLogin">  
                  <Pregunta/>
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

export default App;