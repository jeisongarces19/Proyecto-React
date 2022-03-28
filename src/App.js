import Nav from "./Nav";
import AgregarVideojuego from "./AgregarVideojuego";
import VerExposiciones from "./VerExposiciones";
import EditarVideojuego from "./EditarVideojuego";
import Login from "./Login";
import Registrarse from "./Registrarse";
import PreguntaRespuesta from "./PreguntaRespuesta";
import MenuAdministrativo from "./MenuAdministrativo";
import OpcionesAdministrativas from "./OpcionesAdministrativas";
import MenuUsuario from "./MenuUsuario";
import MenuUsuarioExposiciones from "./MenuUsuarioExposiciones";
import UsuarioCreacionExposiciones from "./UsuarioCreacionExposiciones";
import VisualizarExposicion from "./VisualizarExposicion";




import PaginaElementos from "./PaginaElementos";



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

            <Route path="/MECA/login">
              <Login></Login>
            </Route>

            <Route path="/MECA/Registrarse">
              <Registrarse></Registrarse>
            </Route>
          
            <Route path="/MECA/agregar">
              <AgregarVideojuego></AgregarVideojuego>
            </Route>

            <Route path="/MECA/editar/:id">
              <EditarVideojuego></EditarVideojuego>
            </Route>

            <Route path="/MECA/ver">
              <VerExposiciones></VerExposiciones>
            </Route>

            <Route path="/MECA/PreguntaRespuesta">
              <PreguntaRespuesta></PreguntaRespuesta>
            </Route>

            <Route path="/MECA/PaginaElementos">
              <PaginaElementos></PaginaElementos>
            </Route>

            <Route path="/MECA/MenuAdministrativo">
              <MenuAdministrativo></MenuAdministrativo>
            </Route>

            <Route path="/MECA/OpcionesAdministrativas">
              <OpcionesAdministrativas></OpcionesAdministrativas>
            </Route>

            <Route path="/MECA/MenuUsuario">
              <MenuUsuario></MenuUsuario>
            </Route>

            <Route path="/MECA/MenuUsuarioExposiciones">
              <MenuUsuarioExposiciones></MenuUsuarioExposiciones>
            </Route>

            <Route path="/MECA/VisualizarExposicion">
              <VisualizarExposicion></VisualizarExposicion>
            </Route>

            <Route path="/MECA/UsuarioCreacionExposiciones">
              <UsuarioCreacionExposiciones></UsuarioCreacionExposiciones>
            </Route>



            


            <Route path="/">
              <Login></Login>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
