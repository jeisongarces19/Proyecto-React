import React,{useState} from 'react';
import Constantes from "../Constantes";

import 'react-toastify/dist/ReactToastify.css';
import '../App.css';
import '../Styles/listarExposicionesVirtuales.css';

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


class ListarExposicionesVirtuales extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dates: {
                "Datos": "Informacion",               
            },
        };        
        
        this.manejarCambio = this.manejarCambio.bind(this);
    }

    render() {
        return (
           
            <div className="columns central">

              <div className="column"></div>

                <div className="column is-two-thirds" >

                    <div className="card2">
                        <center>
                            <h1 className="is-size-1 colorletra"> ¡Lista Exposiciones Virtuales! </h1>                
                            <PaginasExposiciones></PaginasExposiciones>                  
                        </center>
                    </div>
                </div>
                
                <div className="column" >                    
                </div>

            </div>
            
        );
    }
    

    manejarCambio(evento) {

        /*
        await axios({
          method: "GET",
          url:"https://proyecto-meca-cali.herokuapp.com/Users",
          headers: {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          }
        }).then((response) => {
          const res =response  
          console.log("respuesta1",res)    
        }).catch((error) => {
          if (error.response) {
            console.log("respuesta",error.response)
            console.log("status",error.response.status)
            console.log(error.response.headers)
            }
        });
        */

        const clave = evento.target.id;
        let valor = evento.target.value;
        this.setState(state => {
            const datesActualizado = state.dates;           
            datesActualizado[clave] = valor;
            return {
                dates: datesActualizado,
            }
        });
    }
    
}

export default ListarExposicionesVirtuales;