import React from 'react';
import '../Styles/menuadministrativo.css';
//import Constantes from "../Constantes";

import Cookies from 'universal-cookie';

const cookies = new Cookies();

const email2 = cookies.get('email');
const manager = cookies.get('manager');

class MenuUsuario extends React.Component {   
    constructor(props) {
        super(props);
        this.state = {
            data: {
                "email": "",
                "foto": "",         
            },
        };
        // Indicarle a las funciones a quién nos referimos con "this"
    }

    componentDidMount() {
        //const respuesta = await fetch(`${Constantes.RUTA_API}/obtener_foto.py?id=${email2}`);
        //const respuesta = await fetch('/user', { params: { ID: 12345 }});
        //const respuestajson = await respuesta.json();

        /*const response = await fetch('/LostEnergyCalculation/GetGridAndPieChartsData',
            {   method: 'post',
                headers:new Headers({
                    'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }),
                body: `foo=${foo}&bar=${bar}`
            });

        const data: MyApiData = await response.json();
        return data;        
        */

        const respuestajson = "https://media-exp1.licdn.com/dms/image/C4D03AQHFkyjMqzvvlg/profile-displayphoto-shrink_200_200/0/1618892124538?e=1655942400&v=beta&t=yH-dLYSou-J55Fz6w3QQPG5ZtaTKpK3T5sAfUzZfb4I";

        this.setState({
          data: {
              email: email2,
              foto: respuestajson,
          }
        });


    }

    cerrarSesion=()=>{
        cookies.remove('email', {path: "/"});
        cookies.remove('manager', {path: "/"});       
        window.location.href='./';
    }




    render() {

        console.log('email2 '+ email2);

        console.log('foto '+ this.state.data.foto);
        
        return (            

            <div className="columns central">


              <div className="column"></div>

                <div className="column" >

                  <div className="cardMenuAdmin">
                    <center>

                      <div className="photo-container">
                            <img alt="..." src={this.state.data.foto}>
                            </img>
                      </div>

                      <h1 className="title">¡Bienvenido al Menu!</h1> 
                    

                      <div className="separador">
                         
                          <button className="button is-primary mt-2">
                            <a rel="noreferrer" href="/Perfil">Perfil</a>
                          </button>

                           <span> <br></br> </span>


                          <button className="button is-primary mt-2">
                            <a rel="noreferrer" href="/ExposicionesVirtuales">Exposiciones Virtuales</a>
                          </button>

                           <span> <br></br>  </span>



                          <button className="button is-primary mt-2" onClick={()=>this.cerrarSesion()}>
                            <a rel="noreferrer" href="/">Salir</a>
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

export default MenuUsuario;