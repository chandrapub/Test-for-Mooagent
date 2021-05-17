import React from 'react';
import Logo from '../assets/images/Logo.png';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-links">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div id="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="nav-sites">
                    <ul>
                        <li>Home</li>
                        <li>Download</li>
                        <li>Support</li>
                    </ul>
                </div>
            </div>                
            <div className="nav-buttons">
                <button>Log In</button>
                <button>Start Free Trial</button>
            </div>
        </nav>
    )
}
