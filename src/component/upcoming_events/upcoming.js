import React, {Component} from 'react' 
import {Slide} from 'react-slideshow-image'

import axios from 'axios'

import '../../css/upcoming.css'

export default class UpcomingEvents extends Component {

    constructor(props) {
        super(props);
        this.state = {
            src: [
                {img: "#"},
                {img: "#"},
                {img: "#"},
                {img: "#"},
            ]
        }
    }

    componentWillMount() {
        var comp = this;
        axios.get('http://localhost:8080/upcomingevents')
        .then(function(response) {
            comp.setState({src: response.data})
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
        var upcmng =[]
        for(var i in src) {
            upcmng.push(<img key={i} className="event-img" src={src[i].img} />)
            console.log(src[i].img)
        }
        return(
            <div className="up-container">
                <Slide {...properties}>
                    {upcmng}
                </Slide>
            </div>
        )
    }
}