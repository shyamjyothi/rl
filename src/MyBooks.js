import {Component} from 'react';
import {EditBtn, DeleteBtn}  from './Icons';
import './App.css';
import AWS from 'aws-sdk';


//AWS Dynamo API Keys
AWS.config.update({
    region: process.env.REACT_APP_region,
    accessKeyId: process.env.REACT_APP_accessKeyId,
    secretAccessKey:  process.env.REACTAPP_secretAccessKey
})
//Constant Variables
const dynamoClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = "rl_books";

class MyBooks extends Component {
    constructor(props) {
        super(props);
        console.log("books");
        console.log(this.props.items);
        this.showDeleteAlert = this.showDeleteAlert.bind(this);
        this.state = ({
            showAlert : false,
            currentUID : ''
        })
    }

    showDeleteAlert = (uid) => {
        this.setState({showAlert: true, currentUID: uid})
    }

    hideDeleteAlert = () => {
        this.setState({showAlert: false, currentUID: ''})
    }

    deleteBook = () => {
        if(this.state.currentUID != '') { 
            var param = {
                TableName : TABLE_NAME,
                Key:{
                    uid: this.state.currentUID                  
                }
            }
            dynamoClient.delete(param).promise().then( ()=> {
                console.log(this.state.currentUID)
                this.setState({showAlert: false, currentUID: ''})
                this.hideAdd();
            })           
        }
    }

    hideAdd = () => {
        this.props.hideAdd();
    }

    render() {
        return (
            <div>
                <table className="table-sm table table-light table-striped table-hover table-bordered border-dark">
                    <thead>
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Book Title</th>
                            <th scope="col">Author</th>
                            <th scope="col">Action</th>
                        </tr>                    
                    </thead>
                    <tbody>
                        { this.props.items.length > 0 ? 
                            this.props.items.map((book,index) => {
                                return (
                                    <tr>
                                        <td scope="row"><small>{book.book_date}</small></td>
                                        <td scope="row">{book.book_title}</td>
                                        <td scope="row">{book.book_author}</td>
                                        <td scope="row">                                    
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16" className="del-btn" onClick={() => this.showDeleteAlert(book.uid)}>  
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                        </svg> 
                                        </td>
                                    </tr>
                                )                    
                            })
                        : <tr></tr>}
                                        
                    </tbody>
                </table>
                {/* Alert Screen */}
                {this.state.showAlert ? 
                <div class="modal show" tabindex="-1" role="dialog">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Delete Confirmation</h5>
                                
                             
                            </div>
                            <div class="modal-body">
                                <p>Do you want to Delete the item?</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-sm btn-primary" onClick={this.hideDeleteAlert}>Cancel</button>
                                <button type="button" class="btn btn-sm btn-danger" data-dismiss="modal" onClick = {this.deleteBook}>Delete</button>
                            </div>
                            </div>
                        </div>
                    </div> : <div />
                }

            </div>
        )
    }
}



export default MyBooks;