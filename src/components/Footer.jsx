import React from 'react';
import Button from './Button';
import './Footer.css';
import confetti from 'canvas-confetti';
import WaitlistStatus from './WaitlistStatus';
const API_BASE = import.meta.env.VITE_API_BASE_URL;

const Footer = () => {
    const [count, setCount] = React.useState(118);
    const [joiners, setJoiners] = React.useState([
        { initials: 'JD', color: '#fecdd3' },
        { initials: 'AS', color: '#fed7aa' },
        { initials: 'MK', color: '#ddd6fe' },
        { initials: 'LC', color: '#bbf7d0' },
        { initials: 'DR', color: '#bfdbfe' }
    ]);

    // Form State
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [country, setCountry] = React.useState('US');
    const [destination, setDestination] = React.useState('');

    const [loading, setLoading] = React.useState(false);
    const [showPopup, setShowPopup] = React.useState(false);
    const [ticketUrl, setTicketUrl] = React.useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch(`${API_BASE}/api/join`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, country, destination }),
            });

            const data = await response.json();

            if (data.success) {
                // Update local state visuals
                setCount(prev => prev + 1);

                // Add new joiner
                const initials = name
                    ? name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()
                    : 'YOU';
                const colors = ['#fecdd3', '#fed7aa', '#ddd6fe', '#bbf7d0', '#bfdbfe', '#e9d5ff'];
                setJoiners(prev => [{ initials, color: colors[Math.floor(Math.random() * colors.length)] }, ...prev.slice(0, 4)]);

                // Store ticket URL and Reset Form
                setTicketUrl(data.ticketUrl);
                setName('');
                setEmail('');
                setDestination('');

                // Trigger Success flow
                confetti({
                    particleCount: 150,
                    spread: 70,
                    origin: { y: 0.8 },
                    colors: ['#e11d48', '#f97316', '#8b5cf6']
                });

                setShowPopup(true);
            } else {
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert('Failed to connect to the server.');
        } finally {
            setLoading(false);
        }
    };

    const handleShare = async () => {
        if (!ticketUrl) return;
        const fullUrl = window.location.origin + ticketUrl;

        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'My Tripazia Ticket',
                    text: `I'm going to ${destination || 'my dream destination'}! Join me on Tripazia.`,
                    url: fullUrl
                });
            } catch (err) {
                console.log('Share canceled');
            }
        } else {
            await navigator.clipboard.writeText(fullUrl);
            alert('Ticket URL copied to clipboard!');
        }
    };

    return (
        <footer className="footer" id="join">
            <div className="container footer-content fade-in">
                <h2>Join early. Help shape what comes next.</h2>
                <p className="footer-desc">
                    Because your preferences are key. Unlock secret founders lists, plan trips, and fun hidden gems along the way.
                </p>

                <form className="subscribe-form" onSubmit={handleSubmit}>
                    <div className="form-inputs">
                        <input
                            type="text"
                            placeholder="Name"
                            className="form-input"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <select
                            className="form-input"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        >
                            <option value="US">United States</option>
                            <option value="IN">India</option>
                            <option value="UK">United Kingdom</option>
                            <option value="CA">Canada</option>
                            <option value="AU">Australia</option>
                            <option value="DE">Germany</option>
                            <option value="FR">France</option>
                            <option value="JP">Japan</option>
                            <option value="OTHER">Other</option>
                        </select>
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="form-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="One place you always wanted to visit in the US"
                            className="form-input full-width"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                        />
                    </div>
                    <Button type="submit" disabled={loading}>
                        {loading ? 'Generating Ticket...' : 'Get Early Access'}
                    </Button>
                </form>

                <WaitlistStatus count={count} joiners={joiners} />

                <div className="footer-links">
                    <a href="#twitter">Twitter / X</a>
                    <a href="#insta">Instagram</a>
                    <a href="#linkedin">LinkedIn</a>
                </div>
            </div>

            {showPopup && (
                <div className="popup-overlay" onClick={() => setShowPopup(false)}>
                    <div className="popup-content" onClick={e => e.stopPropagation()}>
                        <button className="popup-close" onClick={() => setShowPopup(false)}>×</button>
                        <div className="popup-icon">🎉</div>
                        <h3>Welcome Founding Traveler!</h3>
                        <p>You're on the list! Here is your personalized ticket.</p>

                        {ticketUrl && (
                            <div className="ticket-preview" style={{ margin: '20px 0' }}>
                                <img src={ticketUrl} alt="Your Ticket" style={{ width: '100%', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                            </div>
                        )}

                        <div className="share-section">
                            <p style={{ margin: '10px 0', fontSize: '14px', color: '#666' }}>Share your ticket:</p>
                            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
                                {/* X / Twitter */}
                                <button
                                    className="share-btn x-btn"
                                    onClick={() => window.open(`https://twitter.com/intent/tweet?text=I'm going to ${destination}! Join me on Waynix ✈️&url=${window.location.origin}`, '_blank')}
                                >
                                    Post on 𝕏
                                </button>

                                {/* LinkedIn */}
                                <button
                                    className="share-btn linkedin-btn"
                                    onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.origin}`, '_blank')}
                                >
                                    LinkedIn
                                </button>

                                {/* Download for IG/TikTok */}
                                <button
                                    className="share-btn download-btn"
                                    onClick={() => {
                                        const link = document.createElement('a');
                                        link.href = ticketUrl;
                                        link.download = 'waynix-ticket.png';
                                        link.click();
                                    }}
                                >
                                    Download (IG/TikTok)
                                </button>
                            </div>
                        </div>

                        <button
                            onClick={() => setShowPopup(false)}
                            style={{
                                marginTop: '20px',
                                background: 'transparent',
                                border: '1px solid #ddd',
                                padding: '8px 20px',
                                borderRadius: '999px',
                                cursor: 'pointer',
                                fontSize: '14px'
                            }}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </footer>
    );
};

export default Footer;
