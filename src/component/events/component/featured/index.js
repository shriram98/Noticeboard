import React from 'react';
import Carrousel from './Carrousel';
import TimeUntil from './TimeUntil';

const Featured = ({speaker, date}) => {
    
    return (
        <div style={{position:'relative'}}>

            <Carrousel/>

            <div className="artist_name">
                <div className="wrapper">
                    {speaker}
                </div>
            </div>

            <TimeUntil date={date}/>

        </div>
    );
};

export default Featured;