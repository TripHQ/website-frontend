import React, { useState } from 'react';
import './Header.css';
import Button from './Button';
import logoBrand from '../assets/logo_brand.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showNavButtons, setShowNavButtons] = useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            // Show buttons when scrolled past 80% of viewport height (Hero section approximation)
            if (window.scrollY > window.innerHeight * 0.8) {
                setShowNavButtons(true);
            } else {
                setShowNavButtons(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="container header-content">
                <div className="logo">
                    <img src={logoBrand} alt="Tripazia" className="header-logo" />
                </div>

                <button
                    className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <ul className="nav-links nav-center">
                        <li>
                            <a
                                href="/"
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                    setIsMenuOpen(false);
                                }}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#join"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('join').scrollIntoView({ behavior: 'smooth' });
                                    setIsMenuOpen(false);
                                }}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>

                    <ul className="nav-links nav-right">
                        <li className={`nav-btn-item ${showNavButtons ? 'nav-btn-visible' : ''}`}>
                            <a
                                href="https://calendly.com/team-waynix/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-header-secondary"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Get A Free Demo
                            </a>
                        </li>
                        <li className={`nav-btn-item ${showNavButtons ? 'nav-btn-visible' : ''}`}>
                            <Button onClick={() => {
                                document.getElementById('join').scrollIntoView({ behavior: 'smooth' });
                                setIsMenuOpen(false);
                            }}>
                                Become a Founding Traveler*
                            </Button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
