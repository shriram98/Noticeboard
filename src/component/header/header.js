import React, {Component} from 'react'
import { scroller } from 'react-scroll'
import { Element } from 'react-scroll'

import '../../css/header.css'
import LoginSection from './loginSection'
import CardList from '../categories/CardList'
import UpcomingEvents from '../upcoming_events/upcoming'
import Zoom from '@material-ui/core/Zoom';
import Footer from '../Footer/Footer'

import CreateEvent from './createEvent'

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false, isPopup: false}
        this.scrollToElement = this.scrollToElement.bind(this)
        this.loadpopup = this.loadpopup.bind(this);
        this.removepopup = this.removepopup.bind(this);
    }

    scrollToElement(element) {
        scroller.scrollTo(element,{
            duration: 1000,
            delay:100,
            smooth: true,
            offset: 0,
        });
    }

    loadpopup() {
        this.setState({isPopup: true})
    }
    removepopup() {
        this.setState({isPopup: false}) 
    }

    render() {
        var isPopup = this.state.isPopup;

        let section;

        if(isPopup) {
            section = <div className="createEvent"><CreateEvent removepopup={this.removepopup}/></div>
        }
        else {
            section = <div></div>
        }


        return(
            <div>
                <Element name="home">
                <div className="home-container">
                    {/* <div className="login-btn" onClick={this.login}><img src="#" /></div>*/}
                    <nav>
                        <div id="nav-logo"><img src="https://cdn.designcrowd.com/blog/2016/May/beverage-day-2016/22_300x300.png"></img></div>
                        <div className="nav-item nav-events" onClick = {() => {}}>Events</div>
                        <div className="nav-item" onClick={this.loadpopup}>Add Event</div>
                        <div className="nav-item" onClick={ () => this.scrollToElement('categories')}>Categories</div>
                        <div className="nav-item" onClick={ () => this.scrollToElement('footer')}>Contribute</div>
                    </nav>
                    <div className="home-title--wrapper">
                        <div className="intro-text typewriter">All the Events at one place</div>
                        {/* <button className="home-btn btn-login">Login</button><br /> */}
                        <button className="home-btn btn-next" onClick={ () => this.scrollToElement('upcoming')}>Show me more</button>
                    </div>
                    {section}
                </div>
                </Element>
                <Element name="upcoming">
                    <div className="bg-black ">
                    <UpcomingEvents />
                    </div>
                </Element>
                <Element name="categories">
                    <div className="cat-container ">
                        <CardList />
                    </div>
                </Element>
                <Element>
                    <div name="footer"><Footer /></div>
                </Element>
                
            </div>
            
        );
    }
}