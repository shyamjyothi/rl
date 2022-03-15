import {Component} from 'react';
import Home_2 from './HomeImage2.png'
import Home_1 from './HomeImage.png'

class RegsiterSuccess extends Component {

    render() {
        return (
            <div>
                <div class="alert alert-success show" role="alert">
                    Thank You for registering to <strong>Readers Log</strong>. Please access the Books tab to log your books                
                </div>
                <p className="lead">   
                    <img src={Home_1} className="img-fluid" />                 
                    <img src={Home_2} className="img-fluid" />
                </p>
             </div>
        )
    }
    

}

export default RegsiterSuccess;