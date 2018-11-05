import React, {Component} from 'react'

import '../css/header.css'

export default class Header extends Component {
    render() {
        return(
            <div className="home-container">
                <nav>
                    <div id="nav-logo">Logo</div>
                    <div className="navbar">
                        <div className="navbar-item">Events</div>
                        <div className="navbar-item">Categories</div>
                        <div className="navbar-item">Contact</div>
                    </div>
                </nav>
                
            </div>
        );
    }
}