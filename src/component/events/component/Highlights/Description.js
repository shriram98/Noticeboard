import React from 'react';
import Fade from 'react-reveal/Fade';
import 'tachyons';

const Description = () => {
    return (
        <Fade>
            <div className="center_wrapper">
                <h2>Highlights</h2>
                <div className="highlight_description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                
                
                <div className="fl w-100 tc grow center_wrapper">
                    <h1>Contact info </h1>
                    <div className="highlight_description m">
                    <b>email:</b> xyz.example.com
                    <br></br>
                    <b>Phone no:</b>: 76980870760
    
                </div>

                </div>
            </div>
        </Fade>
    );
};

export default Description;