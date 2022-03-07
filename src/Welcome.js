
import Home1 from './home1.png'
import Home2 from './home2.png'

function Welcome() {

    return (
      <main className="px-3 text-center">
        <h1>READERS LOG</h1>
        <p className="lead">
            <strong>Readers Log</strong> is a website where you can log the Books that you have read.
            <strong>Readers Log</strong> would help in keeping a track of the Books that you have read over the years.
        </p>
        <p className="lead">
          <img src={Home1} className="img-fluid" />
          <img src={Home2} className="img-fluid" />
        </p>
        
      </main>
    )

}



export default Welcome;