
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

  console.log("Lo que llega a paginar paginas",props.todo)
  console.log("Lo del pokemon",Pokemons)

  const maximo = Pokemons.length / porPagina;

  console.log("Lo del pokemon lent",Pokemons)

  return (
    <div className={styles.container}>
      <div className={styles.containerPoke}>
      {Pokemons.slice (
        (pagina - 1) * porPagina,
        (pagina - 1) * porPagina + porPagina
      ).map ((pokemon, i) => (
        <div key={i} className={styles.pokeContainer}>
          <div className={styles.imgContainer}>
            <img src={pokemon.img} alt={pokemon.name} />
          </div>
          <p>{pokemon.name}</p>
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
            "Usuarios": [],
          },
        };

        this.componentDidMount = this.componentDidMount.bind(this);
        this.manejarCambio = this.manejarCambio.bind(this);        
        this.observarExposicion = this.observarExposicion.bind(this);
    }

    async componentDidMount() {

        var respuesta = await fetch(`https://proyecto-meca-cali.herokuapp.com/AdminUsers`, 
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
        return (
    
            <div className="columns central">

              <div className="column"></div>

                <div className="column is-two-thirds" >

                    <div className="card2">
                    <center>

                        <h1 className="adminExpoletra"> EXPOSICIONES VIRTUALES! </h1>                
                        
                        {this.state.data.Usuarios.length===0 ?(
                            <h3>Cargando...</h3>
                            ):( 
                                <PaginasExposiciones todo={this.state.data.Usuarios}></PaginasExposiciones>                                                    
                            )
                        } 

                        <br></br>

                        <div className="form-group">                                
                            <input autoFocus required placeholder="Id" type="text" id="id" className="FondoInput" onChange={this.manejarCambio} value={this.state.data.id} >
                            </input>
                        </div>
                        
                        <div className="form-group">
                            <button className="button is-success mt-2" onClick={this.observarExposicion}>
                                Observar Exposicion
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

        cookies.set('idexpo', this.state.data.id, {path: "/"});

        const continuar = () =>{
            swal({
              title: "Hola!",
              text: "Ahora podras ver la exposicion {this.state.data.id}",
              icon: "success",                        
            }).then(function() {
                
                window.location = "/ExposicionesVirtuales";
                
            });
        }

        continuar();

        
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