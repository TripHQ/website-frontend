import React from 'react';
import './BackgroundElements.css';

import imgCompass from '../assets/travel_compass.png';
import imgTicket from '../assets/travel_ticket_sf.png';
import imgStamp from '../assets/travel_stamp.png';
import imgPlane from '../assets/travel_paper_plane.png';

const BackgroundElements = () => {
    return (
        <div className="bg-elements-container">
            {/* Top Right - Compass near Hero */}
            <img src={imgCompass} alt="" className="bg-asset bg-compass" />

            {/* Middle Left - Ticket near Problem/Solutions */}
            <img src={imgTicket} alt="" className="bg-asset bg-ticket" />

            {/* Middle Right/Center - Paper Plane */}
            <img src={imgPlane} alt="" className="bg-asset bg-plane" />

            {/* Bottom Right - Stamp near Footer */}
            <img src={imgStamp} alt="" className="bg-asset bg-stamp" />
        </div>
    );
};

export default BackgroundElements;
