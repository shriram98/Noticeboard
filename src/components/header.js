import React, {Component} from 'react'

import '../css/header.css'
import LoginSection from './loginSection'

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false}
        this.login = this.login.bind(this)
        this.resetLogin = this.resetLogin.bind(this)
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
            <div className="home-container">
                <div className="login-btn" onClick={this.login}><img src="#" /></div>                
                <nav>
                    <div id="nav-logo"onClick={this.resetLogin}>Logo</div>
                    <div className="nav-item nav-events">Events</div>
                    <div className="nav-item">Categories</div>
                    <div className="nav-item">Contact</div>
                </nav>
                <div className="home-title--wrapper">
                    <div className="intro-text typewriter">All the Events at one place</div>
                    <button className="home-btn btn-login" onClick={this.resetLogin}>Login</button><br />
                    <button className="home-btn btn-next">Show me more</button>
                </div>
                {loginSection}
            </div>
        );
    }
}