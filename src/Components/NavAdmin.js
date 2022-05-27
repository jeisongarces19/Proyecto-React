import React from 'react';
import logo from "../Images/MECA.jpeg";

import './Nav.css';



class NavAdmin extends React.Component {
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
                                <img alt="" src="https://scontent.fclo11-1.fna.fbcdn.net/v/t39.30808-6/283981365_4708098919290481_7876560140414713511_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFQeSf7R376yy2Vo60iC6USSAVlBdSO2GpIBWUF1I7Yat547sW9Ln8Kb68T1FBWAUt1kSF7WfQbQb7gMDP8evqJ&_nc_ohc=0GfyuESbOAQAX8-lgqv&_nc_ht=scontent.fclo11-1.fna&oh=00_AT_EuTg3NphMZ0KO9_mi8is4ekL30XpB2hU17Jtw2GZ4kg&oe=6290CDBA" style={{ maxHeight: "80px" }} />
                            </a> 
                            <a onClick={this.ocultarMenu} activeclassname="is-active" className="navbar-item" href="/MenuAdministrativo">MENU ADMINISTRATIVO</a>
                            <a onClick={this.ocultarMenu} activeclassname="is-active" className="navbar-item" href="/OpcionesAdministrativas">ADMINISTRAR USUARIOS</a>
                            <a onClick={this.ocultarMenu} activeclassname="is-active" className="navbar-item" href="/AdministrarExposiciones">ADMINISTRAR EXPOSICIONES</a>
                            <a onClick={this.ocultarMenu} activeclassname="is-active" className="navbar-item" href="/CrearExposicionesVirtuales">CREAR EXPOSICION</a>
                            <a onClick={this.ocultarMenu} activeclassname="is-active" className="navbar-item" href="/EditarExposicionesVirtuales">EDITAR EXPOSICION</a>
                            <a onClick={this.ocultarMenu} activeclassname="is-active" className="navbar-item" href="/ExposicionesVirtuales">VER EXPOSICION</a>
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
export default NavAdmin;