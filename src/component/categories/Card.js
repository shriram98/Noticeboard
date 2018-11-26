import React from 'react';

class Card extends React.Component {
    constructor(props)
    {
        super(props)
    }

    
    render(){
        return(
            //shows categories in a card like format
            <a href="http://localhost:3000/#/eventlist">
                <div className='tc bg-light-green  br5 pa3 ma2 w5 h5 fl   grow'>
                    <img alt='Categoryphoto' src={this.props.url} />
                    <div>
                        <h2>{this.props.name}</h2>
                        <p>{this.props.desc}</p>
                    </div>
                </div>
            </a>
        );
    }
}
export default Card;