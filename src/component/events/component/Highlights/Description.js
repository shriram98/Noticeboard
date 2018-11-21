import React from 'react';
import Fade from 'react-reveal/Fade';
import 'tachyons';

const Description = ({discr,contact}) => {
    return (
        <Fade>
            <div className="center_wrapper">
                <h2>Highlights</h2>
                <div className="highlight_description">
                {discr}
                </div>
                
                
                <div className="fl w-100 tc grow center_wrapper">
                    <h1>Contact info </h1>
                    <div className="highlight_description m">
                    <b>email:</b> {contact}[0]
                    <br></br>
                    <b>Phone no:</b>: {contact}[1]
    
                </div>

                </div>
            </div>
        </Fade>
    );
};

export default Description;