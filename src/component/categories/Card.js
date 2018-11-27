import React from 'react';

import axios from 'axios';

class Card extends React.Component {
    constructor(props)
    {
        super(props)
        this.setcat = this.setcat.bind(this)
    }

    setcat() {
        var comp = this
        var link = '/setcategory' + this.props.name;
        axios.get(link)
        .then(function(res) {
            console.log('set cat');
        }) 
    }



    
    render(){
        return(
            //shows categories in a card like format
            <a href="http://localhost:3000/#/eventlist" onClick={this.setcat}>
                <div className='tc bg-light-green  br5 pa3 ma2 w5 h5 fl   grow'>
                    <img alt='Categoryphoto' src={this.props.url} />
                    <div>
                        <h2 className="black">{this.props.name}</h2>
                        <p className="black">{this.props.desc}</p>
                    </div>

                </div>
            </a>
        );
    }
}
export default Card;