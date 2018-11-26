import React, {Component} from 'react'
import './display.css'

import axios from 'axios'

import DisplayGrid from './displaygrid'
import Events from '../events/events'


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
            eventlist: [],
            category : "all",
            // isEventDisplayed: true,
            // currentEventName : ""
        }
    }

    componentWillMount() {
        var comp = this
        axios.get('http://localhost:8080/eventlist')
        .then(function(response) {
            comp.setState({eventlist: response.data})
            console.log(comp.state.eventlist)
        })
    }

    // loadEvent(ename) {
    //     this.setState({currentEventName: ename, isEventDisplayed: true})
    // }


    render() {

        var array = this.state.eventlist
        const displayarray = array.map((user, i) => {
            return(
                <DisplayGrid
                    key = {i}
                    img={this.state.eventlist[i].img}
                    evtname={this.state.eventlist[i].evtname}
                    evtdate={this.state.eventlist[i].evtdate}
                    evtloc={this.state.eventlist[i].evtloc}
                />    
            )
        })

        // var eventdiv = <div></div>

        // if(this.state.isEventDisplayed) {
        //     return <div className="event-div"><Events evtname={this.state.currentEventName}/></div>
        // }



    return(
        <div>
            <div id="wrap">
                <div id="columns" className="columns_4">
                    {displayarray}
                </div>
            </div>
            {/* {eventdiv} */}
        </div>
        )
    }
}