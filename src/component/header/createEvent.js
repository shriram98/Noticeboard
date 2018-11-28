import React, {Component} from 'react';

import '../../css/createEvent.css'
import axios from 'axios';

export default class CreateEvent extends Component {
    constructor(props) {
        super(props)
        this.sendData = this.sendData.bind(this)
    }

    sendData(e) {
        var comp = this
        var formdata = {
            evtname : document.getElementById('event-name').value,
            evtdate : document.getElementById('event-date').value,
            speaker : document.getElementById('event-speaker').value,
            evttype : document.getElementById('event-type').value,
            contact : document.getElementById('event-contact').value,
            evtdesc : document.getElementById('event-desc').value,
            evtloc :  document.getElementById('event-city').value,
            locationMap : document.getElementById('event-locMap').value,
        }
        axios.post('/newevent', JSON.stringify(formdata))
        .then(res => {
            console.log('success');
            alert('data Entered Successfully')
            comp.props.removepopup();
        })
        .catch(error  => {
            console.log('error')
            alert('Data Entry Failed')
            comp.props.removepopup();
        })
    }

    render() {
        return(
            <div>
                <label>Enter The name of the event :</label>
                <input type="text" id="event-name" className="input-field"/>
                <br />
                <label>Date Of Event</label>
                <input type="text" id="event-date" className="input-field" placeholder="Date, Month, Year"/>
                <br />
                <label>Speaker</label>
                <input type="text" id="event-speaker" className="input-field"/>
                <br />
                <label>Type</label>
                <input type="text" id="event-type" className="input-field"/>
                <br />
                <label>Contact</label>
                <input type="text" id="event-contact" className="input-field"/>
                <br />
                <label>Description</label>
                <input type="text-area" id="event-desc" className="input-field"/>
                <br />
                <label>City</label>
                <input id="event-city" className="input-field"  type="text"/>
                <br />
                <label>locationMap</label>
                <input id="event-locMap" className="input-field" type="text" />
                <br />

                <button onClick={this.sendData} id="sbt" className="submit-btn">Submit</button> 
                
            </div>
        );
    }
}