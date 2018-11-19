import React, {Component} from 'react'
import Slider from 'react-slick'

import '../css/slideshow.css'
import "slick-carousel/slick/slick.css" 
import "slick-carousel/slick/slick-theme.css"

export default class SlideShow extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
            
          };
          return (
            <div className="slideshow-container">
              <div className="slideshow-title">Popular Upcoming Events &mdash; in India</div>
              <Slider {...settings}>
                <div>
                  <img className="slideshow-img" src={require("../res/event1.jpg") }/>
                </div>
                <div>
                  <img className="slideshow-img" src={require("../res/event2.jpg") }/>
                </div>
                <div>
                  <img className="slideshow-img" src={require("../res/event3.jpeg") }/>
                </div>
                <div>
                  <img className="slideshow-img" src={require("../res/event 4.jpg") }/>
                </div>
                <div>
                  <img className="slideshow-img" src={require("../res/events.jpg") }/>
                </div>
              </Slider>
            </div>
        );
    }
}
