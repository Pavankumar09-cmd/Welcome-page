import React, { useState } from 'react';
import '../styles/Dashboard.css';
import logo1 from '../Assets/Logos/Frame 1984082409.png';
import logo2 from '../Assets/Logos/Vector (1).png';
import logo3 from '../Assets/Logos/ep_suitcase-line.png';
import logo4 from '../Assets/Logos/lsicon_education-outline.png';
import logo5 from '../Assets/Logos/ix_support.png';
import logo6 from '../Assets/Logos/mdi-light_settings.png';
import logo7 from '../Assets/Logos/Vector (2).png';
import { FiMenu } from 'react-icons/fi';

const Dashboard = () => {
  const [sidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  return (
    <>
      <button className="menu-toggle" onClick={toggleSidebar}>
        <FiMenu />
      </button>

      <div className="dashboard-container">
        <aside className={`sidebar ${sidebarActive ? 'active' : ''}`}>
          <div className='logo-container'>
            <h2 className="logo">CRTD Technologies</h2>
            <p className='logo-subtitle'>Connecting Features</p>
          </div>
          <hr className="divider" />
          <div className="user-profile">
            <div className="avatar">J</div>
            <div className="user-details">
              <p className="username">John Francis D'Souza</p>
              <p className="user-email">john@gmail.com</p>
              <span className="user-id">ID : *******</span>
              <span className="status pending">Registration Pending</span>
            </div>
          </div>
          <hr className="divider" />
          <nav className="nav-links">
            <a href="#" className="nav-link active">
              <img src={logo1} alt="Dashboard" className="nav-icon" />
              Dashboard
            </a>
            <a href="/ProfileForm" className="nav-link">
              <img src={logo2} alt="Personal details" className="nav-icon" />
              Personal details
            </a>
            <a href="#" className="nav-link">
              <img src={logo4} alt="Educational info" className="nav-icon" />
              Educational info
            </a>
            <a href="#" className="nav-link">
              <img src={logo3} alt="Job Board" className="nav-icon" />
              Job Board <span className="badge locked">Locked</span>
            </a>
            <a href="#" className="nav-link">
              <img src={logo5} alt="Career Guidance" className="nav-icon" />
              Career Guidance <span className="badge locked">Locked</span>
            </a>
            <a href="#" className="nav-link">
              <img src={logo6} alt="Settings" className="nav-icon" />
              Settings
            </a>
            <button className="signout-btn">
              <img src={logo7} alt="Sign out" className="signout-icon" />
              Sign Out
            </button>
          </nav>
        </aside>
      </div>
    </>
  );
};

export default Dashboard;