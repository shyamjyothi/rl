import rl_logo from "./RL_Logo1.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/js/src/collapse.js";
import {Link} from 'react-router-dom';


function Nav() {

    return (   

        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
         
            <a className="navbar-brand">
                <img src={rl_logo} alt="" width="42" height="42" className="d-inline-bloc align-text-center" />RL
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
                  <li className="nav-item">
                 <Link to="/" className="nav-link active">Home</Link>
                  </li>
            
                <li className="nav-item">
                  <Link to="/books" className="nav-link active">Books</Link>
                </li>                
              </ul>

              <form className="d-flex">
                <button className="btn btn-secondary btn-outline-light" data-bs-toggle="modal" data-bs-taget="#modalSignUp">Register</button> &nbsp;&nbsp;
                <button className="btn btn-secondary btn-outline-light" data-bs-toggle="modal" data-bs-taget="#modalSignUp">Login</button>&nbsp;&nbsp;&nbsp;
              </form>


            
         
            </div>
        </nav>     
     
    );
  }
  


export default Nav;