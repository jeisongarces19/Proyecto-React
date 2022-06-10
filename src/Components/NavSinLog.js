import React from 'react';
//import logo from "../Images/MECA.jpeg";

import './Nav.css';


import Cookies from 'universal-cookie';

const cookies = new Cookies();



class NavSinLog extends React.Component {
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

    cerrarSesion=()=>{
        cookies.remove('email', {path: "/"});
        cookies.remove('adminis', {path: "/"});    
        cookies.remove('idUser', {path: "/"});    
        window.location.href='./Login';
    }


    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute">
                <div className="container-fluid">

                    <div className={`navbar-menu ${this.state.mostrarMenu ? "is-active" : ""}`}>
                        <div className="navbar-start">
                            
                            <a className="navbar-item" onClick={()=>this.cerrarSesion()}>                        
                                <img alt="" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhX9e4EI8yJhU8sqkYM-RDVgRbZPhXKFZgm19e9RmBItdUJgjMT7Y8Ep8e4LDoTZ_Mj6gP1bnIw4jNysuwwn8OwSBWEwILiehfPVKRmWkum6pnZN4iUkzhkOKcTRmN1r5Yse69DI8EiFDLLW2af_1RgNMFM0vTlzmD2eSeX0RfVLTUSMXxM4SkSAw1W5Q/w440-h422/MECA.jpeg" style={{ maxHeight: "80px" }} />

                            </a>

                            <a onClick={this.ocultarMenu} activeclassname="is-active" className="navbar-item" href="/Login">INICIAR SESIÓN 👤 </a>
                            <a onClick={this.ocultarMenu} activeclassname="is-active" className="navbar-item" href="/Registrarse">REGISTRARSE 📝</a>                
                            <a onClick={this.ocultarMenu} activeclassname="is-active" className="navbar-item" href="/Pregunta">PREGUNTAS ❓</a>
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
export default NavSinLog;