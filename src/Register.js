
import {Component} from 'react'
import './App.css';

class Register extends Component {


  render() {
      return (
        <div className="modal show" id="modalRegister" tabindex="-1" aria-labelledby="modalSignUpLabel" aria-hidden="true" >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalSignUpLabel">New message</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={this.hideLogin}></button>
            </div>
            <div className="modal-body">
              </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={this.hideLogin}>Close</button>
              <button type="button" className="btn btn-primary">Send message</button>
            </div>
          </div>
        </div>
      </div> 
      )
  }
}

export default Register;