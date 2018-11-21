import React from 'react';

class Card extends React.Component {
    constructor(props)
    {
        super(props)
        console.log(this.props.url)
        this.displayEvents=this.displayEvents.bind(this)
    }

    displayEvents(something){
        console.log(something);
    }

    
    render(){
        return(
            //shows categories in a card like format
            <div onClick={() => this.displayEvents('TEST')}className='tc bg-light-green  br5 pa3 ma2 w5 h5 fl   grow'>
                <img alt='Categoryphoto' src={this.props.url} />
                <div >
                    <h2>{this.props.name}</h2>
                    <p>{this.props.desc}</p>
                </div>
            </div>

        );
    }
}
export default Card;