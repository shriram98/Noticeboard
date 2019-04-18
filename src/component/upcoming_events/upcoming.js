import React, {Component} from 'react' 
import {Slide} from 'react-slideshow-image'

import axios from 'axios'

import '../../css/upcoming.css'

export default class UpcomingEvents extends Component {

    constructor(props) {
        super(props);
        this.state = {
            src: [
                {img:"http://heridono.com/wp-content/uploads/2018/10/0fc075e6a9ee4d04ad221d474268b43a.jpg.1000x1000_q85_replace_alpha-white_upscale_square@2x.jpg"},
                {img: "http://www.iitb.ac.in/sites/default/files/event/2017-09/TechFest.jpg"},
                {img: "https://cdn.explara.com/eventbriteindia20170913192513.png"},
                {img:"https://emages.eventshigh.com/2017/1/27/img_acbca61d9c435ef917bf609066a56da1_1485526036289_processed_original.png"}
            ]
        }
    }

    componentWillMount() {
        var comp = this;
        axios.get('http://localhost:8080/upcomingevents')
        .then(function(response) {
            // comp.setState({src: response.data})
            console.log(comp.state.src);
        })
    }
    render() {
        const properties = {
            duration: 5000,
            transitionDuration: 500,
            infinite: true,
            indicators: true,
            arrows: true
        }
        var src = this.state.src
        // for(var i in src) {
        //     upcmng.push(<img key={i} className="event-img" src={src[i].img} />)
        // }

        const upcmng =src.map((user,i)=> {
                return (
                    <img key={i} className="event-img" src={src[i].img} />
            );
        })


        return(
            <div className="up-container pa5 bg-gold ">
                <Slide {...properties}>
                    {upcmng}
                </Slide>
            </div>
        )
    }
}