import React,{useState} from 'react';

import '../App.css';
import '../Styles/editarExposicion.css';

import ReactPlayer from 'react-player';

import swal from 'sweetalert';

import {Paginacion} from '../Components/Paginacion';
import styles from '../styles.module.scss';

import Cookies from 'universal-cookie';
const cookies = new Cookies();

const id_ser3 = parseInt(cookies.get('idUser'));



function PaginasExposiciones (props) {
  const [pagina, setPagina] = useState (1);
  const [porPagina, setPorPagina] = useState (3);


  const Expo=props.todo;
  console.log("Lo que llega a paginar paginas",Expo)

  const maximo = Expo.length / porPagina;

  console.log("maximo",maximo)

  return (
    <div className={styles.container}>
      <div className={styles.containerPoke}>
      {Expo.slice (
        (pagina - 1) * porPagina,
        (pagina - 1) * porPagina + porPagina
      ).map ((Expo, i) => (

        <div key={i} className={styles.pokeContainer}>

          <script> var picture='picture'+i.toString()
          console.log(picture)
          </script>   
                     
          
          <div className={styles.imgContainer}>
            <img src={Expo.picture} alt="" />
          </div>/
          <p >{Expo.picture}</p> 
          
        </div>
      ))}
      </div>

      <Paginacion pagina={pagina} setPagina={setPagina} maximo={maximo} />
    </div>
  );
}


function TitulosYParrafos (props) {

  const tituYparra=props.titulosYparrafos;

  return (
    <div className="">
        <div className="">
            <h1 className="EditarExposicionletra"> {tituYparra.title.toUpperCase()} </h1>                
        </div>
        <div className="">
            <h3 className=""> {tituYparra.subtitle} </h3>                
        </div>
        <div className="">
            <h4 className=""> {tituYparra.description} </h4>                
        </div>
    </div>
  );
}


function Videos(props) {

  const video2=props.video;

  return (
    <div className="contenedor">

        <ReactPlayer 
            url={video2.video}
            controls
            width='100%'
            height='100%'
            className="react-player"

        />
    </div>
  );
}

function AudioFondo(props) {

  const audio2=props.audio;

  return (
    <div className="contenedor">

        <ReactPlayer 
              url={audio2.audio} 
              controls
              width= '9%'
              height= "4%"
              backgroundcolor= 'rgba(0, 0, 0, 0.5)'
              className="audiomio"
              playing 

        />

    </div>
  );
}









