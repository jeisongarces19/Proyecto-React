import React from 'react';
import '../Styles/menuadministrativo.css';
//import Constantes from "../Constantes";

import Cookies from 'universal-cookie';

const cookies = new Cookies();

//const email2 = cookies.get('email');
//const manager2 = cookies.get('manager');

class MenuUsuario extends React.Component {   
    constructor(props) {
        super(props);
        this.state = {
            data: {
                "email": "jeison",
                "foto": "https://scontent.fclo11-1.fna.fbcdn.net/v/t1.6435-9/96763841_2560962134004181_6427503684715806720_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_eui2=AeH3cpBhmPB-hqAaoYFwMxZl0F4KPX8zzBvQXgo9fzPMG9JvJhrlLApTCsCh5sT0YRg2lzYIIr817q1iLfdK6o4W&_nc_ohc=hpxMkA-b-nsAX9PlNUp&tn=WDMrf5vqbRb5DBOt&_nc_ht=scontent.fclo11-1.fna&oh=00_AT_nJm-k5lNur0f_u_SbSU9L_HyC1noNsaGMi_dwSxRPYw&oe=62B2C745"  
                //"manager": false,       
            },
        };
        // Indicarle a las funciones a quién nos referimos con "this"
    }

    componentDidMount() {

        const nada=0;

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
        

        const respuestajson = "https://media-exp1.licdn.com/dms/image/C4D03AQHFkyjMqzvvlg/profile-displayphoto-shrink_200_200/0/1618892124538?e=1655942400&v=beta&t=yH-dLYSou-J55Fz6w3QQPG5ZtaTKpK3T5sAfUzZfb4I";

        this.setState({
          data: {
              email: email2,
              foto: respuestajson,
              manager: manager2,
          }
        });*/


    }

    cerrarSesion=()=>{
        //cookies.remove('email', {path: "/"});
        //cookies.remove('manager', {path: "/"});       
        window.location.href='./';
    }




    render() {

        //console.log('email2 '+ email2);

        //console.log('foto '+ this.state.data.foto);
        
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

                      <h1 className="menuletra">¡BIENVENIDO {this.state.data.email.toUpperCase()}!</h1> 
                    

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