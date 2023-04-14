import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">ThoughtProvokingQuotes</div>
            <div className="navbar-menu">
                <a href="/profile">Profile</a>
                <a href="/settings">Settings</a>
            </div>
        </nav>
    );
};

export default Navbar;
