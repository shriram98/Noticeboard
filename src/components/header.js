import React, {Component} from 'react'

import '../css/header.css'

export default class Header extends Component {
    render() {
        return(
            <div className="home-container">
                <div className="login-btn"><img src="#" /></div>                
                <nav>
                    <div id="nav-logo">Logo</div>
                    <div className="nav-item nav-events">Events</div>
                    <div className="nav-item">Categories</div>
                    <div className="nav-item">Contact</div>
                </nav>
                <div className="home-title--wrapper">
                    <div className="intro-text typewriter">All the Events at one place</div>
                    <button className="home-btn btn-login">Login</button><br />
                    <button className="home-btn btn-next">Show me more</button>
                </div>
            </div>
        );
    }
}