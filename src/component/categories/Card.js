import React from 'react';

class Card extends React.Component {
    constructor(props)
    {
        super(props)
        console.log(this.props.name)
    }
    render(){
        return(
            //shows categories in a card like format
            <div className='tc bg-light-green dib br3 pa3 ma2 grow'>
                <img alt='Categoryphoto' src={`${this.props.url}`} />
                <div>
                    <h2>{this.props.name}</h2>
                    <p>{this.props.desc}</p>
                </div>
            </div>

        );
    }
}
export default Card;