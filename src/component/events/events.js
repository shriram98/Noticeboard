import React, { Component } from 'react';
import './CSS/events.css';
import { Element } from 'react-scroll';

import axios from 'axios'


import Header from './component/header_footer/Header';
import Featured from './component/featured';
import VunueNfo from './component/venueNfo';
import Highlight from  './component/Highlights'
import Location from './component/location';
import Footer from './component/header_footer/Footer';

class Events extends Component {

  constructor(props) {
    super(props)
    this.state = {
      evt : {}
    }
    this.contact = ['abc@xyz', '9946976472'];
 }

 componentWillMount() {
   window.scrollTo(0,0)
   var comp = this
  axios.get('http://localhost:8080/getcurrent')
  .then(function(response) {
    comp.setState({evt: response.data[0]})
  })
 }
 
// componentWillUpdate() {
//   var comp = this
//   axios.get('http://localhost:8080/getcurrent')
//   .then(function(response) {
//     comp.setState({evt: response.data})
//   })
// }


  render() {
    return (
      <div className="App" style={{ height:"1500px",background:'cornflowerblue'}}>
        <Header Ename={this.state.evt.evtname} Venue={this.state.evt.evtloc}/>

        <Element name="featured">
          <Featured speaker={this.state.evt.speaker} date='30, Dec, 2018'/>
        </Element>

        <Element name="venuenfo">
          <VunueNfo date= {this.state.evt.date} location={this.state.evt.evtloc} />
        </Element>
        
        <Element name="highlights">
          <Highlight discr={this.state.evt.evt_desc} contact={this.state.evt.contact}/>
        </Element>
        
        <Element name="location">
          <Location locationMap={this.state.evt.locationMap}/>
        </Element>
        
        <Footer Ename={this.state.evt.evtname} />
      </div>
    );
  }
}

export default Events;
