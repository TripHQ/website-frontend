import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="container header-content">
                <div className="logo">Tripazia</div>

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
                    <ul className="nav-links">
                        <li><a href="#destinations" onClick={() => setIsMenuOpen(false)}>Destinations</a></li>
                        <li><a href="#vision" onClick={() => setIsMenuOpen(false)}>Our vision</a></li>
                        <li><a href="#gallery" onClick={() => setIsMenuOpen(false)}>Gallery</a></li>
                        <li><a href="#templates" onClick={() => setIsMenuOpen(false)}>Templates</a></li>
                        <li><a href="#updates" onClick={() => setIsMenuOpen(false)}>Updates</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
