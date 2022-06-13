import React from 'react';

import '../App.css';
import '../Styles/crearExposicion.css';
import styles from '../styles.module.scss';


import swal from 'sweetalert';

import Cookies from 'universal-cookie';
const cookies = new Cookies();

const id_ser3 = parseInt(cookies.get('idUser'));

function PaginasExposiciones (props) {

  const Expo=props.todo;

  return (
    <div className={styles.container}>
      <div className={styles.containerPoke}>
        <div className={styles.pokeContainer}>
            
          <div className={styles.imgContainer}>
            <img src={Expo.picture} alt={Expo.title} />


          </div>
          <p >{Expo.title}</p>  
          <h3>{Expo.description}</h3> 

        </div>
      
      </div>
    </div>
  );
}

class CrearExposicionesVirtuales extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {      
                "user_id": id_ser3,     
                "title":"Dale un Titulo",
                "description":"Describe tu exposicion",
                "picture": "http://www.webquestcreator2.com/majwq/files/files_user/62538/hola-gif-21.gif",
            },
        };
        this.manejarEnvioDeFormulario = this.manejarEnvioDeFormulario.bind(this);
        this.manejarCambio = this.manejarCambio.bind(this);


    }

    render() {
        return (
    
            <div className="columns central">

              <div className="column"></div>

                <div className="column" >

                    <div className="cardCrearExposicion">
                    <center>
                        <h1 className="crearExposicionletra"> ¡EXPOSICION VIRTUAL! </h1>                
                        
                        <form className="" onSubmit={this.manejarEnvioDeFormulario}>

                            <div className="form-group">                            
                                <input autoFocus required placeholder="🆎Titulo ✔" type="text" id="title" className="FondoInput"  onChange={this.manejarCambio} value={this.state.data.title} >
                                </input> 
                                
                            </div>

                            <span> </span>

                            <div className="form-group">
                                <textarea rows="3" placeholder="☕ Describe tu exposición" className="FondoInput" id="description"  onChange={this.manejarCambio} value={this.state.data.description}></textarea>
                            </div>  

                            <div className="form-group">
                                <input autoFocus required placeholder="🅱️ Imagen Representativa" type="text" id="picture"className="FondoInput"  onChange={this.manejarCambio} value={this.state.data.picture} >
                                </input>
                            </div>                            
                                                    

                            <div className="form-group">
                                <button className="button is-primary mt-2">
                                    Crear Exposicion
                                </button>
                            </div>   
                        </form>
                        
                        <PaginasExposiciones todo={this.state.data}></PaginasExposiciones>

                    </center>
                    </div>
                </div>
                
                <div className="column" >
                    
                </div>

            </div>
            
        );
    }

    async manejarEnvioDeFormulario(evento) {

        const continuar = () =>{
            swal({
              title: "Creacion",
              text: "Tu exposicion ha sido creada",
              icon: "success",              
            }).then(function() {
                window.location = "/AdministrarExposiciones";
            });
        }

        const detener = () =>{
            swal({
              title: "Error",
              text: "Surgio un error al crear la exposicion",
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
        //console.log(cargaUtil);   

        var respuesta = await fetch(`https://proyecto-meca-cali.herokuapp.com/VirtualExpositions/Create`, 
        {
            method: "POST",            
            body: cargaUtil,   
        });

        //console.log("respuesta de todo",respuesta) 


       
        var statusr=respuesta.status; 
       
        
        if (statusr===201) {
           
            this.setState({
                data: {
                    "user_id": this.state.id_user,
                    "title":"Bienvenido",
                    "description":"Describe tu exposicion",
                    "picture": "http://www.webquestcreator2.com/majwq/files/files_user/62538/hola-gif-21.gif",
           
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
export default CrearExposicionesVirtuales;