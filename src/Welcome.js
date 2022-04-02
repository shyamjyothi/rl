
import {Component} from 'react'


class Welcome extends Component {

 // userName = localStorage.getItem("rl_username");

  constructor(props) {
    super(props)

  }

  

    
  render() {
    return (  
    
          <div class="col-md-6 offset-md-3 info">
          <h1 class="text-center">READERS LOG</h1>
          <p className="lead">
                <strong>Readers Log</strong> is a website where you can log the Books that you have read.
                <strong>Readers Log</strong> would help you in keeping a track of the Books that you have read over the years.
            </p>
            
          
          </div>     
    
      )
  }

}



export default Welcome;