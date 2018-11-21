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

  constructor(props) {
    super(props)
    console.log(this.props.evt)
 }
  render() {
    return (
      <div className="App" style={{ height:"1500px",background:'cornflowerblue'}}>
        <Header Ename={this.props.evt.eventname} Venue={this.props.evt.eventtype}/>

        <Element name="featured">
          <Featured speaker={this.props.evt.speaker} date={this.props.evt.date}/>
        </Element>

        <Element name="venuenfo">
          <VunueNfo date= {this.props.evt.date} location={this.props.evt.location} />
        </Element>
        
        <Element name="highlights">
          <Highlight discr={this.props.evt.description} contact={this.props.evt.contact}/>
        </Element>
        
        <Element name="location">
          <Location locationMap={this.props.evt.locationMap}/>
        </Element>
        
        <Footer Ename={this.props.evt.eventname} />
      </div>
    );
  }
}

export default App;
