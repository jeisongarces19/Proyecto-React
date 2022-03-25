import Nav from "./Nav";
import AgregarVideojuego from "./AgregarVideojuego";
import VerVideojuegos from "./VerVideojuegos";
import EditarVideojuego from "./EditarVideojuego";
import Login from "./Login";
import Registrarse from "./Registrarse";

import {
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Nav></Nav>
      <div className="section">
        <div className="columns">
          <Switch>
          
            <Route path="/videojuegos/agregar">
              <AgregarVideojuego></AgregarVideojuego>
            </Route>

            <Route path="/videojuegos/editar/:id">
              <EditarVideojuego></EditarVideojuego>
            </Route>

            <Route path="/videojuegos/ver">
              <VerVideojuegos></VerVideojuegos>
            </Route>

            <Route path="/videojuegos/Login">
              <Login></Login>
            </Route>
            <Route path="/videojuegos/Registrarse">
              <Registrarse></Registrarse>
            </Route>

            <Route path="/videojuegos/Login">
              <VerVideojuegos></VerVideojuegos>
            </Route>


            
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
