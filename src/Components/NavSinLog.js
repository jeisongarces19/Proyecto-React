import React from 'react';
import logo from "../Images/MECA.jpeg";

import './Nav.css';


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


    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute">
                <div className="container-fluid">

                    <div className={`navbar-menu ${this.state.mostrarMenu ? "is-active" : ""}`}>
                        <div className="navbar-start">
                            
                            <a className="navbar-item" href="https://docs.google.com/presentation/d/1UOnBR8NfVH54pV1RtceFkTClDYGvSHqzvgxnMOZDCwY/edit#slide=id.g1110f674df1_1_13">                        
                                <img alt="" src="https://scontent.fclo11-1.fna.fbcdn.net/v/t39.30808-6/282126803_104040518986308_442681094172047974_n.jpg?_nc_cat=107&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=Y0957uu8E_IAX8BS9hw&_nc_ht=scontent.fclo11-1.fna&oh=00_AT8lTSxJM4Hc_Qc4ST_8d0Vj7wa4i8h4zty9QzutYK88Cg&oe=628A579A" style={{ maxHeight: "80px" }} />
                            </a>

                            <a onClick={this.ocultarMenu} activeclassname="is-active" className="navbar-item" href="/Login">Login</a>
                            <a onClick={this.ocultarMenu} activeclassname="is-active" className="navbar-item" href="/Registrarse">Registrarse</a>                
                            <a onClick={this.ocultarMenu} activeclassname="is-active" className="navbar-item" href="/Pregunta">Preguntas❓</a>
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