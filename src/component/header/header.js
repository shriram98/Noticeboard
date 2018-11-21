import React, {Component} from 'react'
import { scroller } from 'react-scroll'
import { Element } from 'react-scroll'

import '../../css/header.css'
import LoginSection from './loginSection'
import CardList from '../categories/CardList'
import UpcomingEvents from '../upcoming_events/upcoming'
import Display from '../alleventdisp/display'
import Zoom from '@material-ui/core/Zoom';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false}
        this.login = this.login.bind(this)
        this.resetLogin = this.resetLogin.bind(this)
        this.scrollToElement = this.scrollToElement.bind(this)
    }

    scrollToElement(element) {
        scroller.scrollTo(element,{
            duration: 1000,
            delay:100,
            smooth: true,
            offset: 0
        });
    }

    login(e) {
        this.setState({isLoggedIn: true})
    }

    resetLogin(e) {
        this.setState({isLoggedIn: false})
    }

    render() {
        let isloggedin = this.state.isLoggedIn;
        let loginSection 

        if(isloggedin) {
            loginSection = <div className="login-div"><LoginSection resetLogin={this.resetLogin} /></div>;
        }
        else {
            loginSection = <div></div>;
        }


        return(
            <div>
                <Element name="home">
                <div className="home-container">
                    {/* <div className="login-btn" onClick={this.login}><img src="#" /></div>                 */}
                    <nav>
                        <div id="nav-logo"onClick={this.resetLogin}>Logo</div>
                        <div className="nav-item nav-events">Events</div>
                        <div className="nav-item" onClick={ () => this.scrollToElement('categories')}>Categories</div>
                        <div className="nav-item">Contact</div>
                    </nav>
                    <div className="home-title--wrapper">
                        <div className="intro-text typewriter">All the Events at one place</div>
                        <button className="home-btn btn-login" onClick={this.resetLogin}>Login</button><br />
                        <button className="home-btn btn-next" onClick={ () => this.scrollToElement('upcoming')}>Show me more</button>
                    </div>
                    {loginSection}
                </div>
                </Element>
                <Element name="upcoming">
                    <UpcomingEvents />
                </Element>
                <Element name="categories">
                    <div className="cat-container">
                        <CardList />
                    </div>
                </Element>
                <Element>
                    <div className="Display Container tc fl">
                        <Display />
                    </div>
                </Element>
            </div>
            
        );
    }
}