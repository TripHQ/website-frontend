import React from 'react';
import Button from './Button';
import './Hero.css';

// Import images
import imgNYC from '../assets/hero/hero_polaroid_nyc.png';
import imgSF from '../assets/hero/hero_polaroid_sf.png';
import imgMiami from '../assets/hero/hero_polaroid_miami.png';
import imgCamera from '../assets/hero/hero_3d_camera.png';
import imgSuitcase from '../assets/hero/hero_3d_suitcase.png';

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
        <section className="hero">
            <div className="container t-center">
                <h1 className="hero-title fade-in">
                    Make <span className="highlight-text">planning</span>
                    <span className="hero-images-group group-1">
                        <img src={imgSuitcase} alt="Suitcase" className="hero-img img-single-3d" />
                    </span>
                    your <span className="highlight-text">trip</span>
                    <span className="hero-images-group group-2">
                        <img src={imgNYC} alt="NYC" className="hero-img img-1" />
                        <img src={imgSF} alt="San Francisco" className="hero-img img-2" />
                        <img src={imgMiami} alt="Miami" className="hero-img img-3" />
                    </span>
                    as <span className="highlight-text">fun</span>
                    <span className="hero-images-group group-3">
                        <img src={imgCamera} alt="Instant Camera" className="hero-img img-single-3d" />
                    </span>
                    as the trip itself.
                </h1>
                <p className="hero-subtitle fade-in delay-1">
                    Waynix turns the hassle of planning a trip into a smooth, all-in-on experience, so you can enjoy the journey from the very start.
                </p>
                <div className="hero-actions fade-in delay-2">
                    <Button onClick={() => document.getElementById('join').scrollIntoView({ behavior: 'smooth' })}>Become a founding member</Button>
                    <a href="#video" className="watch-demo">Get a Free Demo</a>
                </div>

                <div className="hero-waitlist fade-in delay-3" style={{ marginTop: '2rem' }}>
                    <WaitlistStatus count={count} joiners={joiners} />
                </div>
            </div>
        </section>
    );
};

export default Hero;
