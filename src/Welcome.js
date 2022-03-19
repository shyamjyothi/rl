
import Home_1 from './HomeImage.png'
import Home_2 from './HomeImage2.png'


function Welcome() {

  var userName = localStorage.getItem("rl_username");

    return (  

      <div className="container">
       
        <main className="px-3 text-center">
          <h1>READERS LOG</h1>
          <p className="lead">
              <strong>Readers Log</strong> is a website where you can log the Books that you have read.
              <strong>Readers Log</strong> would help you in keeping a track of the Books that you have read over the years.
          </p>
          <p className="lead">
            <img src={Home_1} className="img-fluid" />
            <img src={Home_2} className="img-fluid" />
          </p>
          
        </main>
      </div>
    )

}



export default Welcome;