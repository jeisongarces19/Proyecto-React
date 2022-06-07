
//Nota: Importar en el cuerpo del módulo; reordenar al principio importar/primero 
// los que tienen e l @ deben importarse de primero
import React,{useState} from 'react';

import { Button, Popover } from "@material-ui/core";
import Modal from '@mui/material/Modal';
//import Modal from 'material-ui-modal';

import '../App.css';
import '../Styles/exposicionesVirtuales.css';


import ReactPlayer from 'react-player';

import swal from 'sweetalert';

import {Paginacion} from '../Components/Paginacion';
import styles from '../styles.module.scss';

import Cookies from 'universal-cookie';
const cookies = new Cookies();



const id_ser3 = parseInt(cookies.get('idUser'));
const id_expo = parseInt(cookies.get('idexpo'));
console.log("id_ usuario:",id_ser3)
console.log("id_ exposicion:",id_expo)
//const id_ser3=2;
//const id_expo=2;


//NOTAS: Los nombres de los componentes de React deben comenzar con una letra mayúscula. Los nombres de React Hook deben comenzar con la palabra "use"

function Biblio(props) {

    const biblio=props.infob;

    const [anchorEl, setAnchorEl] =useState(null)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
          <Button aria-describedby={id} variant="contained" onClick={handleClick}>
            Bibliografia
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}            
            anchorOrigin={{
                vertical: 'center',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'center',
                horizontal: 'center',
            }}
          >
            <h5 className="bibliografia">{biblio}</h5>
          </Popover>


        
        </div>
    );
}


function BasicModal(props) {

    const imagen2=props.imagen;     
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
        <Button onClick={handleOpen}>Ver 🔎</Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
          <img  className="boxx" src={imagen2} alt="No cargo la imagen" />
         
        </Modal>
        </div>
    );
}


function PaginasExposiciones (props) {
  const [pagina, setPagina] = useState (1);
  const [porPagina] = useState (3);


  const Expo=props.informacionpath;

  const maximo = Expo.length / porPagina;


  return (
    <div className={styles.container}>
        <div className={styles.containerPoke}>
            {Expo.slice (
            (pagina - 1) * porPagina,
            (pagina - 1) * porPagina + porPagina
            ).map ((Expo, i) => (

            <div /*style={{ width: 250,margin: 20  }}*/ key={i} className={styles.pokeContainer}>  
                 
                    <BasicModal imagen={Expo.path}></BasicModal>
                    <div className={styles.imgContainer}>
                        <img src={Expo.path} alt="No cargo la imagen" >
                        </img>           
                    </div>         
              
                    <p >{Expo.text}</p> 

              
            </div>
            
            ))}
       </div>


      <Paginacion pagina={pagina} setPagina={setPagina} maximo={maximo} />
    </div>
  );
}

function Videos(props) {

    const [pagina, setPagina] = useState (1);
    const [porPagina] = useState (1);


    const videosinfo2=props.informacionvideo;

    const maximo = videosinfo2.length / porPagina;


    return (
        <div className={styles.container}>
            <div >
                {videosinfo2.slice (
                (pagina - 1) * porPagina,
                (pagina - 1) * porPagina + porPagina
                ).map ((videosinfo2, i) => (

                <div key={i} className={styles.pokeContainer}>

                    <div className="contenedor"> 
                        
                        <ReactPlayer 
                            url={videosinfo2.path}
                            controls
                            width='100%'
                            height='100%'
                            className="react-player"
                        />
                    </div>
     


                  
                </div>
                ))}
            </div>

            <Paginacion pagina={pagina} setPagina={setPagina} maximo={maximo} />
        </div>
    );
}

function AudioFondo(props) {

  const audio=props.informacionaudio;

  return (
    <div className="">
        <h1>audio</h1>
        
        <ReactPlayer 
              url={audio} 
              controls
              width= '25%'
              height= "15%"
              backgroundcolor= 'rgba(0, 0, 0, 0.5)'
              className=""
              playing 

        />

    </div>
  );
}

function Parrafos(props){
    const subtitles2=props.informacionsub;
   
    return (
    <div>        
        {subtitles2.map ((subtitles2, i) => (
        <div key={i}>  
            <p className="negrilla">id:{subtitles2.id}</p>
            <h1 >{subtitles2.text}</h1> 
        </div>
        ))}        
    </div>
    );
}


