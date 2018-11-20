import React, { Component } from 'react';
import './CSS/events.css';
import { Element } from 'react-scroll';


import Header from './component/header_footer/Header';
import Featured from './component/featured';
import VunueNfo from './component/venueNfo';
import Highlight from  './component/Highlights'
import Location from './component/location';
import Footer from './component/header_footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height:"1500px",background:'cornflowerblue'}}>
        <Header/>

        <Element name="featured">
          <Featured/>
        </Element>

        <Element name="venuenfo">
          <VunueNfo/>
        </Element>
        
        <Element name="highlights">
          <Highlight/>
        </Element>
        
        <Element name="location">
          <Location/>
        </Element>
        
        <Footer/>
      </div>
    );
  }
}

export default App;
