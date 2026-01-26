import React from 'react';
import './Solutions.css';
import videoPreferences from '../assets/Main Asset_Preferences.mp4';
import videoAiAssistant from '../assets/Main_AI Assistant.mp4';
import videoSeeAll from '../assets/Main_See AII.mp4';

const FeatureBlock = ({ title, description, reverse, visualText, videoSrc }) => (
    <div className={`feature-block ${reverse ? 'reverse' : ''} fade-in`}>
        <div className="feature-content">
            <h3 className="feature-title">{title}</h3>
            <p className="feature-desc">{description}</p>
        </div>
        <div className="feature-visual">
            {videoSrc ? (
                <video
                    src={videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="feature-video"
                />
            ) : (
                <div style={{ color: '#555' }}>[ {visualText || 'Visual Placeholder'} ]</div>
            )}
        </div>
    </div>
);

const Solutions = () => {
    return (
        <section className="solution-section" id="solutions">
            <div className="container">

                <FeatureBlock
                    title="From Your Preferences to a Perfect Itinerary."
                    description="Tell us your preferences, play with combinations, and watch your plan come to life."
                    videoSrc={videoPreferences}
                />

                <FeatureBlock
                    title="Your Personal Travel Concierge"
                    description="Need a quick suggestion or want to tweak your plans? Just ask your built-in travel AI Assistant and get instant help right inside the app."
                    reverse={true}
                    videoSrc={videoAiAssistant}
                />

                <FeatureBlock
                    title="See it all come together"
                    description="One map, one plan, everything synced."
                    videoSrc={videoSeeAll}
                />

                <div className="one-app-section fade-in">

                    <div className="one-app-grid">
                        <div className="one-app-card">
                            <h3>Plan Together, Without the Chaos</h3>
                            <p>Coming Soon: Plan trips with friends and family in one shared space. Chat with the assistant as a group, update plans together, and split expenses, without juggling messages, notes, and payment apps.</p>

                        </div>
                        <div className="one-app-card">
                            <h3>Local Experiences, Built Into Your Trip</h3>
                            <p>Coming soon: Discover workshops, classes, and experiences hosted by local businesses, right inside your itinerary. Book instantly, pay upfront, and turn your trip into something truly local.</p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solutions;
