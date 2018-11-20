import React, {Component} from 'react'
import Events from './component/events/events'

import {categories} from './component/categories/categories'
import CardList from './component/categories/CardList'

// import './css/app.css'


export default class App extends Component {
    render() {
        return(
            //removed Events from below div for checking
            <div>
            
               <CardList categories={categories} />
            </div>
        );
    }
}