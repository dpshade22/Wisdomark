import React from 'react';
import Navbar from './components/Navbar.js';
import QuoteFeed from './components/QuoteFeed';
import DiscussionGroups from './components/DiscussionGroups';
import OfflineActivities from './components/OfflineActivities';
import TimeManagement from './components/TimeManagement';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <QuoteFeed />
        <DiscussionGroups />
        <OfflineActivities />
        <TimeManagement />
      </div>
    </div>
  );
}

export default App;
