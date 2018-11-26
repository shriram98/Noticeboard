import React from 'react';
import Carrousel from './Carrousel';
import TimeUntil from './TimeUntil';

export default class Featured extends React.Component {

    constructor(props) {
        super(props)
        console.log(this.props)
    }

    render() {
        var date;
        if(date===NaN) {
            date='30, Dec, 2018'
        }
        else {
            date = this.props.date
        }
        return (
            <div style={{position:'relative'}}>
    
                <Carrousel/>
    
                <div className="artist_name">
                    <div className="wrapper">
                        {this.props.speaker}
                    </div>
                </div>
    
                <TimeUntil date={date}/>
    
            </div>
        );
    }
}
