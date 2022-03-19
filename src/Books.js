
import {Component} from 'react';
import {AddBtn,EditBtn,DeleteBtn} from './Icons';
import AddBook from './AddBook';
import MyBooks from './MyBooks';
import AWS from 'aws-sdk';



//AWS Dynamo API Keys
AWS.config.update({
    region: process.env.REACT_APP_region,
    accessKeyId: process.env.REACT_APP_accessKeyId,
    secretAccessKey:  process.env.REACTAPP_secretAccessKey
})

//Constant Variables
const dynamoClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = "rl_books"


class Books extends Component {
   constructor(props) {
    super(props);
    this.showAdd = this.showAdd.bind(this);
    this.hideAdd = this.hideAdd.bind(this);
    this.loadBooks =  this.loadBooks.bind(this);
    this.state = {
        showAdd: false,
        books: {},
        showAlert: false
    }
    //console.log("Env11")
    //console.log(process.env)
    this.loadBooks();   
   }

   showAdd = () => {
        if(localStorage.getItem("rl_user_id")) {
            this.setState({showAdd: true});
        } else {
            this.setState({showAlert: true});
        }
    }  

    hideAdd = () => {
        this.setState({showAdd: false});
        this.loadBooks();
    }

    loadBooks = async () => {
        //Query Dynamo DB to get the Books and bind it
        var email = localStorage.getItem("rl_user_id");
        var params = {
            TableName: TABLE_NAME,
            IndexName : 'email_id-book_date-index',
            ScanIndexForward: false,
            KeyConditionExpression: "email_id = :id",           
            ExpressionAttributeValues: {
                ":id": email
            }
        };
        var result = await dynamoClient.query(params).promise();
        if(result.Items) {
            console.log(result)
            this.setState({books: result.Items})
        }
    } 

    render() {
        return (            
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <h1>READERS LOG</h1>
                    </div>           
                    <div className="col-8 text-end" style={{marginTop:"6px"}} >
                        <button type="button" className="btn btn-primary btn-sm" onClick = {this.showAdd}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-square-fill" viewBox="0 0 16 16">
                                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
                            </svg>
                        </button>                       
                    </div>
                    {this.state.showAlert ? 
                         <div className="alert alert-success show" role="alert">
                         Please regsiter to the add books.
                     </div>: <div />                
                    }
                   
                    <div className="container">
                        <MyBooks hideAdd={this.hideAdd} items={this.state.books}/>
                    </div>
                </div>    
                {this.state.showAdd? <AddBook  hideAdd={this.hideAdd}/> : <div />}
            </div>   
        )
    }
}

export default Books;