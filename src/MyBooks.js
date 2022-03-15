import {Component} from 'react';
import {EditBtn, DeleteBtn}  from './Icons'

class MyBooks extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <table className="table table-light table-striped table-hover table-bordered border-dark">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Book Title</th>
                        <th scope="col">Author</th>
                        <th scope="col">Action</th>
                    </tr>                    
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">AUG-2010</td>
                        <td scope="row">The Alchemist</td>
                        <td scope="row">Paulo Coelho</td>
                        <td scope="row"><EditBtn /> <DeleteBtn /></td>
                    </tr>
                </tbody>
            </table>
        )
    }
}



export default MyBooks;