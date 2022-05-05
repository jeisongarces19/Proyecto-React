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
                </div>                              
            </Route>

            <Switch>
                         

              <Route path="/Login">
                <div className="bodyproyectLogin"> 
                  <Login />
                </div>
              </Route>

              <Route path="/Registrarse">
                <div className="bodyproyectRegister">  
                  <Registrarse/>
                </div>
              </Route>

              <Route path="/Perfil">
                <div className="bodyproyectLogin">  
                  <Perfil/>               
                </div>
              </Route>

              <Route path="/MenuAdministrativo">
                <div className="bodyproyectLogin">  
                  <MenuAdministrativo/>                
                </div>
              </Route>

              <Route path="/OpcionesAdministrativas">
                <div className="bodyproyectLogin">  
                  <OpcionesAdministrativas/>  
                </div>
              </Route>

              <Route path="/Pregunta">
                <div className="bodyproyectLogin">  
                  <Pregunta/>              
                </div>
              </Route>

              <Route path="/MenuUsuario">
                <div className="bodyproyectLogin">  
                  <MenuUsuario/>                 
                </div>
              </Route>
            </Switch>



            

           
            <div className="">
              <Asistente></Asistente> 
            </div>

            <div className="footerproyect"> 
              
              <Footer></Footer>              
            </div>


            

          </div>
        </div>
      

    
  );
}

export default App;