import {Component} from 'react';
import rl_logo from "./RL_Logo1.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "bootstrap/js/src/button.js";
import "bootstrap/js/src/collapse.js";
import 'bootstrap/js/src/modal.js'
import {Link} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import RouteComponent from './RouteComponent';

class Nav extends Component {

  constructor(props) {
    super(props);
    this.showLogin = this.showLogin.bind(this);
    this.hideLogin = this.hideLogin.bind(this);
    this.showRegister = this.showRegister.bind(this);
    this.hideRegister = this.hideRegister.bind(this);
    this.setUserName = this.setUserName.bind(this);
    this.state = ({showLoginUI: false,showRegisterUI: false, userName: localStorage.getItem("rl_user_name")});
    

  }

  showLogin = () => {
    this.setState({showLoginUI: true});
  }

  hideLogin = () => {
    this.setState({showLoginUI: false});
  }

  showRegister = () => {
    this.setState({showRegisterUI: true});
  }

  hideRegister = () => {
    this.setState({showRegisterUI: false});
  }

  setUserName = () => {
    this.setState({userName: localStorage.getItem("rl_user_name")})
  }



  render() {
      return (    
        <div>       
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
                  <button className="btn btn-sm btn-outline-light" data-bs-toggle="modal" data-bs-taget="#modalSignUp" type="button" onClick={this.showRegister}>Register</button> &nbsp;&nbsp;
                  <button className="btn btn-sm btn-outline-light" data-bs-toggle="modal" data-bs-taget="#modalSignUp" type="button" onClick={this.showLogin}>Login</button>&nbsp;&nbsp;
               
                </form>
                {/* Modal Popups Starts*/}


                { this.state.showLoginUI ? <RouteComponent setuserName={this.setUserName}  updateState={this.hideLogin} Component = {Login} /> : <div></div> }
                { this.state.showRegisterUI ? <RouteComponent setuserName={this.setUserName}  updateState={this.hideRegister} Component = {Register} /> : <div></div> }

                {/*Modal Popups Ends*/}

              
              </div>
              
          </nav> 

        { this.state.userName != '' ? 
          <div className="nav justify-content-end">
            <span> <strong>{this.state.userName}</strong></span>
            </div> : <div></div> }

        </div>
      );
    }
  }

export default Nav;
