
import {Component} from 'react'
import './App.css';
import AWS from 'aws-sdk';
import './App.css';
import bcrypt from 'bcryptjs';

//AWS Dynamo API Keys
AWS.config.update({
  region: process.env.REACT_APP_region,
  accessKeyId: process.env.REACT_APP_accessKeyId,
  secretAccessKey:  process.env.REACTAPP_secretAccessKey
})

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = "rl_users"
const saltRounds = 10;



class Login extends Component {

    constructor(props) {
        super(props);
        this.hideLogin = this.hideLogin.bind(this);
        this.Login = this.Login.bind(this);

        this.state = {
          email: '',
          pwd: '',
          errMsgClass: 'alert alert-danger hide',
          errMsg: ''
        }
        
    }

    hideLogin = () => {
        this.props.updateState();    
    }

    validate = () => {
      if(this.state.email.trim() ==="") {
        this.setState({errMsgClass: 'alert alert-danger show', errMsg: 'Email is mandatory'});
        return false;
      }
      if(this.state.pwd.trim() === "") {
        this.setState({errMsgClass: 'alert alert-danger show', errMsg: 'Password is mandatory'});
        return false;
      }
      return true;
    }

    Login = () => {   
      if(this.validate()) {       
        this.checkPwd();
      } 
    }

  checkPwd = async () => {
    var check_params = {
      TableName : TABLE_NAME,
      Key: {user_email : this.state.email}
     };
    var component = this;
    var result = await dynamoClient.get(check_params).promise();
    if(result.Item) {
      var pwdHash = result.Item.password;
      bcrypt.compare(this.state.pwd, pwdHash, function(err, res) {
        if(res === true) {
          localStorage.setItem("rl_user_name", "Welcome " + result.Item.first_name + " " + result.Item.last_name)
          localStorage.setItem("rl_user_id", result.Item.user_email)
          component.props.updateState(true);  
          component.props.navigator('/')          
        } else {
            component.setState({errMsgClass: 'alert alert-danger show', errMsg: 'Email or Password is incorrect'});
            return false; 
        }
      });
    } else {
        this.setState({errMsgClass: 'alert alert-danger show', errMsg: 'Email or Password is incorrect'});
        return false;    
    }
        
  }

  render() {    
      return (
        <div className="modal show" id="modalSignUp" tabindex="-1" aria-labelledby="modalSignUpLabel" aria-hidden="true" >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalSignUpLabel">Login to ReadersLog</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={this.hideLogin}></button>
            </div>
            <div className="modal-body">
                <form>
                    <div className="mn-3">
                      <div className={this.state.errMsgClass} role="alert" >
                        {this.state.errMsg}
                      </div>                      
                    </div>
                    <div className="mb-3">
                        <label for="First Name" className="col-form-label">Email</label>
                        <input type="text" className="form-control" id="email" onChange = { (e) => {this.setState({email: e.target.value})}}/>
                    </div>
                    <div className="mb-3">
                        <label for="Last Name" className="col-form-label">Password</label>
                        <input type="password" className="form-control" id="pwd" onChange = { (e) => {this.setState({pwd: e.target.value})}} />
                    </div>             
                </form>
              </div>
            <div className="modal-footer">
              <button type="button" className="btn-sm btn-secondary" data-bs-dismiss="modal" onClick={this.hideLogin}>Cancel   </button>
              <button type="button" className="btn-sm btn-primary" onClick={this.Login}>Login</button>
            </div>
          </div>
        </div>
      </div> 
      )
  }
}

export default Login;