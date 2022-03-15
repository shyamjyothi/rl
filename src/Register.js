
import {Component} from 'react'
import './App.css';
import AWS from 'aws-sdk';
const bcrypt = require('bcryptjs');
var validator = require('validator')
var passwordValidator = require('password-validator');

//AWS Dynamo API Keys
AWS.config.update({
    region: "",
    accessKeyId: "",
    secretAccessKey:  ""
})

//Constant Variables
const dynamoClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = "rl_users"
const saltRounds = 10;

class Register extends Component {

  constructor(props) {
    super(props);
    this.hideRegister = this.hideRegister.bind(this);
    this.registerUser = this.registerUser.bind(this);

 
    this.state = {
      fname : '',
      lname : '',
      email : '',
      pwd: '',
      cpwd: '',
      errMsgClass : 'alert alert-danger hide',
      errMsg: ''
    }
  }

  hideRegister = () => {
      this.props.updateState();
  }

  validateInput = () => {
    if(this.state.fname.trim() ==="") {
      this.setState({errMsgClass: 'alert alert-danger show', errMsg: 'First Name is mandatory'});
      return false;
    }
    if(this.state.lname.trim() === "") {
      this.setState({errMsgClass: 'alert alert-danger show', errMsg: 'Last Name is mandatory'});
      return false;
    }
    if(this.state.email.trim() === "") {
      this.setState({errMsgClass: 'alert alert-danger show', errMsg: 'Email Address Name is mandatory'});
      return false;
    }
    if(this.state.pwd.trim() === "") {
      this.setState({errMsgClass: 'alert alert-danger show', errMsg: 'Password cannot be empty'});
      return false;
    }
    if(this.state.cpwd.trim() === "") {
      this.setState({errMsgClass: 'alert alert-danger show', errMsg: 'Password cannot be empty'});
      return false;
    }
    if(this.state.pwd !== this.state.cpwd) {
      this.setState({errMsgClass: 'alert alert-danger show', errMsg: 'Passwords and not matching'});
      return false;
    }
    if(!validator.isEmail(this.state.email)) {
      this.setState({errMsgClass: 'alert alert-danger show', errMsg: 'Email is not in valid format'});
      return false;
    }
    if(this.state.pwd.length <= 8 || this.state.pwd.indexOf(' ') > -1 ) {
      this.setState({errMsgClass: 'alert alert-danger show', errMsg: "Password doesnt meet the requirements. Password nust be minimum 8 characters long."});
      return false;
    }
    return true;
  }

  createUser = async (userInfo) => {
    //const navigate = useNavigate();
   var create_params = {
     TableName : TABLE_NAME,
     Item: userInfo
   };

   var check_params = {
    TableName : TABLE_NAME,
    Key: {user_email : this.state.email}
   };

   var result = await dynamoClient.get(check_params).promise()

   if(result.Item) {
     //Email Exist
     this.setState({errMsgClass: 'alert alert-danger show', errMsg: 'The Email has already been registered. Please either Login or use an another Email Address'});
   } else {
      await dynamoClient.put(create_params).promise().catch( (err) => {
        console.log(err);
        this.setState({errMsgClass: 'alert alert-danger show', errMsg: 'Error while creating user.' + err});
      }).then( () => {
        this.props.updateState();
        this.props.navigator("/success");
      });
   } 
   
 }  

  registerUser = () => {    
    if(this.validateInput()) {        
      bcrypt.genSalt(10, (err, Salt) => {
        bcrypt.hash(this.state.pwd, Salt, (err, hash) => {
          var userInfo = {
            user_email: this.state.email,
            first_name: this.state.fname,
            last_name: this.state.lname,
            password:hash
          } ;   
          this.createUser(userInfo);
        });
      });      
       
    }
  }

  render() {
      return (
        <div className="modal show" id="modalRegister" tabindex="-1" aria-labelledby="modalSignUpLabel" aria-hidden="true" >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalSignUpLabel">Regsister New User</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={this.hideRegister}></button>
            </div>
            <div className="modal-body">
            <form>
                    <div className="mn-3">
                      <div className={this.state.errMsgClass} role="alert" >
                        {this.state.errMsg}
                      </div>                      
                    </div>
                    <div className="mb-3">
                        <label for="First Name" className="col-form-label">First Name</label> <span className="mand">*</span>
                        <input type="text" className="form-control form-control-sm" id="fname" required onChange = { (e) => {this.setState({fname: e.target.value})}}/>
                    </div>
                    <div className="mb-3">
                        <label for="First Name" className="col-form-label">Last Name</label> <span className="mand">*</span>
                        <input type="text" className="form-control form-control-sm" id="lname" onChange = { (e) => {this.setState({lname: e.target.value})}}/>
                    </div>
                    <div className="mb-3">
                        <label for="First Name" className="col-form-label">Email Address</label> <span className="mand">*</span>
                        <input type="text" className="form-control form-control-sm" id="email" placeholder="name@example.com" onChange = { (e) => {this.setState({email: e.target.value})}}/>
                    </div>
                    <div className="mb-3">
                        <label for="Last Name" className="col-form-label">Password</label> <span className="mand">*</span>
                        <input type="password" className="form-control form-control-sm" id="pwd" onChange = { (e) => {this.setState({pwd: e.target.value})}}/>
                    </div> 
                    <div className="mb-3">
                        <label for="Last Name" className="col-form-label">Confirm Password</label> <span className="mand">*</span>
                        <input type="password" className="form-control form-control-sm" id="cpwd" onChange = { (e) => {this.setState({cpwd: e.target.value})}}/>
                    </div>             
                </form>
              </div>
            <div className="modal-footer">
            
              <button type="button" className="btn-sm btn-secondary" data-bs-dismiss="modal" onClick={this.hideRegister}>Cancel</button>
              <button type="button" className="btn-sm btn-primary" onClick={this.registerUser}>Register</button>
            </div>
          </div>
        </div>
      </div> 
      )
  }
}

export default Register;