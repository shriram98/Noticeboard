import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = ({Ename}) => {
    return (
        <footer className="bck_red">
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">{Ename}</div>
                <div className="footer_copyright">
                    {Ename} 2018.All rights reserved.
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;