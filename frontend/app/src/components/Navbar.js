import React from 'react';

const Navbar = ({ onTabClick }) => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">Wisdomark</div>
            <div className="navbar-menu">
                <button onClick={() => onTabClick('discussionGroups')}>Discussion Groups</button>
                <button onClick={() => onTabClick('offlineActivities')}>Offline Activities</button>
                <button onClick={() => onTabClick('timeManagement')}>Time Management</button>
            </div>
        </nav>
    );
};

export default Navbar;
