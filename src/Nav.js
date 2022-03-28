import React from 'react';
import logo from "./img/MECA.jpeg";
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mostrarMenu: false,
        };
        this.intercambiarEstadoMenu = this.intercambiarEstadoMenu.bind(this);
        this.ocultarMenu = this.ocultarMenu.bind(this);
    }


    ocultarMenu() {
        this.setState({
            mostrarMenu: false,
        })
    }

    intercambiarEstadoMenu() {
        this.setState(state => {
            return {
                mostrarMenu: !state.mostrarMenu,
            }
        });
    }


    render() {
        return (
            <nav className="navbar is-warning" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">

                    <a className="navbar-item" href="https://docs.google.com/presentation/d/1UOnBR8NfVH54pV1RtceFkTClDYGvSHqzvgxnMOZDCwY/edit#slide=id.g1110f674df1_1_13">                        
                        <img alt="" src={logo} style={{ maxHeight: "80px" }} />
                    </a>
                    <button onClick={this.intercambiarEstadoMenu} className={`navbar-burger ${this.state.mostrarMenu ? "is-active" : ""} is-warning button`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        
                    </button>
                </div>

                <div className={`navbar-menu ${this.state.mostrarMenu ? "is-active" : ""}`}>
                    <div className="navbar-start">
                        <NavLink onClick={this.ocultarMenu} activeClassName="is-active" className="navbar-item" to="/MECA/login">Login</NavLink>
                        <NavLink onClick={this.ocultarMenu} activeClassName="is-active" className="navbar-item" to="/MECA/Registrarse">Registrarse</NavLink>
                        <NavLink onClick={this.ocultarMenu} activeClassName="is-active" className="navbar-item" to="/MECA/ver">Ver Exposiciones</NavLink>
                        <NavLink onClick={this.ocultarMenu} activeClassName="is-active" className="navbar-item" to="/MECA/agregar">Agregar MECA</NavLink>
                        <NavLink onClick={this.ocultarMenu} activeClassName="is-active" className="navbar-item" to="/MECA/PaginaElementos">Pagina de los Elementos</NavLink>
                        <NavLink onClick={this.ocultarMenu} activeClassName="is-active" className="navbar-item" to="/MECA/PreguntaRespuesta">Pregunta y Respuesta</NavLink>
                        <NavLink onClick={this.ocultarMenu} activeClassName="is-active" className="navbar-item" to="/MECA/MenuAdministrativo">Menu Administrativo</NavLink>
                        <NavLink onClick={this.ocultarMenu} activeClassName="is-active" className="navbar-item" to="/MECA/OpcionesAdministrativas">Opciones Administrativas</NavLink>
                        <NavLink onClick={this.ocultarMenu} activeClassName="is-active" className="navbar-item" to="/MECA/MenuUsuario">Menu Usuario</NavLink>
                        <NavLink onClick={this.ocultarMenu} activeClassName="is-active" className="navbar-item" to="/MECA/MenuUsuarioExposiciones">Menu Usuario Exposiciones</NavLink>
                        <NavLink onClick={this.ocultarMenu} activeClassName="is-active" className="navbar-item" to="/MECA/UsuarioCreacionExposiciones">Menu Usuario Creacion Exposiciones</NavLink>
                        <NavLink onClick={this.ocultarMenu} activeClassName="is-active" className="navbar-item" to="/MECA/VisualizarExposicion">Visualizar Exposicion</NavLink>



                        {/*<NavLink onClick={this.ocultarMenu} activeClassName="is-active" className="navbar-item" to="/MECA/editar">Editar</NavLink>*/}
                        
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a target="_blank" rel="noreferrer" href="https://docs.google.com/presentation/d/1UOnBR8NfVH54pV1RtceFkTClDYGvSHqzvgxnMOZDCwY/edit#slide=id.g1110f674df1_1_13" className="button is-primary">
                                    <strong>Preguntas y Respuestas</strong>
                                </a>
                            </div>
                        </div>
                    </div>


                </div>
            </nav>
        );
    }
}
export default Nav;