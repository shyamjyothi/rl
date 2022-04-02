
import Nav from './Nav';
import Welcome from './Welcome';
import Books from './Books';
import RegisterSuccess from './RegisterSuccess';
import Video from './Video';
import './App.css'



import {BrowserRouter as Router, Routes, Route, Switch, BrowserRouter} from 'react-router-dom';

function Home() {
    return (
      <div className="container banner">
        
          <BrowserRouter>
          <Nav />   
            <Routes>
            <Route path="/" element={<Welcome />}></Route>
            <Route path="/books" element={<Books />}></Route>    
            <Route path="/success" element={<RegisterSuccess />}></Route>      
            <Route path="/video" element={<Video />}></Route>       
          </Routes>          
          </BrowserRouter>
  
       
         
      </div>
    
    );
  }
  


export default Home;