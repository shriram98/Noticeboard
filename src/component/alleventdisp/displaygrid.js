import React, {Component} from 'react'


import axios from 'axios'

export default class DisplayGrid extends Component{
    constructor(props) {
        super(props)
    }

    updateCurrentEvent(ename) {
        var link = 'http://localhost:8080/current/' + ename
        axios.get(link)
        .then(function(response) {
            console.log(response.data)
        })
    }

    render() {
        return(
            <figure>
                <img src={this.props.img}/>
                <figcaption>{this.props.evtname}</figcaption>
                <span className="location">{this.props.evtloc}</span><br />
                <span className="price">{this.props.evtdate}</span>
                <a className="button" href="http://localhost:3000/#/event" onClick={() => this.updateCurrentEvent(this.props.evtname)}>Book Now</a>
            </figure>
        )
    }
} 