import React from 'react';
import Description from './Description';

const Highlights = ({discr,contact}) => {
    return (
        <div className="highlight_wrapper">
            <Description discr={discr}contact={contact}/>
        </div>
    );
};

export default Highlights;