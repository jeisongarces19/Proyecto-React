import React from 'react';
import '../Styles/menuadministrativo.css';

class MenuAdministrativo extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            data: {
                id: "", 
                "foto": "https://scontent.fclo11-1.fna.fbcdn.net/v/t1.18169-9/1384215_422278761205873_1173186583_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=de6eea&_nc_eui2=AeEh-UvJBWP9GEj77TCs_k7Tr332_7LWLAuvffb_stYsCyo5vsFNUrF9170NaGITkXNdAFpFYLxOaJjvit9IZvpd&_nc_ohc=nP6PHZ50xiUAX-5a_-0&_nc_ht=scontent.fclo11-1.fna&oh=00_AT9sh6WaG_yO7-ZGXfkvImh7A5MEuVmocA4N85IZcDK5OA&oe=62AAB0CF",                        
            },
        };
        // Indicarle a las funciones a quién nos referimos con "this"
    }


    async componentDidMount() {
        //const respuesta = await fetch(`${Constantes.RUTA_API}/obtener_videojuegos.php`);
        //const respuestajson = await respuesta.json();
        const iduser = this.props.match.params.id;

        this.setState({
          data: {
              id: this.state.data.id,
              foto: this.state.data.foto,
          }
        });
    }

    render() {        
        return (            

            <div className="columns central">

              <div className="column"></div>

                <div className="column" >

                  <div className="cardMenuAdmin">
                    <center>

                      <div className="photo-container">
                            <img alt="..." src={this.state.data.foto} style={{height: "90px"}}>
                            </img>
                      </div>

                      <h1 className="title">¡Bienvenido al Menu Administrativo!</h1>  
                     
                      <div className="separador">

                          <button className="button is-primary mt-2">
                            <a rel="noreferrer" href="/Perfil">Perfil</a>
                          </button>

                           <span> <br></br> </span>

                         
                          <button className="button is-primary mt-2">
                            <a rel="noreferrer" href="/ExposicionesVirtuales">Exposiciones Virtuales</a>
                          </button>

                           <span> <br></br> </span>


                          <button className="button is-primary mt-2">
                            <a rel="noreferrer" href="/OpcionesAdministrativas">Administrar Usuarios</a>
                          </button>

                           <span> <br></br>  </span>


                          <button className="button is-primary mt-2">
                            <a rel="noreferrer" href="/Login">Salir</a>
                          </button>
                                    
                        </div>
                    </center>
                  </div>
                </div>
                
                <div className="column"></div>

            </div>
            
        );
    }

    
}

export default MenuAdministrativo;