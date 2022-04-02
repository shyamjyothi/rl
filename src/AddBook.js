import {Component} from 'react';
import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';



//AWS Dynamo API Keys
AWS.config.update({
    region: process.env.REACT_APP_AWS_REGION,
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey:  process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
  })

//Constant Variables
const dynamoClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = "rl_books"

class AddBook extends Component {

    constructor(props) {
        super(props);
        this.hideAdd = this.hideAdd.bind(this);
        this.addBook = this.addBook.bind(this);
        this.refresh = this.refresh.bind(this);
        this.state = {
            showAddBook: false,
            bookname: '',
            bookauthor: '',
            bookdate: '',
            errMgs: '',
            errMsgClass: 'alert alert-danger hide',
            email_id: localStorage.getItem('email_id')
        }

    }


    hideAdd = () => {
        this.props.hideAdd();
    }

    refresh = () => {
        this.props.refresh();
    }

    addBook = () => {
        if(this.state.bookname.trim() === ''){
            this.setState({errMsgClass: 'alert alert-danger show', errMsg: 'book Title is mandatory'});
            return false;
        }
        if(this.state.bookauthor.trim() === ''){
            this.setState({errMsgClass: 'alert alert-danger show', errMsg: 'Author is mandatory'});
            return false;
        }
        if(this.state.bookdate.trim() === ''){
            this.setState({errMsgClass: 'alert alert-danger show', errMsg: 'Date is mandatory'});
            return false;
        }

       this.saveBook();

    }

    saveBook = async () => {

        var UID =  uuidv4()
        var email = localStorage.getItem("rl_user_id")
        var bookInfo = {
            uid: UID,
            email_id: email,
            book_title: this.state.bookname,
            book_author: this.state.bookauthor,
            book_date: this.state.bookdate
        }

        var create_params = {
            TableName : TABLE_NAME,          
            Item: bookInfo
          };
       
        var result = await dynamoClient.put(create_params).promise();
        this.hideAdd();
        //refresh books screen
        console.log("refesh books")
        this.props.refresh();



    }

    render() {
        return (
            <div className="modal show" id="modalAddBook" tabindex="-1" aria-labelledby="modalAddBookLabel" aria-hidden="true" >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="modalAddBookLabel">Add a new Book</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={this.hideAdd}></button>
                        </div>
                        <div className="modal-body">
                        <form>
                                <div className="mn-3">
                                <div className={this.state.errMsgClass} role="alert" >
                                    {this.state.errMsg}
                                </div>                      
                                </div>
                                <div className="mb-3">
                                    <label for="First Name" className="col-form-label">Book Title</label> <span className="mand">*</span>
                                    <input type="text" className="form-control form-control-sm" id="fname" required onChange = { (e) => {this.setState({bookname: e.target.value})}}/>
                                </div>
                                <div className="mb-3">
                                    <label for="First Name" className="col-form-label">Author</label> <span className="mand">*</span>
                                    <input type="text" className="form-control form-control-sm" id="lname" onChange = { (e) => {this.setState({bookauthor: e.target.value})}}/>
                                </div>
                                <div className="mb-3">
                                    <label for="First Name" className="col-form-label">Date</label> <span className="mand">*</span>
                                    <input type="date" className="form-control form-control-sm" id="email" placeholder="name@example.com" onChange = { (e) => {this.setState({bookdate: e.target.value})}}/>
                                </div>                                        
                            </form>
                        </div>
                        <div className="modal-footer">
                        
                            <button type="button" className="btn-sm btn-secondary" data-bs-dismiss="modal" onClick={this.hideAdd}>Cancel</button>
                            <button type="button" className="btn-sm btn-primary" onClick={this.addBook}>Add Book</button>
                        </div>
                    </div>
                </div>
            </div> 
        );
    }

}

export default AddBook;
