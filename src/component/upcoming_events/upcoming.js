import React, {Component} from 'react' 
import {Slide} from 'react-slideshow-image'

import '../../css/upcoming.css'

export default class UpcomingEvents extends Component {
    render() {
        const properties = {
            duration: 5000,
            transitionDuration: 500,
            infinite: true,
            indicators: true,
            arrows: true
        }
        return(
            <div className="up-container">
                <Slide {...properties}>
                    <div className="event event1"></div>
                    <div className="event event2"></div>
                    <div className="event event3"></div>
                </Slide>
            </div>
        )
    }
}