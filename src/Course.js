import {Component} from 'react';
import ReactPlayer from 'react-player'
import './App.css';


class Course extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 ">
                        <h1>Video</h1>
                    </div>
                </div>
                <div className="row">
                    <div class="col-12 border">
                        <ReactPlayer url="https://vimeo.com/115783408" width="900px" height="600px"/>
                        
                    </div>
                
                </div>
            </div>
        )
    }

}


export default Course;