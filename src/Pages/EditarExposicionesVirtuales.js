import React,{useState} from 'react';

import '../App.css';
import '../Styles/editarExposicion.css';

import ReactPlayer from 'react-player';

import swal from 'sweetalert';

import {Paginacion} from '../Components/Paginacion';
import styles from '../styles.module.scss';

import Cookies from 'universal-cookie';
const cookies = new Cookies();

//const id_ser3 = parseInt(cookies.get('idUser'));


const id_ser3=1;
const id_expo=4;



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
          
          <div className={styles.imgContainer}>
            <img src={Expo.picture} alt="No cargo la imagen" />
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
            <h3 className=""> {tituYparra.text} </h3>                
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
                "virtual_exposition_id": id_expo,
                "title":"Rodacanta",
                "description":"Fundada en 1998 para ayudar a los niños", 
                "background" : "https://c8.alamy.com/compes/2bnjm90/ilustracion-de-dibujos-animados-de-fondo-con-diferentes-ninos-y-un-lugar-vacio-para-su-texto-2bnjm90.jpg",   
                "biography":"Aqui va informacion de los creadores",
                "estructure" : "1",
                "audio": "https://cdn.pixabay.com/download/audio/2022/04/27/audio_67bcf729cf.mp3?filename=whip-110235.mp3",    
            
            },            
            datasub:{
                "user_id": id_ser3,  
                "virtual_exposition_id": id_expo,
                "type_id": 2,
                "text":"subtilo Una Fundacion De Ayuda",
            },
            
            datavid:{
                "user_id": id_ser3,  
                "virtual_exposition_id": id_expo,
                "type_id": 3,
                "video":'https://www.youtube.com/watch?v=pLBuFxMYkx8', 
            },
            datapho:{
                "user_id": id_ser3,  
                "virtual_exposition_id": id_expo,
                "type_id": 5,
                "path":"http://www.webquestcreator2.com/majwq/files/files_user/62538/hola-gif-21.gif",                         
            },

            comentario: {
                "user_id": id_ser3,  
                "virtual_exposition_id": id_expo,
                "type_id": 6,
                "comment":"Podemos quitar comentarios incorrectos (esta pendiente)",
            },
        };
        
        //this.manejarEnvioDeFormulario = this.manejarEnvioDeFormulario.bind(this);
        
        
        this.CrearSubtitle= this.CrearSubtitle.bind(this);
        this.CrearVideo= this.CrearVideo.bind(this);
        this.CrearPhoto= this.CrearPhoto.bind(this);




        this.EliminarVideo= this.EliminarVideo.bind(this);
        this.EliminarSubtitle= this.EliminarSubtitle.bind(this);
        this.EliminarPhoto= this.EliminarPhoto.bind(this);
        this.EliminarComment= this.EliminarComment.bind(this);

        
        this.manejarCambiodata = this.manejarCambiodata.bind(this);
        this.manejarCambiodatasub = this.manejarCambiodatasub.bind(this);
        this.manejarCambiodatavid = this.manejarCambiodatavid.bind(this);
        this.manejarCambiodatapho = this.manejarCambiodatapho.bind(this);
        this.manejarCambiocomment = this.manejarCambiocomment.bind(this);

        this.componentDidMount2= this.componentDidMount2.bind(this);


    }


    async componentDidMount2() {

        var respuesta = await fetch(`https://proyecto-meca-cali.herokuapp.com/VirtualExpositions/Menu`, 
        {
            method: "GET",    
        });
              
        
        var existe;
        var statusr=respuesta.status;  

        console.log("la statusr", statusr)

        if (statusr===200) {
            existe= await respuesta.json(); 
            //console.log("la respuesta", existe)
            
            this.setState({
                data: {
                    id:  this.state.data.id, 
                    Usuarios:  existe,                            
                }
            });
        }
    }


    render() {

        const estru = this.state.data.estructure;

        let PROTOTIPO;

        if (estru==="1") {
            PROTOTIPO= <TitulosYParrafos titulosYparrafos={this.state.data}></TitulosYParrafos>
        }


        return (
            <div className="">
    
            <div className="columns central">

              <div className="column"></div>

                <div className="column" >

                    <div className="cardEditarExposicion">
                    <center>
                        <h1 className="EditarExposicionletra"> EDICION Y CREACION LA EXPOSICION DIGITAL! </h1>                
                        
                        <form className="">

                            <div>

                                <div className="form-group">
                                    🅱
                                    <input autoFocus required placeholder="Estructura" type="text" id="estructure"className="FondoInput"  onChange={this.manejarCambiodata} value={this.state.data.estructure}>
                                    </input>
                                </div>

                                <div className="form-group">
                                    🆎
                                    <input autoFocus required placeholder="Titulo" type="text" id="title" className="FondoInput"  onChange={this.manejarCambiodata} value={this.state.data.title} >
                                    </input> 
                                </div>

                                <div className="form-group">
                                    🆎
                                    <input autoFocus required placeholder="Fondo" type="text" id="background" className="FondoInput"  onChange={this.manejarCambiodata} value={this.state.data.background} >
                                    </input> 
                                </div>

                                <div className="form-group">  
                                    🆎  <span>></span>        
                                    <textarea placeholder=" Biografia " className="FondoInput" id="biography"  onChange={this.manejarCambiodata} value={this.state.data.biography}></textarea>
                                </div>

                                

                                <div className="form-group">
                                    🅱
                                    <input autoFocus required placeholder=" Audio" type="text" id="audio"className="FondoInput"  onChange={this.manejarCambiodata} value={this.state.data.audio} >
                                    </input>
                                </div>

                                <div className="form-group"> 
                                    🅱 <span>></span>                                                          
                                    <textarea placeholder="☕ Descripcion " className="FondoInput" id="description"  onChange={this.manejarCambiodata} value={this.state.data.description}></textarea>
                                </div>  

                                <div className="form-group">
                                    <button className="button is-primary mt-2">
                                        Crear Exposicion
                                    </button>
                                </div> 
                            </div>

                            <br></br>
                            <br></br>



                            <div className="form-group">
                                <button className="button is-primary mt-2" onClick={this.CrearSubtitle}>
                                    +
                                </button>
                                <input autoFocus required placeholder="SubTitulo" type="text" id="text" className="FondoInput"  onChange={this.manejarCambiodatasub} value={this.state.datasub.text} >
                                </input> 
                                <button className="button is-primary mt-2"  onClick={this.EliminarSubtitle}>
                                    -
                                </button>
                            </div>


                            <div className="form-group">
                                <button className="button is-primary mt-2" onClick={this.CrearVideo}>
                                    +
                                </button>
                                <input autoFocus required placeholder="Video" type="text" id="video" className="FondoInput"  onChange={this.manejarCambiodatavid} value={this.state.datavid.video} >
                                </input> 
                                <button className="button is-primary mt-2" onClick={this.EliminarVideo}>
                                    -
                                </button>
                            </div>
                           
                            <div className="form-group">
                                <button className="button is-primary mt-2" onClick={this.CrearPhoto}>
                                    +
                                </button>
                                <input autoFocus required placeholder="Fotos" type="text" id="path" className="FondoInput"  onChange={this.manejarCambiodatapho} value={this.state.datapho.path} >
                                </input> 
                                <button className="button is-primary mt-2" onClick={this.EliminarPhoto}>
                                    -
                                </button>
                            </div>

                            <div className="form-group">                                
                                <input autoFocus required placeholder="Comentario" type="text" id="comment" className="FondoInput"  onChange={this.manejarCambiocomment} value={this.state.comentario.comment} >
                                </input> 
                                <br></br>
                                <button className="button is-primary mt-2" onClick={this.EliminarComment}>
                                    -
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
                        <h1 className="EditarExposicionletra"> ¡VISUALIZAR PROTOTIPO ESTRUCTURAL!</h1>                
                        
                                                      
                        {PROTOTIPO}

                        {/*<TitulosYParrafos titulosYparrafos={this.state.data}></TitulosYParrafos>

                        
                        <Videos video={this.state.data}></Videos>

                        
                        <AudioFondo audio={this.state.data}></AudioFondo>



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



    async CrearSubtitle(evento) {
        const continuar = () =>{
            swal({
              title: "Creacion",
              text: "Tu exposicion ha sido creada",
              icon: "success",              
            }).then(function() {
                window.location = "/EditarExposicionesVirtuales";
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
        const cargaUtil = JSON.stringify(this.state.datasub);
        console.log(cargaUtil);   
        var respuesta = await fetch(`https://proyecto-meca-cali.herokuapp.com/Multimedia/Create`, 
        {
            method: "POST",            
            body: cargaUtil,   
        });

        console.log("respuesta de todo",respuesta) 
       
        var statusr=respuesta.status; 
        
        if (statusr===201) {
           
            this.setState({
                datasub: {
                    "user_id": id_ser3,  
                    "virtual_exposition_id": id_expo,
                    "type_id": 2,
                    "text":"subtilo Una Fundacion De Ayuda",
                }
            });

            continuar(); 

        } else {        
            detener();
        }
        
    }

    async CrearVideo(evento) {
        const continuar = () =>{
            swal({
              title: "Creacion",
              text: "Tu exposicion ha sido creada",
              icon: "success",              
            }).then(function() {
                window.location = "/EditarExposicionesVirtuales";
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
        const cargaUtil = JSON.stringify(this.state.datavid);
        console.log(cargaUtil);   
        var respuesta = await fetch(`https://proyecto-meca-cali.herokuapp.com/Multimedia/Create`, 
        {
            method: "POST",            
            body: cargaUtil,   
        });

        console.log("respuesta de todo",respuesta) 
       
        var statusr=respuesta.status; 
        
        if (statusr===201) {
           
            this.setState({
                datavid: {
                    "user_id": id_ser3,  
                    "virtual_exposition_id": id_expo,
                    "type_id": 3,
                    "video":'https://www.youtube.com/watch?v=pLBuFxMYkx8',             
                }
            });

            continuar(); 

        } else {        
            detener();
        }
        
    }

    async CrearPhoto(evento) {
        const continuar = () =>{
            swal({
              title: "Creacion",
              text: "Tu exposicion ha sido creada",
              icon: "success",              
            }).then(function() {
                window.location = "/EditarExposicionesVirtuales";
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
        const cargaUtil = JSON.stringify(this.state.datapho);
        console.log(cargaUtil);   
        var respuesta = await fetch(`https://proyecto-meca-cali.herokuapp.com/Multimedia/Create`, 
        {
            method: "POST",            
            body: cargaUtil,   
        });

        console.log("respuesta de todo",respuesta) 
       
        var statusr=respuesta.status; 
        
        if (statusr===201) {
           
            this.setState({
                datapho:{
                    "user_id": id_ser3,  
                    "virtual_exposition_id": id_expo,
                    "type_id": 5,
                    "path":"http://www.webquestcreator2.com/majwq/files/files_user/62538/hola-gif-21.gif",                         
                }
            });

            continuar(); 

        } else {        
            detener();
        }
        
    }





    async EliminarSubtitle(evento) {
        const continuar = () =>{
            swal({
              title: "Creacion",
              text: "Tu exposicion ha sido creada",
              icon: "success",              
            }).then(function() {
                window.location = "/EditarExposicionesVirtuales";
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


        var respuesta = await fetch(`https://proyecto-meca-cali.herokuapp.com/Multimedia/Delete/`+parseInt(this.state.datasub.text), 
        {
            method: "DELETE",    
        });

        console.log("respuesta de todo",respuesta) 
       
        var statusr=respuesta.status; 
        
        if (statusr===200) {
           
            this.setState({
                datasub: {
                    "user_id": id_ser3,  
                    "virtual_exposition_id": id_expo,
                    "type_id": 2,
                    "text":"subtilo Una Fundacion De Ayuda",
                }
            });

            continuar(); 

        } else {        
            detener();
        }
        
    }

    async EliminarVideo(evento) {
        const continuar = () =>{
            swal({
              title: "Creacion",
              text: "Tu exposicion ha sido creada",
              icon: "success",              
            }).then(function() {
                window.location = "/EditarExposicionesVirtuales";
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


        var respuesta = await fetch(`https://proyecto-meca-cali.herokuapp.com/Multimedia/Delete/`+parseInt(this.state.datavid.video), 
        {
            method: "DELETE",    
        });

        console.log("respuesta de todo",respuesta) 
       
        var statusr=respuesta.status; 
        
        if (statusr===200) {
           
            this.setState({
                datavid: {
                    "user_id": id_ser3,  
                    "virtual_exposition_id": id_expo,
                    "type_id": 3,
                    "video":'https://www.youtube.com/watch?v=pLBuFxMYkx8', 
                }
            });

            continuar(); 

        } else {        
            detener();
        }
        
    }

    async EliminarPhoto(evento) {
        const continuar = () =>{
            swal({
              title: "Creacion",
              text: "Tu exposicion ha sido creada",
              icon: "success",              
            }).then(function() {
                window.location = "/EditarExposicionesVirtuales";
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


        var respuesta = await fetch(`https://proyecto-meca-cali.herokuapp.com/Multimedia/Delete/`+parseInt(this.state.datapho.path), 
        {
            method: "DELETE",    
        });

        console.log("respuesta de todo",respuesta) 
       
        var statusr=respuesta.status; 
        
        if (statusr===200) {
           
            this.setState({
                datapho: {
                    "user_id": id_ser3,  
                    "virtual_exposition_id": id_expo,
                    "type_id": 5,
                    "path":"http://www.webquestcreator2.com/majwq/files/files_user/62538/hola-gif-21.gif",                         
            
                }
            });

            continuar(); 

        } else {        
            detener();
        }
        
    }

    async EliminarComment(evento) {
        const continuar = () =>{
            swal({
              title: "Creacion",
              text: "Tu exposicion ha sido creada",
              icon: "success",              
            }).then(function() {
                window.location = "/EditarExposicionesVirtuales";
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


        var respuesta = await fetch(`https://proyecto-meca-cali.herokuapp.com/Multimedia/Delete/`+parseInt(this.state.comentario.comment), 
        {
            method: "DELETE",    
        });

        console.log("respuesta de todo",respuesta) 
       
        var statusr=respuesta.status; 
        
        if (statusr===200) {
           
            this.setState({
                comentario: {
                    "user_id": id_ser3,  
                    "virtual_exposition_id": id_expo,
                    "type_id": 6,
                    "comment":"Podemos quitar comentarios incorrectos (esta pendiente)",
                }
            });

            continuar(); 

        } else {        
            detener();
        }
        
    }






    manejarCambiodata(evento) {
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

    manejarCambiodatasub(evento) {   
        const clave = evento.target.id;
        let valor = evento.target.value;
        this.setState(state => {
            const dataActualizado = state.datasub;            
            dataActualizado[clave] = valor;
            return {
                datasub: dataActualizado,
            }
        });
    }

    manejarCambiodatavid(evento) {   
        const clave = evento.target.id;
        let valor = evento.target.value;
        this.setState(state => {
            const dataActualizado = state.datavid;            
            dataActualizado[clave] = valor;
            return {
                datavid: dataActualizado,
            }
        });
    }

    manejarCambiodatapho(evento) {   
        const clave = evento.target.id;
        let valor = evento.target.value;
        this.setState(state => {
            const dataActualizado = state.datapho;            
            dataActualizado[clave] = valor;
            return {
                datapho: dataActualizado,
            }
        });
    }

    manejarCambiocomment(evento) {   
        const clave = evento.target.id;
        let valor = evento.target.value;
        this.setState(state => {
            const dataActualizado = state.comentario;            
            dataActualizado[clave] = valor;
            return {
                comentario: dataActualizado,
            }
        });
    }


}
export default EditarExposicionesVirtuales;