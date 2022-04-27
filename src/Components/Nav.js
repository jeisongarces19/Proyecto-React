import React from 'react';
import logo from "../Images/MECA.jpeg";

import './Nav.css';



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

            

            <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute">
                <div className="container-fluid">

                    <div className={`navbar-menu ${this.state.mostrarMenu ? "is-active" : ""}`}>
                        <div className="navbar-start">
                            
                            <a className="navbar-item" href="https://docs.google.com/presentation/d/1UOnBR8NfVH54pV1RtceFkTClDYGvSHqzvgxnMOZDCwY/edit#slide=id.g1110f674df1_1_13">                        
                                <img alt="" src={logo} style={{ maxHeight: "80px" }} />
                            </a>
                            
                                
                            


                            <a onClick={this.ocultarMenu} activeClassName="is-active" className="navbar-item" href="/login">Login</a>
                            <a onClick={this.ocultarMenu} activeClassName="is-active" className="navbar-item" href="/Perfil">Perfil</a>
                            <a onClick={this.ocultarMenu} activeClassName="is-active" className="navbar-item" href="/Pregunta">Pregunta</a>
                            <a onClick={this.ocultarMenu} activeClassName="is-active" className="navbar-item" href="/MenuUsuario">Menu Usuario</a>
                            <a onClick={this.ocultarMenu} activeClassName="is-active" className="navbar-item" href="/MenuAdministrativo">Menu administrativo</a>
                            <a onClick={this.ocultarMenu} activeClassName="is-active" className="navbar-item" href="/OpcionesAdministrativas">Opciones Administrativas</a>
                            
                        </div>

                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="buttons">
                                    <a target="_blank" rel="noreferrer" href="https://docs.google.com/presentation/d/1UOnBR8NfVH54pV1RtceFkTClDYGvSHqzvgxnMOZDCwY/edit#slide=id.g1110f674df1_1_13" className="button is-primary">
                                        <strong>?</strong>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-brand">                  
                        
                        <button onClick={this.intercambiarEstadoMenu} className={`navbar-burger ${this.state.mostrarMenu ? "is-active" : ""} is-warning button`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                            <span aria-hidden="true">Aqui</span>
                            
                        </button>
                    </div>

                </div>                   
            </nav>
        );
    }
}
export default Nav;