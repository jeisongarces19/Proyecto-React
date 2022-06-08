import React from 'react';

import '../App.css';
import '../Styles/pregunta.css';

import swal from 'sweetalert';



class Pregunta extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                "name": "",
                "description": "",
            },            
        };
        // Indicarle a las funciones a quién nos referimos con "this"
        
        this.manejarCambio = this.manejarCambio.bind(this);
        this.manejarEnvioDeFormulario = this.manejarEnvioDeFormulario.bind(this);

    }
    render() {
        return (

            

            <div className="columns central">

                <div className="column" >

                  <div className="cardPregunta">
                    <center>

                      <h1 className="preguntaletra"> REALIZA TU PREGUNTA 🧐 </h1>                

                      
                        <form onSubmit={this.manejarEnvioDeFormulario}>

                            <h3>Pregunta ❓</h3>
                            <div className="form-group">                                    
                                <input autoFocus placeholder="Pregunta?" type="text" id="name" className="FondoInput"  onChange={this.manejarCambio} value={this.state.data.name} >
                                </input> 
                            </div>
                            <span> </span>
                            <br></br>

                            <h3>Detallar</h3>
                            <div className="form-group">                                    
                                <textarea autoFocus placeholder="Punto en especifico " type="text" id="description" className="FondoInput"  onChange={this.manejarCambio} value={this.state.data.description} >
                                </textarea> 
                            </div>
                            <span> </span>
                        
                          <div className="form-group">
                              <button className="button is-success mt-2" >
                              Enviar
                              </button>                     
                          </div>
                      </form>

                    </center>
                  </div>
                </div>

                <div className="column ">
                </div>


                

            </div>
            
        );
    }

    async manejarEnvioDeFormulario(evento){
        const continuar = () =>{
            swal({
              title: "Creacion",
              text: "Tu pregunta ha sido creada",
              icon: "success",              
            }).then(function() {
                window.location = "/Pregunta";
            });
        }
        const detener = () =>{
            swal({
              title: "Error",
              text: "Surgio un error al crear la pregunta",
              icon: "error",
              dangerMode: true,
            })
            .then(willDelete => {
              if (willDelete) {
                swal("Volver a intentar!");
              }
            });
        }        
        evento.preventDefault();
        const cargaUtil = JSON.stringify(this.state.data);

        console.log(cargaUtil);   
        var respuesta = await fetch(`https://proyecto-meca-cali.herokuapp.com/Questions/Create`, 
        {
            method: "POST",            
            body: cargaUtil,   
        });


        console.log("respuesta de todo",respuesta)        
        var statusr=respuesta.status;   
        console.log("respuesta de s",statusr)      
        if (statusr===201) {           
            this.setState({
                data: {
                    "name": "",  
                    "description": ""                    
                }
            });
            continuar(); 
        } else {        
            detener();
        }        
    }


    manejarCambio(evento) {   
        const clave = evento.target.id;
        let valor = evento.target.value;
        this.setState(state => {
            const dataActualizado = state.data;            
            dataActualizado[clave] = valor;
            return {
                data: dataActualizado,
            }
        });
    }

    
}

export default Pregunta;