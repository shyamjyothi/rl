
import {Component} from 'react'
import './App.css';

class Login extends Component {

    constructor(props) {
        super(props);
        this.hideLogin = this.hideLogin.bind(this);
    }

    hideLogin = () => {
        this.props.updateState();
      }

  render() {
      return (
        <div className="modal show" id="modalSignUp" tabindex="-1" aria-labelledby="modalSignUpLabel" aria-hidden="true" >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalSignUpLabel">Register New user</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={this.hideLogin}></button>
            </div>
            <div className="modal-body">
                <form>
                    <div className="mb-3">
                        <label for="First Name" className="col-form-label">Email</label>
                        <input type="text" className="form-control" id="fname" />
                    </div>
                    <div className="mb-3">
                        <label for="Last Name" className="col-form-label">Password</label>
                        <input type="password" className="form-control" id="lname" />
                    </div>             
                </form>
              </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={this.hideLogin}>Cancel   </button>
              <button type="button" className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div> 
      )
  }
}

export default Login;