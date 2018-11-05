import React, {Component} from 'react'

import './css/app.css'

import Header from './components/header'
import Events from './components/events'
import Categories from './components/categories'
import Works from './components/works'
import Footer from './components/footer'

export default class App extends Component {
    render() {
        return(
            <div>
                <section className="section" id="home">
                    <Header />
                </section>
                <section className="section" id="events">
                    <Events />
                </section>
                <section className="section" id="categories">
                    <Categories />
                </section>
                <section className="section" id="works">
                    <Works />
                </section>
                <footer>
                    <Footer />
                </footer>
            </div>
        );
    }
}