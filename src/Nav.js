
import React from 'react';
//import logo from "./img/parzibyte_logo.png";
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

    //mostrar el logo o una imagen, poner en la linea 56
                    
    /*<a className="navbar-item" href="https://parzibyte.me/l/fW8zGd">                        
        <img alt="" src={logo} style={{ maxHeight: "80px" }} />
    </a>
    */

    /*
    //colocar en la linea 71
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a target="_blank" rel="noreferrer" href="https://parzibyte.me/l/fW8zGd" className="button is-primary">
                                    <strong>Soporte y ayuda</strong>
                                </a>
                            </div>
                        </div>
                    </div>

                    */


    render() {
        return (
            <nav className="navbar is-warning" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                   


                    <button onClick={this.intercambiarEstadoMenu} className={`navbar-burger ${this.state.mostrarMenu ? "is-active" : ""} is-warning button`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </button>
                </div>

                <div className={`navbar-menu ${this.state.mostrarMenu ? "is-active" : ""}`}>
                    <div className="navbar-start">
                        <NavLink onClick={this.ocultarMenu} activeClassName="is-active" className="navbar-item" to="/videojuegos/ver">Ver Exposiciones</NavLink>
                        <NavLink onClick={this.ocultarMenu} activeClassName="is-active" className="navbar-item" to="/videojuegos/agregar">Agregar Exposiciones</NavLink>
                        <NavLink onClick={this.ocultarMenu} activeClassName="is-active" className="navbar-item" to="/videojuegos/Login">Login</NavLink>
                        <NavLink onClick={this.ocultarMenu} activeClassName="is-active" className="navbar-item" to="/videojuegos/Registrarse">Registrarse</NavLink>
                        

                    </div>


                </div>
            </nav>
        );
    }
}
export default Nav;