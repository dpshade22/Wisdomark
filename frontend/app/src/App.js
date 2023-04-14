import React, { useState } from 'react';
import Navbar from './components/Navbar';
import QuoteFeed from './components/QuoteFeed';
import DiscussionGroups from './components/DiscussionGroups';
import OfflineActivities from './components/OfflineActivities';
import TimeManagement from './components/TimeManagement';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('quoteFeed');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="app">
      <Navbar onTabClick={handleTabClick} />
      <div className="content">
        {activeTab === 'quoteFeed' && <QuoteFeed />}
        {activeTab === 'discussionGroups' && <DiscussionGroups />}
        {activeTab === 'offlineActivities' && <OfflineActivities />}
        {activeTab === 'timeManagement' && <TimeManagement />}
      </div>
    </div>
  );
}

export default App;
