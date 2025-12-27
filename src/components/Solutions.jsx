import React from 'react';
import './Solutions.css';

const FeatureBlock = ({ title, description, reverse, visualText }) => (
    <div className={`feature-block ${reverse ? 'reverse' : ''} fade-in`}>
        <div className="feature-content">
            <h3 className="feature-title">{title}</h3>
            <p className="feature-desc">{description}</p>
        </div>
        <div className="feature-visual">
            <div style={{ color: '#555' }}>[ {visualText || 'Visual Placeholder'} ]</div>
        </div>
    </div>
);

const Solutions = () => {
    return (
        <section className="solution-section">
            <div className="container">

                <FeatureBlock
                    title="From Your Preferences to a Perfect Itinerary."
                    description="Tell us your preferences, play with combinations, and watch your city come to life."
                    visualText="Preferences UI"
                />

                <FeatureBlock
                    title="Shape your days, your way"
                    description="Drag, drop or swap activities anytime, without losing your plan."
                    reverse={true}
                    visualText="Drag & Drop Interface"
                />

                <FeatureBlock
                    title="See it all come together"
                    description="One map, one plan, everything synced."
                    visualText="Map Itinerary View"
                />

                <div className="one-app-section fade-in">
                    <h2 className="one-app-title">One App, Endless Possibilities.</h2>
                    <p className="hero-subtitle">Stop bouncing, start living. All in one place.</p>

                    <div className="flex-features">
                        <div className="feature-visual" style={{ height: '300px' }}>
                            <div>[ Flexible Itinerary ]</div>
                        </div>
                        <div className="feature-visual" style={{ height: '300px' }}>
                            <div>[ Keeps Up With You ]</div>
                        </div>
                    </div>
                </div>

                <div className="one-app-section fade-in" style={{ marginTop: '4rem' }}>
                    <h2 className="one-app-title">Soon, planning won't be a solo thing</h2>
                    <p className="hero-subtitle">Why do it by yourself when we can build together?</p>

                    <div className="flex-features">
                        <div className="feature-block" style={{ flexDirection: 'column', textAlign: 'center', gap: '1rem' }}>
                            <h3>Plan trips with friends</h3>
                            <p className="feature-desc">Invite friends, create groups, and plan together.</p>
                        </div>
                        <div className="feature-block" style={{ flexDirection: 'column', textAlign: 'center', gap: '1rem' }}>
                            <h3>Earn from trips you build</h3>
                            <p className="feature-desc">Turning good times into $$$. If others use them, you earn.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solutions;