function Comentarios(props){
    const comentario=props.informacioncom;
   
    return (
    <div>        
        {comentario.map ((comentario, i) => (
        <div key={i}>  
            <h1>{comentario.comment}</h1> 
        </div>
        ))}        
    </div>
    );
}


function PROTOTIPO1(props){

    const Informacion=props.informacion;
       
    return (
    <div className="">

        <br></br>

        <div className="tituloP">
            <h1 className="EditarExposicionletra">{Informacion.title.toUpperCase()} </h1>                   
        </div>

        <br></br>

        <h2 className="EditarExposicionletra"></h2>
        <div className="cardPregunta">            
            <p className=""> {Informacion.description} </p>                
        </div> 

        <br></br>

        <div className="cardPregunta2">
            {Informacion.text2.length===0 ?(
                <h2>Cargando subtilos...</h2>
                ):( 
                    <Parrafos informacionsub={Informacion.text2}></Parrafos>                                                                       
                )
            }
        </div>
        

        <br></br>

        <div className="subtituloP cardPregunta2">            
            <Biblio infob={Informacion.bibliography}>a</Biblio>             
        </div> 

        

        <br></br>

        
        <div className="cardPregunta2">

            {Informacion.video2.length===0 ?(
                <h2>Cargando videos...</h2>
                ):( 
                    <Videos informacionvideo={Informacion.video2}></Videos>                                                   
                    
                )
            }
        </div>
        <br></br>

        <div className="cardPregunta2">
            {Informacion.path2.length===0 ?(
                <h2>Cargando imagenes...</h2>
                ):( 
                    <PaginasExposiciones informacionpath={Informacion.path2}></PaginasExposiciones>                                                    
                    
                )
            }
        </div>
        <br></br>

        <div className="cardPregunta2">

            {Informacion.audio.length===0 ?(
                <h2>Cargando audio...</h2>
                ):( 
                    <AudioFondo informacionaudio={Informacion.audio}></AudioFondo>                                                   
                    
                )
            }
        </div>

        <br></br>

        <h1 className="tituloP cardPregunta2"> COMENTARIOS: </h1>
        <div className="cardPregunta2">
            
            {Informacion.comment2.length===0 ?(
                <h2 >Cargando comentarios...</h2>
                ):( 
                    <Comentarios informacioncom={Informacion.comment2}></Comentarios>                                                    
                    
                )
            }
        </div>

        
    
    </div>
    );
}


function PROTOTIPO2(props){

    const Informacion=props.informacion;
}

function ProtoFail(props){
    return (
    <div className="">
        <h1>No existe tal prototipo</h1>
    </div>
    );
}


