import React from 'react';
import Constantes from "../Constantes";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';
import '../Styles/exposicionesVirtuales.css';

import ReactPlayer from 'react-player';


class CrearExposicionesVirtuales extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dates: {
                "email": "",
                "password": "",
            },
        };
        // Indicarle a las funciones a quién nos referimos con "this"
        
        this.manejarCambio = this.manejarCambio.bind(this);
        this.manejarEnvioDeFormulario = this.manejarEnvioDeFormulario.bind(this);
    }
    render() {
        return (

            

            <div className="columns central">

              <div className="column">

              Aqui va todo lo relacionado con la creacion.

              </div>

                <div className="column is-two-thirds" >

                  <div className="card2">
                    <center>

                      <h1 className="is-size-1 colorletra"> ¡Exposiciones Virtuales! </h1>                

                        <ToastContainer></ToastContainer>

                        <br></br>

                        <div className="playlist-unit2">
                            <div className="playlist-unit-inner2">

                                <div >
                                    <div>
                                        <p>Like most presenters, Pete is a man of many skills. These include walking, talking – and very occasionally doing a mixture of the two.</p>
                                        <p>Fun, unique and engaging, his quirky and irreverent style can inject new life into any project. He can even do it either standing up or sitting down. Totally up to you.</p>
                                        <p>He can be currently found writing and presenting his own Internet series The Curious Man’s Guide and has been described on online forums as being “good”.</p>
                                    </div>
                                </div>

                                <div>
                                    <h5>Take a look at some of his work via the links on the right:</h5>
                                </div>
                            </div>
                                                         
                        </div>

                        <div className="">
                            <div className="">
                                <a className=" " href="#clients" title="View Clients">Clients</a>
                                <span>     </span>
                                <a className=" " href="#biography" title="View Biography">Biography</a>                               
                            </div>
                        </div>

                        <br></br>





                        <div className="contenedor">

                            <ReactPlayer 
                                url='https://www.youtube.com/watch?v=pLBuFxMYkx8' 
                                controls
                                width='100%'
                                height='100%'
                                className="react-player"

                            />
                        </div>

                        <div className="">

                            
                        </div>


                        

                        <br></br>

                        <div className="playlist-unit">
                            <div className="playlist-unit-inner">

                            <button className="button is-success mt-2">
                              ‹
                            </button>

                            <div className="listing">
                                <div className="columns central">
                                    <div className="column">
                                    
                                        <div className="photo-container2 ">
                                            <img alt="..." src="https://scontent.fclo8-1.fna.fbcdn.net/v/t1.6435-9/96763841_2560962134004181_6427503684715806720_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_eui2=AeH3cpBhmPB-hqAaoYFwMxZl0F4KPX8zzBvQXgo9fzPMG9JvJhrlLApTCsCh5sT0YRg2lzYIIr817q1iLfdK6o4W&_nc_ohc=NF6WcE8xaj8AX_UmsOK&_nc_ht=scontent.fclo8-1.fna&oh=00_AT8hhlsjaFUZG9E0nLQKiEpUCRHe4SVqkCB9QPAJZcr5DA&oe=629717C5">
                                            </img>
                                        </div>
                                    </div>

                                    <div className="column">
                                    
                                        <div className="photo-container2 ">
                                            <img alt="..." src="https://scontent.fclo8-1.fna.fbcdn.net/v/t1.6435-9/96763841_2560962134004181_6427503684715806720_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_eui2=AeH3cpBhmPB-hqAaoYFwMxZl0F4KPX8zzBvQXgo9fzPMG9JvJhrlLApTCsCh5sT0YRg2lzYIIr817q1iLfdK6o4W&_nc_ohc=NF6WcE8xaj8AX_UmsOK&_nc_ht=scontent.fclo8-1.fna&oh=00_AT8hhlsjaFUZG9E0nLQKiEpUCRHe4SVqkCB9QPAJZcr5DA&oe=629717C5">
                                            </img>
                                        </div>
                                    </div>

                                    <div className="column">
                                    
                                        <div className="photo-container2 ">
                                            <img alt="..." src="https://scontent.fclo8-1.fna.fbcdn.net/v/t1.6435-9/96763841_2560962134004181_6427503684715806720_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_eui2=AeH3cpBhmPB-hqAaoYFwMxZl0F4KPX8zzBvQXgo9fzPMG9JvJhrlLApTCsCh5sT0YRg2lzYIIr817q1iLfdK6o4W&_nc_ohc=NF6WcE8xaj8AX_UmsOK&_nc_ht=scontent.fclo8-1.fna&oh=00_AT8hhlsjaFUZG9E0nLQKiEpUCRHe4SVqkCB9QPAJZcr5DA&oe=629717C5">
                                            </img>
                                        </div>
                                    </div>

                                    <div className="column">
                                    
                                        <div className="photo-container2 ">
                                            <img alt="..." src="https://scontent.fclo8-1.fna.fbcdn.net/v/t1.6435-9/96763841_2560962134004181_6427503684715806720_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_eui2=AeH3cpBhmPB-hqAaoYFwMxZl0F4KPX8zzBvQXgo9fzPMG9JvJhrlLApTCsCh5sT0YRg2lzYIIr817q1iLfdK6o4W&_nc_ohc=NF6WcE8xaj8AX_UmsOK&_nc_ht=scontent.fclo8-1.fna&oh=00_AT8hhlsjaFUZG9E0nLQKiEpUCRHe4SVqkCB9QPAJZcr5DA&oe=629717C5">
                                            </img>
                                        </div>
                                    </div>
                                </div>

                                                            
                            </div>




                            <div className="list-indicators">
                                <a className="ind active" href="#">
                                </a>
                                <a className="ind" href="#">
                                </a>
                                <a className="ind" href="#">
                                </a>
                            </div>


                            <button className="button is-success mt-2">
                              ›
                            </button>
                        
                                
                            </div>                    
                        </div>

                        

                        <br></br>

                        <br></br>

                        <div className="cardPregunta">
                            <center>

                                <h1 className="title">🧐 Hazme Un Comentario</h1>                


                                <form className="fToastContainerield" onSubmit={this.manejarEnvioDeFormulario}>


                                    <div className="form-group">                                
                                        <input autoFocus required placeholder=" Comentario" type="text" id="pregunta" className="FondoInput" onChange={this.manejarCambio} value={this.state.dates.email}>
                                          
                                        </input>
                                    </div>                         
                              

                                
                                    <div className="form-group">
                                        <button className="button is-success mt-2" >
                                        Enviar
                                        </button>                     
                                    </div>
                                </form>

                            </center>
                        </div>

                      
                       


                      
                      
                  
                    </center>
                  </div>
                </div>
                
                <div className="column" >
                    
                </div>

            </div>
            
        );
    }

    async manejarEnvioDeFormulario(evento) {

        evento.preventDefault();       
        const cargaUtil = JSON.stringify(this.state.dates);

        console.log("aqui esta lo que envio");
        console.log(cargaUtil);
      
        const respuesta = await fetch(`${Constantes.RUTA_API}/Guardar_user`, 
        {
            method: "POST",            
            body: cargaUtil,
        });
        
        

        const exitoso = await respuesta.json();

        if (exitoso) {
            toast('Usuario guardado 🎮', {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            this.setState({
                dates: {
                    email: "",
                    password: "",
                }
            });
        } else {
            toast.error("Error guardando. Intenta de nuevo");
        }
    }


    manejarCambio(evento) {

        const clave = evento.target.id;
        let valor = evento.target.value;
        this.setState(state => {
            const datesActualizado = state.dates;
            // Si es la calificación o el nombre, necesitamos castearlo a entero
            //if (clave !== "nombre") {
            //    valor = parseFloat(valor);
            //}
            // Actualizamos el valor del dates, solo en el campo que se haya cambiado
            datesActualizado[clave] = valor;
            return {
                dates: datesActualizado,
            }
        });
    }
    
}

export default CrearExposicionesVirtuales;