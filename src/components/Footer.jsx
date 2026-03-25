import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <h2 className="gradient-text">Learnophobiaa</h2>
                    <p>Learn Without Fear.</p>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Learnophobiaa. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
