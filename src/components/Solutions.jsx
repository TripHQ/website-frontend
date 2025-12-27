import React from 'react';
import './Solutions.css';
import imgPlane from '../assets/travel_paper_plane.png';

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
                    <div className="one-app-header">
                        <h2 className="one-app-title">One App, Endless Possibilities: Your Trip, Your Way</h2>
                        <img src={imgPlane} alt="" className="one-app-plane" />
                        <p className="one-app-subtitle">Your itinerary, your map, and your personal travel assistant, all in one place.</p>
                    </div>

                    <div className="one-app-grid">
                        <div className="one-app-card">
                            <h3>A flexible itinerary</h3>
                            <p>See your entire trip laid out day by day. Make changes anytime, your plan updates instantly.</p>
                            <div className="one-app-placeholder"></div>
                        </div>
                        <div className="one-app-card">
                            <h3>A map that keeps up</h3>
                            <p>Your routes, organized and visual. As your plans change, your map adjusts with you.</p>
                            <div className="one-app-placeholder"></div>
                        </div>
                    </div>
                </div>

                <div className="one-app-section fade-in">
                    <div className="one-app-header">
                        <h2 className="one-app-title">Soon, planning won't be a solo thing</h2>
                        <p className="one-app-subtitle">Tripazia is just getting started. We're building towards a more collaborative and rewarding way to plan trips, together.</p>
                    </div>

                    <div className="one-app-grid">
                        <div className="one-app-card">
                            <h3>Plan trips with friends</h3>
                            <p>Invite friends, create groups, and plan together, no more scattered chats or mismatched plans.</p>
                            <div className="one-app-placeholder"></div>
                        </div>
                        <div className="one-app-card">
                            <h3>Earn from trips you build</h3>
                            <p>Create great itineraries. If others use them, you earn. Turn your travel planning into something more.</p>
                            <div className="one-app-placeholder"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solutions;
