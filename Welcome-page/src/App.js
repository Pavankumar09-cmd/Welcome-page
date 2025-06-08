import React, { useState } from 'react';
import Dashboard from './Components/Dashboard';
import ProfileStatus from './Components/ProfileStatus';
import SuccessPopup from './Components/SuccessPopup';
import './App.css';

const App = () => {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <div className="app-container">
      <div className={`background-content ${showPopup ? 'blurred' : ''}`}>
        <div className="ind-cont">
        <Dashboard />
        <ProfileStatus />
        </div>
      </div>

      {showPopup && <SuccessPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default App;
