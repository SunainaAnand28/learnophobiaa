import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled glass-card' : ''}`}>
            <div className="nav-container">
                <a href="#" className="nav-logo gradient-text">
                    Learnophobiaa
                </a>

                <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                </div>

                <ul className={`nav-menu ${isOpen ? 'active glass-card' : ''}`}>
                    <li className="nav-item">
                        <a href="#about" onClick={() => setIsOpen(false)} className="nav-link">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#videos" onClick={() => setIsOpen(false)} className="nav-link">Videos</a>
                    </li>
                    <li className="nav-item">
                        <a href="#playlists" onClick={() => setIsOpen(false)} className="nav-link">Playlists</a>
                    </li>
                    <li className="nav-item">
                        <a href="#stats" onClick={() => setIsOpen(false)} className="nav-link">Stats</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" onClick={() => setIsOpen(false)} className="nav-link nav-btn">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
