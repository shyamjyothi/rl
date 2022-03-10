
import {Component} from 'react';
import {AddBtn,EditBtn,DeleteBtn} from './Icons';

class Books extends Component {

   
 

    render() {

    return (
        
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <h1>READERS LOG</h1>
                </div>           
                <div className="col-8 text-end" style={{marginTop:"6px"}} >
                    <AddBtn />
                </div>
            </div>
            <div className="container">
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
                    <tr>
                        <td scope="row">AUG-2010</td>
                        <td scope="row">The Alchemist</td>
                        <td scope="row">Paulo Coelho</td>
                        <td scope="row"><EditBtn /> <DeleteBtn /></td>
                    </tr>
                    <tr>
                        <td scope="row">AUG-2010</td>
                        <td scope="row">The Alchemist</td>
                        <td scope="row">Paulo Coelho</td>
                        <td scope="row"><EditBtn /> <DeleteBtn /></td>
                    </tr>
                    <tr>
                        <td scope="row">AUG-2010</td>
                        <td scope="row">The Alchemist</td>
                        <td scope="row">Paulo Coelho</td>
                        <td scope="row"><EditBtn /> <DeleteBtn /></td>
                    </tr>
                    <tr>
                        <td scope="row">AUG-2010</td>
                        <td scope="row">The Alchemist</td>
                        <td scope="row">Paulo Coelho</td>
                        <td scope="row"><EditBtn /> <DeleteBtn /></td>
                    </tr>
                    <tr>
                        <td scope="row">AUG-2010</td>
                        <td scope="row">The Alchemist</td>
                        <td scope="row">Paulo Coelho</td>
                        <td scope="row"><EditBtn /> <DeleteBtn /></td>
                    </tr>

                    <tr>
                        <td scope="row">AUG-2010</td>
                        <td scope="row">The Alchemist</td>
                        <td scope="row">Paulo Coelho</td>
                        <td scope="row"><EditBtn /> <DeleteBtn /></td>
                    </tr>
                    <tr>
                        <td scope="row">AUG-2010</td>
                        <td scope="row">The Alchemist</td>
                        <td scope="row">Paulo Coelho</td>
                        <td scope="row"><EditBtn /> <DeleteBtn /></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
      

    )
    }


}







export default Books;