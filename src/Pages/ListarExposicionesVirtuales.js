
import React,{useState} from 'react';
//import Constantes from "../Constantes";

import 'react-toastify/dist/ReactToastify.css';
import '../App.css';
import '../Styles/administrarExposiciones.css';

import swal from 'sweetalert';
import {Paginacion} from '../Components/Paginacion';
import {Pokemons} from '../Data/Pokemons';
import styles from '../styles.module.scss';

import Cookies from 'universal-cookie';
const cookies = new Cookies();



function PaginasExposiciones (props) {
  const [pagina, setPagina] = useState (1);
  const [porPagina, setPorPagina] = useState (3);


  const Expo=props.todo;
  //console.log("Lo que llega a paginar paginas",Expo)

  const maximo = Expo.length / porPagina;

  //console.log("maximo",maximo)

  return (
    



    <div className={styles.container}>
      <div className={styles.containerPoke}>
      {Expo.slice (
        (pagina - 1) * porPagina,
        (pagina - 1) * porPagina + porPagina
      ).map ((Expo, i) => (
        <div key={i} className={styles.pokeContainer}>

            <button id="expo">

              <h3>ID: {Expo.id}</h3>  
              <div className={styles.imgContainer}>
                <img src={Expo.picture} alt={Expo.title} />
              </div>
              <p >{Expo.title}</p>  
            </button>

            

        </div>
      ))}
      </div>

      <Paginacion pagina={pagina} setPagina={setPagina} maximo={maximo} />
    </div>
  );
}



class ListarExposicionesVirtuales extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data: {
            "id": "", 
            "busqueda": "",
            "Exposiciones": [],
            "BusquedaExposicion": [],
          },
        };

        this.componentDidMount1 = this.componentDidMount1.bind(this);
        this.componentDidMount2 = this.componentDidMount2.bind(this);
        this.manejarCambio = this.manejarCambio.bind(this);        
        this.observarExposicion = this.observarExposicion.bind(this);
    }

    async componentDidMount1() {

        var respuesta = await fetch(`https://proyecto-meca-cali.herokuapp.com/VirtualExpositions`, 
        {
            method: "GET",    
        });            
        
        var existe;
        var statusr=respuesta.status;  

        if (statusr===200) {
            existe= await respuesta.json(); 
            
            this.setState({
                data: {
                    id:  this.state.data.id, 
                    Exposiciones:  existe,  
                    busqueda: this.state.data.busqueda,
                    BusquedaExposicion: this.state.data.BusquedaExposicion,                         
                }
            });
        }
    }



    async componentDidMount2() {

        if (this.state.data.busqueda==="") {
            
            var respuesta2 = await fetch(`https://proyecto-meca-cali.herokuapp.com/VirtualExpositions`, 
            {
                method: "GET",    
            });            
            
            var existe2;
            var statusr=respuesta2.status;  

            if (statusr===200) {
                existe2= await respuesta2.json(); 
                
                this.setState({
                    data: {
                        id:  this.state.data.id, 
                        Exposiciones:  this.state.data.Exposiciones,  
                        busqueda: this.state.data.busqueda,
                        BusquedaExposicion: existe2,                         
                    }
                });
            }

        }else{        
            var respuesta = await fetch(`https://proyecto-meca-cali.herokuapp.com/VirtualExpositions/Search/title/`+this.state.data.busqueda, 
            {
                method: "GET",    
            });            
            
            var existe;
            var statusr=respuesta.status;  

            if (statusr===200) {
                existe= await respuesta.json(); 
                
                this.setState({
                    data: {
                        id:  this.state.data.id, 
                        Exposiciones:  this.state.data.Exposiciones,  
                        busqueda: this.state.data.busqueda,
                        BusquedaExposicion: existe,                         
                    }
                });
            }
        }

    }


    render() {
        return (
    
            <div className="columns central">

              <div className="column"></div>

                <div className="column is-two-thirds" >

                    <div className="card2">
                    <center>

                        <h1 className="adminExpoletra"> EXPOSICIONES DIGITALES! </h1>   

                        <br></br>

                        <div className="form-group">                                
                            <input autoFocus required placeholder="Buscar Titulo" type="text" id="busqueda" className="FondoInput" onChange={this.manejarCambio} value={this.state.data.busqueda} >
                            </input>
                        </div>

                        <div className="form-group">
                            <button className="button is-success mt-2" onClick={this.componentDidMount2}>
                                Mostrar Exposiciones
                            </button>
                        </div>

                        {this.state.data.BusquedaExposicion.length===0 ?(
                            <h3>Cargando...</h3>
                            ):( 
                                <PaginasExposiciones todo={this.state.data.BusquedaExposicion}></PaginasExposiciones>                                                      
                            )
                        } 

                        <br></br>
                        
                        <div className="form-group">                                
                            <input autoFocus required placeholder="Id" type="text" id="id" className="FondoInput" onChange={this.manejarCambio} value={this.state.data.id} >
                            </input>
                        </div>
                                             

                        <div className="form-group">
                            <button className="button is-success mt-2" onClick={this.observarExposicion}>
                                Ver Exposicion
                            </button>
                        </div>

                        

                        



                         
            
                    </center>
                    </div>
                </div>
                
                <div className="column" >
                    
                </div>

            </div>
            
        );
    }


    async observarExposicion(evento){
        evento.preventDefault();

        const continuar = () =>{
                swal({
                  title: "Hola!",
                  text: "Ahora podras ver la exposicion "+this.state.data.id,
                  icon: "success",                        
                }).then(function() {
                    
                    window.location = "/ExposicionesVirtuales";
                    
                });
        }

        const detener = () =>{
            swal({
              title: "Error",
              text: "No existe esa exposicion",
              icon: "error",
              timer: 6000,
            });
        }  

        var respuesta = await fetch(`https://proyecto-meca-cali.herokuapp.com//VirtualExpositions/Search/id/`+this.state.data.id, 
        {
            method: "GET",    
        });   

        var existe;
        existe= await respuesta.json();   

        if (Object.keys(existe).length === 0) {            
            detener()
        }else{
            //cookies.set('idexpo', this.state.data.id, {path: "/"});
            continuar()
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

export default ListarExposicionesVirtuales;