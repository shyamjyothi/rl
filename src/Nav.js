import {Component} from 'react';
import rl_logo from "./RL_Logo1.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "bootstrap/js/src/button.js";
import "bootstrap/js/src/collapse.js";
import 'bootstrap/js/src/modal.js'
import 'bootstrap/js/src/carousel.js'
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
    this.logOff = this.logOff.bind(this);
    this.state = ({showLoginUI: false,showRegisterUI: false, userName: localStorage.getItem("rl_user_name")});   

  }

  showLogin = () => {
    this.setState({showLoginUI: true});
  }

  hideLogin = (success) => {
      this.setState({showLoginUI: false});
      if(success) {
        this.setUserName();
      }
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

  logOff = () => {
    localStorage.removeItem("rl_user_name");
    localStorage.removeItem("rl_user_id");
    this.setState({userName: ''})
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
                  {/*<button className="btn btn-sm btn-outline-light" data-bs-toggle="modal" data-bs-taget="#modalSignUp" type="button"><Link to="/video" className="course">Course</Link></button> &nbsp;&nbsp; */}
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
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16" className="signout-btn" onClick={this.logOff}>
              <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
              <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
          </svg>
            </div>
            </div> : <div></div> }

        </div>
      );
    }
  }

export default Nav;
