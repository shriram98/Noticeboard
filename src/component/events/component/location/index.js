import React from 'react';

const Location = ({locationMap}) => {
    return (
        <div className="location_wrapper">
            
            <iframe 
                src={locationMap}
                width="100%" 
                height="500px" 
                frameBorder="0" 
                allowFullScreen
            ></iframe>

            
            <div className="location_tag">
                <div>Location</div>
            </div>

        </div>
    );
};

export default Location;