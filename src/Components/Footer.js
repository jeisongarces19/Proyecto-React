import React from 'react';
import "bulma/css/bulma.css";
//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import '../Styles/footer.css';



class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [], text: '' 
    };
    
  }

  render() {
    return (

      <center>

        <footer className="footer">
          <div className="container">
            <nav>
              <ul>
                <li>
                    <a href=" " target="_blank">
                      Created for the Rodacanto Foundation
                    </a>

                </li>

                <span> </span>
                
                <li>
                  <a href=" " target="_blank">
                  MECA Project
                  </a>
                </li>
              </ul>
            </nav>

            <div className="copyright" id="copyright">
              © 2022, Designed by 
              <span> </span>
              <a rel="noreferrer" href="https://www.linkedin.com/in/jeison-garces-casta%C3%B1eda-134b931b2/" target="_blank">
              J and S
              </a>
              <span> </span>
              Coded by 
              <span> </span>
              <a rel="noreferrer" href="https://www.linkedin.com/in/santiflo/" target="_blank">Jeison G and Santiago B</a>.
            </div>
          </div>
        </footer>
      </center>

        
    );
  }

  
}



export default Footer;