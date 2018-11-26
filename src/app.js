import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import Events from './component/events/events'
import Header from './component/header/header'
import Display from './component/alleventdisp/display'

import './css/app.css'


export default class App extends Component {

    render() {
        var evt
        return(
            // //removed Events from below div for checking
            // <div>
            
            //    <CardList categories={categories} />
            // </div>
            <Switch>
                <Route exact path="/" component={Header} />
                <Route path="/event" component={Events} />
                <Route path="/eventlist" component={Display} />
            </Switch>
        );
    }
}