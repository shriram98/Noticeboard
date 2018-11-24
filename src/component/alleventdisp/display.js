import React, {Component} from 'react'
import './display.css'

import axios from 'axios'

import DisplayGrid from './displaygrid'


class EDisplay extends React.Component{
    render(){
        return(
            <div>
                
                <ul class="events">

                <div class='event_cat'>
                <h2>TECH</h2>
                <li class="event dim ">
                   
                    <div>DataHack</div>
                    <img class="event__img" src="https://s3-ap-south-1.amazonaws.com/av-blog-media/wp-content/uploads/2018/09/dhs_nt.jpg" />
                    <div class="favorite">Event Desc</div>
                </li>
                <li class="event dim  ">
                    <div>DebUtsav</div>
                    <img class="event__img" src="https://s3.ap-south-1.amazonaws.com/townscript-production/images/12c99150-5d75-465a-867e-582d36539f31.jpeg" />
                    <div class="favorite">Event Desc</div>
                </li>
                </div>

                <div class='event_cat'>
                <h2>StandUp</h2>
                <li class="event dim ">
                
                    <div>Event3</div>
                    <img class="event__img" src="https://pbs.twimg.com/profile_images/1043589031324528641/v4Ccv02i_400x400.jpg" />
                    <div class="favorite">Event Desc</div>
                </li>
                <li class="event dim ">
                    <div>DataHack</div>
                    <img class="event__img" src="https://s3-ap-south-1.amazonaws.com/av-blog-media/wp-content/uploads/2018/09/dhs_nt.jpg" />
                    <div class="favorite">Event Desc</div>
                </li>
                </div>
                <div class='event_cat'>
                <h2>Sports</h2>
                <li class="event dim  ">
               
                    <div>DebUtsav</div>
                    <img class="event__img" src="https://s3.ap-south-1.amazonaws.com/townscript-production/images/12c99150-5d75-465a-867e-582d36539f31.jpeg" />
                    <div class="favorite">Event Desc</div>
                </li>
                <li class="event dim ">
                    <div>Event3</div>
                    <img class="event__img" src="https://pbs.twimg.com/profile_images/1043589031324528641/v4Ccv02i_400x400.jpg" />
                    <div class="favorite">Event Desc</div>
                </li>
                </div>
                <div class='event_cat'>
                <h2>Gaming</h2>
                <li class="event dim ">
                
                    <div>DataHack</div>
                    <img class="event__img" src="https://s3-ap-south-1.amazonaws.com/av-blog-media/wp-content/uploads/2018/09/dhs_nt.jpg" />
                    <div class="favorite">Event Desc</div>
                </li>
            
                <li class="event dim  ">
                    <div>DebUtsav</div>
                    <img class="event__img" src="https://s3.ap-south-1.amazonaws.com/townscript-production/images/12c99150-5d75-465a-867e-582d36539f31.jpeg" />
                    <div class="favorite">Event Desc</div>
                </li>
                </div>
                <li class="event dim ">
                    <div>Event3</div>
                    <img class="event__img" src="https://pbs.twimg.com/profile_images/1043589031324528641/v4Ccv02i_400x400.jpg" />
                    <div class="favorite">Event Desc</div>
                </li>
                </ul>
            </div> 

        );

    }
}


export default class Display extends Component {
    constructor(props) {
        super(props)
        this.state = {
            eventlist: [
                {img: "#", evtname: "Event1", evtdate:"10/10/10"},
                {img: "#", evtname: "Event1", evtdate:"10/10/10"},
                {img: "#", evtname: "Event1", evtdate:"10/10/10"},
                {img: "#", evtname: "Event1", evtdate:"10/10/10"},
                {img: "#", evtname: "Event1", evtdate:"10/10/10"}
            ],
        }
    }

    componentWillMount() {
        var comp = this
        axios.get('/eventlist')
        .then(function(response) {
            comp.eventlist = response.data
        })
    }

    render() {

        var array = this.state.eventlist
        const displayarray = array.map((user, i) => {
            return(
                <DisplayGrid
                    img={this.state.eventlist[i].img}
                    evtname={this.state.eventlist[i].evtname}
                    evtdate={this.state.eventlist[i].evtdate}
                />    
            )
        })

    return(
        <div id="wrap">
            <div id="columns" class="columns_4">
                {displayarray}
            </div>
        </div>
        )
    }
}