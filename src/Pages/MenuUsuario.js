import React from 'react';
import '../Styles/menuadministrativo.css';

class MenuUsuario extends React.Component {   
    constructor(props) {
        super(props);
        this.state = {
            dates: {
                "id": "",                
            },
        };
        // Indicarle a las funciones a quién nos referimos con "this"
    }
    render() {
        
        return (            

            <div className="columns central">


              <div className="column"></div>

                <div className="column" >

                  <div className="cardMenuAdmin">
                    <center>

                      <div className="photo-container">
                            <img alt="..." src="https://media-exp1.licdn.com/dms/image/C4D03AQHFkyjMqzvvlg/profile-displayphoto-shrink_200_200/0/1618892124538?e=1655942400&v=beta&t=yH-dLYSou-J55Fz6w3QQPG5ZtaTKpK3T5sAfUzZfb4I">
                            </img>
                      </div>

                      <h1 className="title">Menu Administrativo</h1> 
                    

                      <div className="separador">
                         
                          <button className="button is-primary mt-2">
                            <a rel="noreferrer" href="/Perfil">Perfil</a>
                          </button>

                           <span> <br></br> </span>


                          <button className="button is-primary mt-2">
                            <a rel="noreferrer" href="/ExposicionesVirtuales">Exposiciones Virtuales</a>
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

export default MenuUsuario;