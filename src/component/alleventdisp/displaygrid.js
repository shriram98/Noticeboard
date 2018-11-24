import React, {Component} from 'react'

export default class DisplayGrid extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <figure>
                <img src={this.props.img}/>
                <figcaption>{this.props.evtname}</figcaption>
                <span class="price">{this.props.evtdate}</span>
                <a class="button" href="#">Book Now</a>
            </figure>
        )
    }
} 