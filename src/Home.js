
import Nav from './Nav';
import Welcome from './Welcome';
import Books from './Books';
import {BrowserRouter as Router, Routes, Route, Switch, BrowserRouter} from 'react-router-dom';

function Home() {
    return (
      <div className="container-xl">
        
          <BrowserRouter>
          <Nav />   
            <Routes>
            <Route path="/" element={<Welcome />}></Route>
            <Route path="/books" element={<Books />}></Route>
          </Routes>          
          </BrowserRouter>
  
       
         
      </div>
    
    );
  }
  


export default Home;