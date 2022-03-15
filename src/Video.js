import {Component} from 'react';
import ReactPlayer from 'react-player'


//This component loads a Vimeo Video
//Props: videoid from Vimeo
class Video extends Component {

    constructor(props) {
        super(props);


    }

    render = () => {
        var src = "https://player.vimeo.com/video/688515691&badge=0&autopause=0&player_id=0&app_id=58479"
        const divStyle = {
            padding:'75% 0 0 0',
            position:'relative'
        };

        const iframeStyle = {
            position:'absolute',
            top:0,
            left:0,
            width:'100%',
            height:'100%'
        }
       return (
       
           <div className="container">
               <div style={divStyle}>
                   <iframe src="https://player.vimeo.com/video/688515691"
                   frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen
                   style={iframeStyle}
                   title="St. Patrick&amp;#039;s Day Invite"></iframe></div>
               <script src="https://player.vimeo.com/api/player.js"></script>
           </div >
       )
    }


}

export default Video