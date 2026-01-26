import React from 'react';
import Button from './Button';
import './Hero.css';

// Import images
import imgCompass from '../assets/travel_compass.png';

import WaitlistStatus from './WaitlistStatus';

// ... (keep default imports)

const Hero = () => {
    // Static data for Hero (indepedent for now as requested)
    const count = 119;
    const joiners = [
        { initials: 'JD', color: '#fecdd3' },
        { initials: 'AS', color: '#fed7aa' },
        { initials: 'MK', color: '#ddd6fe' },
        { initials: 'LC', color: '#bbf7d0' },
        { initials: 'DR', color: '#bfdbfe' }
    ];

    return (
        <section className="hero" id="home">
            <div className="container t-center">
                <h1 className="hero-title fade-in">
                    Trip planning is broken.<br />
                    <span className="highlight-text">Waynix</span> fixes it.
                </h1>
                <p className="hero-subtitle fade-in delay-1">
                    Waynix aggregates social media travel inspiration and converts it into structured plans through a core recommendation system.
                </p>
                <div className="hero-actions fade-in delay-2">
                    <Button onClick={() => document.getElementById('join').scrollIntoView({ behavior: 'smooth' })}>Become a Founding Traveler*</Button>
                    {/* <a href="https://calendly.com/team-waynix/30min" target="_blank" rel="noopener noreferrer" className="watch-demo">Get a Free Demo</a> */}
                </div>

                <div className="hero-waitlist fade-in delay-3" style={{ marginTop: '2rem' }}>
                    <WaitlistStatus count={count} joiners={joiners} />
                </div>

                {/* Decorative Compass */}
                <img src={imgCompass} alt="" className="hero-compass" />
            </div>
        </section>
    );
};

export default Hero;