class EditarExposicionesVirtuales extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {      
                "user_id": id_ser3,     
                "title":"Rodacanta",
                "subtitle":"Una Fundacion De Ayuda",
                "description":"Fundada en 1998 para ayudar a los niños",
                "video":'https://www.youtube.com/watch?v=pLBuFxMYkx8',
                "audio": "https://cdn.pixabay.com/download/audio/2022/04/27/audio_67bcf729cf.mp3?filename=whip-110235.mp3",
                "comment":"Podemos dejar un comentario interesante",
            },
            fotos:[
                {"picture0": "http://www.webquestcreator2.com/majwq/files/files_user/62538/hola-gif-21.gif"},
                {"picture1": "http://www.webquestcreator2.com/majwq/files/files_user/62538/hola-gif-21.gif"},
                {"picture2": "http://www.webquestcreator2.com/majwq/files/files_user/62538/hola-gif-21.gif"},
                {"picture3": "http://www.webquestcreator2.com/majwq/files/files_user/62538/hola-gif-21.gif"}
            ],
        };
        this.manejarEnvioDeFormulario = this.manejarEnvioDeFormulario.bind(this);
        this.manejarCambio = this.manejarCambio.bind(this);
        this.manejarCambio2 = this.manejarCambio2.bind(this);


    }

    render() {
        return (
            <div className="">
    
            <div className="columns central">

              <div className="column"></div>

                <div className="column" >

                    <div className="cardEditarExposicion">
                    <center>
                        <h1 className="EditarExposicionletra"> EDICION Y CREACION LA EXPOSICION DIGITAL! </h1>                
                        
                        <form className="" onSubmit={this.manejarEnvioDeFormulario}>

                            <div className="form-group">
                                <input autoFocus required placeholder="🆎 Titulo ✔" type="text" id="title" className="FondoInput"  onChange={this.manejarCambio} value={this.state.data.title} >
                                </input> 
                            </div>

                            <div className="form-group">
                                <input autoFocus required placeholder="🆎 SubTitulo ✔" type="text" id="subtitle" className="FondoInput"  onChange={this.manejarCambio} value={this.state.data.subtitle} >
                                </input> 
                            </div>

                            <div className="form-group">
                                <textarea placeholder="☕ Descripcion " className="FondoInput" id="description"  onChange={this.manejarCambio} value={this.state.data.description}></textarea>
                            </div>  

                            <div className="form-group">
                                <input autoFocus required placeholder="🅱️ Video" type="text" id="video"className="FondoInput"  onChange={this.manejarCambio} value={this.state.data.video} >
                                </input>
                            </div>  

                            <div className="form-group">
                                <input autoFocus required placeholder="🅱️ Audio" type="text" id="audio"className="FondoInput"  onChange={this.manejarCambio} value={this.state.data.audio} >
                                </input>
                            </div>  

                            <div className="form-group">
                                <input autoFocus required placeholder="🅱️ Foto" type="text" id="picture0"className="FondoInput"  onChange={this.manejarCambio2} value={this.state.fotos.picture0} >
                                </input>
                            </div> 

                            <div className="form-group">
                                <input autoFocus required placeholder="🅱️ Foto" type="text" id="picture1"className="FondoInput"  onChange={this.manejarCambio2} value={this.state.fotos.picture1} >
                                </input>
                            </div> 
                            <div className="form-group">
                                <input autoFocus required placeholder="🅱️ Foto" type="text" id="picture2"className="FondoInput"  onChange={this.manejarCambio2} value={this.state.fotos.picture2} >
                                </input>
                            </div> 

                            <div className="form-group">
                                <input autoFocus required placeholder="🅱️ Foto" type="text" id="picture3"className="FondoInput"  onChange={this.manejarCambio2} value={this.state.fotos.picture3} >
                                </input>
                            </div>    

                            <div className="form-group">
                                <input autoFocus required placeholder="🅱️ comentario" type="text" id="comment"className="FondoInput"  onChange={this.manejarCambio} value={this.state.data.comment} >
                                </input>
                            </div>        

                            <div className="form-group">
                                <button className="button is-primary mt-2">
                                    Crear Exposicion
                                </button>
                            </div>   
                        </form>                      

                    </center>
                    </div>
                </div>
                
                <div className="column" >
                    
                </div>

            </div>


            <div className="columns central">

              <div className="column"></div>

                <div className="column" >

                    <div className="cardEditarExposicion">
                    <center>
                        <h1 className="EditarExposicionletra"> ¡VISUALIZAR PROTOTIPO!</h1>                
                        
                                                
                        <TitulosYParrafos titulosYparrafos={this.state.data}></TitulosYParrafos>

                        
                        <Videos video={this.state.data}></Videos>

                        {console.log(this.state.fotos)}

                        {/*<AudioFondo audio={this.state.data}></AudioFondo>



                        <PaginasExposiciones todo={this.state.fotos}></PaginasExposiciones>*/}



                    </center>
                    </div>
                </div>
                
                <div className="column" >
                    
                </div>

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

        /*
        evento.preventDefault();

        const cargaUtil = JSON.stringify(this.state.data);
        console.log(cargaUtil);   

        var respuesta = await fetch(`https://proyecto-meca-cali.herokuapp.com/VirtualExpositions/Create`, 
        {
            method: "POST",            
            body: cargaUtil,   
        });

        console.log("respuesta de todo",respuesta) 


       
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
        */
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

    manejarCambio2(evento) {

        const clave = evento.target.id;
        let valor = evento.target.value;
        this.setState(state => {
            const dataActualizado = state.fotos;            
            dataActualizado[clave] = valor;
            return {
                fotos: dataActualizado,
            }
        });


    }

}
export default EditarExposicionesVirtuales;