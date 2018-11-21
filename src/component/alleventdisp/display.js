import React from 'react'
import './display.css'


class Display extends React.Component{
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
export default Display