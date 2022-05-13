import React,{useState} from 'react';
import Constantes from "../Constantes";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';
import '../Styles/administrarExposiciones.css';

import ReactPlayer from 'react-player';

import {Paginacion} from '../Components/Paginacion';
import {Pokemons} from '../Data/Pokemons';
import styles from '../styles.module.scss';


function PaginasExposiciones () {
  const [pagina, setPagina] = useState (1);
  const [porPagina, setPorPagina] = useState (3);

  const maximo = Pokemons.length / porPagina;

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



class AdministrarExposiciones extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dates: {
                "email": "https://www.youtube.com/watch?v=ZYy8w5QmdbM",
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

              <div className="column"></div>

                <div className="column is-two-thirds" >

                    <div className="card2">
                    <center>

                        <h1 className="is-size-1 colorletra"> ¡Lista Exposiciones Virtuales! </h1>                
                        <div className="playlist-unit">
                            <div className="playlist-unit-inner">
                                <PaginasExposiciones></PaginasExposiciones>                                 
                            </div>                    
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

export default AdministrarExposiciones;