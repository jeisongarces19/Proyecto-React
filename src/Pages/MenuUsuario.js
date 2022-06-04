import React from 'react';
import '../Styles/menuadministrativo.css';

import Cookies from 'universal-cookie';

const cookies = new Cookies();

const email4 = cookies.get('email');
const admin4 = cookies.get('adminis');
const idUser4 = cookies.get('idUser');
//console.log('email43333333 '+ email4);
//console.log('admin433333 '+ admin4);

class MenuUsuario extends React.Component {   
    constructor(props) {
        super(props);
        this.state = {
            data: {
                "name": "",
                "picture": "",                        
            },
        };
        // Indicarle a las funciones a quién nos referimos con "this"
        this.componentDidMount = this.componentDidMount.bind(this)
        
    }

    cerrarSesion=()=>{
        cookies.remove('email', {path: "/"});
        cookies.remove('adminis', {path: "/"});    
        cookies.remove('idUser', {path: "/"});    
        window.location.href='./Login';
    }





    async componentDidMount() {
        
        var respuesta = await fetch(`https://proyecto-meca-cali.herokuapp.com/Menu/`+idUser4, 
        {
            method: "GET",   
        });



        var Users= await respuesta.json();
        //console.log("respuesta de todo",Users) 

        var NombreUser=Users.name;
        var fotousers=Users.picture;
        if (NombreUser===null) {
          NombreUser="https://aj-derteano.github.io/image/images/perfil_animate.png";
        }

        if (fotousers===null) {
          fotousers="https://scontent.fclo8-1.fna.fbcdn.net/v/t1.6435-9/96763841_2560962134004181_6427503684715806720_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_eui2=AeH3cpBhmPB-hqAaoYFwMxZl0F4KPX8zzBvQXgo9fzPMG9JvJhrlLApTCsCh5sT0YRg2lzYIIr817q1iLfdK6o4W&_nc_ohc=hpxMkA-b-nsAX9kB_aN&tn=UeDYw6nmCHgbXVCv&_nc_ht=scontent.fclo8-1.fna&oh=00_AT-ui2dXH2GjHUj2lL72m9uf6myiCJMdzxjJCXfNZunFdg&oe=62B2C745";
        }
        
        this.setState({
          data: {
              name: NombreUser,
              picture: fotousers
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
                            <img alt="..." src={this.state.data.picture} style={{height: "90px"}}>
                            </img>
                      </div>

                      <h1 className="menuletra">¡BIENVENIDO {this.state.data.name.toUpperCase()}!</h1>  
                     
                      <div className="separador">

                          <button className="button is-primary mt-2">
                            <a rel="noreferrer" href="/Perfil">Perfil</a>
                          </button>

                           <span> <br></br> </span>

                         
                          <button className="button is-primary mt-2">
                            <a rel="noreferrer" href="/ListarExposicionesVirtuales">Exposiciones Digitales</a>
                          </button>

                           <span> <br></br> </span>

                          <button className="button is-primary mt-2" onClick={()=>this.cerrarSesion()}>
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

export default MenuUsuario;