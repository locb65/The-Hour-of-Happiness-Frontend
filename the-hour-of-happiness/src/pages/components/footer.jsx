import React from 'react';
import './footer.css';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
    return (
            <div className="footer-container">
                <a href="https://github.com/locb65" target="_blank" rel="noopener noreferrer" className="github-link">
                <FaGithub className="github-logo" />
                Locb65 | 
                </a>
                <a href="https://twitter.com/coding_locker" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaTwitter className="social-icon" />
                Loc Bui |
                </a>
                <a href="https://www.linkedin.com/in/loc-bui-b574ba128/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin className="social-icon" />
                Coding Locker
                </a>
            </div>
    );
}
