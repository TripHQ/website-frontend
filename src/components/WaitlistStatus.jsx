import React from 'react';
import './WaitlistStatus.css';

const WaitlistStatus = ({ count, joiners }) => {
    return (
        <div className="waitlist-status">
            <div className="avatar-stack">
                {joiners.map((person, i) => (
                    <div
                        key={i}
                        className="avatar"
                        style={{ backgroundColor: person.color }}
                    >
                        {person.initials}
                    </div>
                ))}
            </div>
            <div className="waitlist-count">
                <span className="count-number">{count}/1000</span> joined as Founding Travelers
            </div>
        </div>
    );
};

export default WaitlistStatus;
