import React from 'react';
import './BackgroundElements.css';


import imgTicket from '../assets/travel_ticket_sf.png';
import imgStamp from '../assets/travel_stamp.png';
import imgPlane from '../assets/travel_paper_plane.png';

const BackgroundElements = () => {
    return (
        <div className="bg-elements-container">


            {/* Middle Left - Ticket near Problem/Solutions */}
            <img src={imgTicket} alt="" className="bg-asset bg-ticket" />



            {/* Bottom Right - Stamp near Footer */}
            <img src={imgStamp} alt="" className="bg-asset bg-stamp" />
        </div>
    );
};

export default BackgroundElements;