class ExposicionesVirtuales extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {      
                "user_id": id_ser3,  
                "id": id_expo,
                "title":"",
                "description":"", 
                "background" : "",   
                "bibliography":"",
                "structure" : "1",
                "audio": "",    
                "picture" : "",
            },          
            comentario: {
                "user_id": id_ser3,  
                "virtual_exposition_id": id_expo,
                "comment":"",
            },
            exposicion: {
                "title":"",
                "description":"", 
                "background" : "",   
                "bibliography":"",
                "structure" : "",
                "audio": "", 
                "video2":[], 
                "text2":[],
                "path2":[],                         
                "comment2":[],
            },
        };

        //console.log("la data",this.state.data)
        //console.log("la exposicion",this.state.data)
      

        this.componentDidMount= this.componentDidMount.bind(this);
        this.CrearComentario= this.CrearComentario.bind(this);
        //this.manejarCambiodata = this.manejarCambiodata.bind(this);
        this.manejarCambiocomment = this.manejarCambiocomment.bind(this);


    }

    cerrarSesion=()=>{
        cookies.remove('idexpo', {path: "/"});
        window.location.href='./AdministrarExposiciones';
    }

    async componentDidMount() {
        /* Apartado para los datos*/
        var respuestatodo = await fetch(`https://proyecto-meca-cali.herokuapp.com/VirtualExpositions/Search/id/`+id_expo, 
        {
            method: "GET",    
        });
        var Exposition;
        var statusr=respuestatodo.status;  
        if (statusr===200) {
            Exposition= await respuestatodo.json(); 
            //console.log("la informacion de la exposicion", Exposition)

            var Audio=Exposition.audio;
            var Background=Exposition.background;
            var Bibliography=Exposition.bibliography;
            var Description=Exposition.description;
            var Picture=Exposition.picture;
            var Structure=Exposition.structure;
            var Title=Exposition.title;       
            
            if (Audio===null) {
              Audio="";
            }
            if (Background===null) {
              Background="";
            }
            if (Bibliography===null) {
              Bibliography="";
            }
            if (Description===null) {
              Description="";
            }        
            if (Picture===null) {
              Picture="";
            }
            if (Structure===null) {
              Structure="";
            }
            if (Title===null) {
              Title="";
            }
            
            this.setState({
                
                data: {
                    user_id: this.state.data.user_id,  
                    id: this.state.data.id,
                    title:Title,
                    description:Description, 
                    background:Background,   
                    bibliography:Bibliography,
                    structure:Structure,
                    audio: Audio,    
                    picture: Picture,                            
                },                
                exposicion: {  
                    title:Title,
                    description:Description, 
                    background:Background,   
                    bibliography:Bibliography,
                    structure:Structure,
                    audio:Audio, 
                    video2:this.state.exposicion.video2, 
                    text2:this.state.exposicion.text2,
                    path2:this.state.exposicion.path2,                         
                    comment2:this.state.exposicion.comment2,
                }

            });            
        }


        /* Apartado para los subtitlos*/

        
        var respuesta1 = await fetch(`https://proyecto-meca-cali.herokuapp.com/Multimedia/`+id_expo+`/Subtitle`, 
        {
            method: "GET",    
        });
        var ExpositionSub;
        var statussub=respuesta1.status;
        if (statussub===200) {
            ExpositionSub= await respuesta1.json(); 
            //console.log("la respuesta de los subtilos", ExpositionSub)
            
            if (ExpositionSub===null) {
              ExpositionSub=[];
            }
           
            this.setState({
                exposicion: {  
                    title:this.state.exposicion.title,
                    description:this.state.exposicion.description, 
                    background:this.state.exposicion.background,   
                    bibliography:this.state.exposicion.bibliography,
                    structure:this.state.exposicion.structure,
                    audio:this.state.exposicion.audio, 
                    video2:this.state.exposicion.video2, 
                    text2:ExpositionSub,
                    path2:this.state.exposicion.path2,                         
                    comment2:this.state.exposicion.comment2,
                }
            });
        }        



        /* Apartado para los Videos*/        
        var respuesta2 = await fetch(`https://proyecto-meca-cali.herokuapp.com/Multimedia/`+id_expo+`/Video`, 
        {
            method: "GET",    
        });            
        var ExpositionVideo;
        var statusv=respuesta2.status; 
        if (statusv===200) {
            ExpositionVideo= await respuesta2.json(); 
            //console.log("la respuesta", ExpositionVideo)
            if (ExpositionVideo===null) {
              ExpositionVideo=[];
            }
            this.setState({
                exposicion: {   
                    title:this.state.exposicion.title,
                    description:this.state.exposicion.description, 
                    background:this.state.exposicion.background,   
                    bibliography:this.state.exposicion.bibliography,
                    structure:this.state.exposicion.structure,
                    audio:this.state.exposicion.audio, 
                    video2:ExpositionVideo, 
                    text2:this.state.exposicion.text2,
                    path2:this.state.exposicion.path2,                         
                    comment2:this.state.exposicion.comment2,
                }
            });
        }

        
        /* Apartado para las Imagenes*/    
        var respuesta3 = await fetch(`https://proyecto-meca-cali.herokuapp.com/Multimedia/`+id_expo+`/Images`, 
        {
            method: "GET",    
        });             
        var ExpositionPath;
        var statusPath=respuesta3.status;  
        if (statusPath===200) {
            ExpositionPath= await respuesta3.json(); 
            //console.log("la respuesta", ExpositionPath)
            if (ExpositionPath===null) {
              ExpositionPath=[];
            }
            this.setState({
                exposicion: {      
                    title:this.state.exposicion.title,
                    description:this.state.exposicion.description, 
                    background:this.state.exposicion.background,   
                    bibliography:this.state.exposicion.bibliography,
                    structure:this.state.exposicion.structure,
                    audio:this.state.exposicion.audio, 
                    video2:this.state.exposicion.video2, 
                    text2:this.state.exposicion.text2,
                    path2:ExpositionPath,                         
                    comment2:this.state.exposicion.comment2,
                }
            });        
        }
        
        
        /* Apartado para los Comentarios*/     
        var respuesta4 = await fetch(`https://proyecto-meca-cali.herokuapp.com/Comments/VirtualExposition/`+id_expo, 
        {
            method: "GET",    
        });             
        var ExpositionCom;
        var statusCom=respuesta4.status;          
        if (statusCom===200) {
            ExpositionCom= await respuesta4.json(); 
            //console.log("la respuesta", ExpositionCom)
            if (ExpositionCom===null) {
              ExpositionCom=[];
            }         
            this.setState({
                exposicion: {      
                    title:this.state.exposicion.title,
                    description:this.state.exposicion.description, 
                    background:this.state.exposicion.background,   
                    bibliography:this.state.exposicion.bibliography,
                    structure:this.state.exposicion.structure,
                    audio:this.state.exposicion.audio, 
                    video2:this.state.exposicion.video2, 
                    text2:this.state.exposicion.text2,
                    path2:this.state.exposicion.path2,                         
                    comment2:ExpositionCom,
                }
            });                        
        }
    }


    render() {

        const respuesta_structure = "1";
        let PROTOTIPO;


        if (respuesta_structure==="1") {
            PROTOTIPO= <PROTOTIPO1 informacion={this.state.exposicion}></PROTOTIPO1>
        }else if (respuesta_structure==="2"){
            PROTOTIPO= <PROTOTIPO2 informacion={this.state.exposicion}></PROTOTIPO2>
        }else{
            PROTOTIPO= <ProtoFail informacion={this.state.exposicion}></ProtoFail>
        }


        return (
            <div className="fondobac ">
    
                <div className="">
                    <center>
                        {PROTOTIPO}   
                    </center>   
                </div>

                <div className="columns central">

                    <div className="column"></div>

                    <div className="column" >

                        <div className="cardEditarExposicion">
                        <center>
                        <h2 className="title"> ¡Danos tu opinion! 🧐</h2>             

                        <form className="">

                            <div className="form-group">                                
                                <input autoFocus  placeholder="Agregar comentario" type="text" id="comment" className="FondoInput" onChange={this.manejarCambiocomment} value={this.state.comentario.comment}>
                                </input>
                            </div>   

                            <div className="form-group">
                                <button className="button is-success mt-2" onClick={this.CrearComentario}>
                                    Enviar
                                </button>                     
                            </div>
                        </form>                                             

                        </center>
                        </div>
                    </div>
                
                    <div className="column" ></div>
                </div>

                <div className="columns central">
                    <div className="column"></div>
                    <div className="column" >
                        <div className="cardEditarExposicion">
                            <center>                        
                            <button className="button is-primary mt-2" onClick={()=>this.cerrarSesion()}>
                                <a rel="noreferrer" href="/AdministrarExposiciones">Salir de la exposicion</a>
                            </button>                                   
                            </center>
                        </div>
                    </div>                
                    <div className="column" ></div>
                </div>

            </div>
            
        );
    }




    /*Aqui es donde se crea o actualiza la informacion de los comentarios*/
    async CrearComentario(evento) {

        const continuar = () =>{
            swal({
              title: "Creacion",
              text: "Tu cometario ha sido creado",
              icon: "success",              
            }).then(function() {
                window.location = "/ExposicionesVirtuales";
            });
        }
        const detener = () =>{
            swal({
              title: "Error",
              text: "Surgio un error al crear el comentario",
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
        const cargaUtil = JSON.stringify(this.state.comentario);
        //console.log(cargaUtil);   
        var respuesta = await fetch(`https://proyecto-meca-cali.herokuapp.com/Comments/Create`, 
        {
            method: "POST",            
            body: cargaUtil,   
        });

        //console.log("respuesta de todo",respuesta) 
       
        var statusr=respuesta.status; 
        //console.log("statusr de todo",statusr)         
        
        if (statusr===201) {
           
            this.setState({
                comentario: {      
                    "user_id": id_ser3,  
                    "virtual_exposition_id": id_expo,
                    "comment":"Agregar comentario"
                }                
            });
            continuar(); 

        } else {                
            detener();
        } 
    }

    

    /* --------------------------------------------------------------------------------------*/
    /* Aqui va actualizando la informacion en cada input o cuadro*/
    /*
     
    manejarCambiodata(evento) {
        const clave = evento.target.id;
        let valor = evento.target.value;
        this.setState(state => {
            const dataActualizado = state.data;            
            dataActualizado[clave] = valor;
            //console.log("lo que hay data:",dataActualizado)
            const dataActualizado2 = state.exposicion;            
            dataActualizado2[clave] = valor;
            //console.log("lo que hay expo:",dataActualizado2)
            return {
                data: dataActualizado,                
            }
        });
    }
    */

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
export default ExposicionesVirtuales;