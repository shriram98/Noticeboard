import React, {Component} from 'react'
import {Route, Switch } from 'react-router-dom'

import Events from './component/events/events'
import {categories} from './component/categories/categories'
// import CardList from './component/categories/CardList'
import Header from './component/header/header'

import './css/app.css'


export default class App extends Component {

    constructor(props) {
        super(props)

    }


    render() {
        return(
            // //removed Events from below div for checking
            // <div>
            
            //    <CardList categories={categories} />
            // </div>
            <div>
                <Switch>
                    <Route exact path='/' component={Header} />
                </Switch>
            </div>
        );
    }
}