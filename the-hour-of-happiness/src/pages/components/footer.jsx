import React from 'react';
import './footer.css';
import { FaGithub } from 'react-icons/fa';

export const Footer = () => {
    return (
            <div className="footer-container">
                <a href="https://github.com/locb65" target="_blank" rel="noopener noreferrer" className="github-link">
                <FaGithub className="github-logo" />
                Locb65
                </a>
            </div>
    );
}
