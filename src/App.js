import './App.css';
import "react-router-dom";
import Footer from './Components/Footer';
import Nav from './Components/Nav';
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
    
      
        <div className="columns">

          
          <div className="FondoApp" >


          

            <div className="navproyect">  
              <Nav></Nav>
            </div>

            <Route path="/">
                <div className="bodyproyectLogin"> 
                  <Login />

                  <Colorlayer/>   
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
                  <br></br> <br></br> <br></br> <br></br>
                </div>
              </Route>

              <Route path="/Perfil">
                <div className="bodyproyectRegister">  
                  <Perfil/>                 
                </div>
              </Route>

              <Route path="/MenuAdministrativo">
                <div className="bodyproyectRegister">  
                  <MenuAdministrativo/>                 
                </div>
              </Route>

              <Route path="/OpcionesAdministrativas">
                <div className="bodyproyectRegister">  
                  <OpcionesAdministrativas/>                 
                </div>
              </Route>

              <Route path="/Pregunta">
                <div className="bodyproyectRegister">  
                  <Pregunta/>                 
                </div>
              </Route>

              <Route path="/MenuUsuario">
                <div className="bodyproyectRegister">  
                  <MenuUsuario/>                 
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