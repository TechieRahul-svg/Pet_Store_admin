import React from 'react';

const Sidebar = ({ isOpen, closeSidebar, activeSection, setActiveSection, handleLogout }) => {
  return (
    <aside className={`sidebar glass ${isOpen ? 'open' : ''}`}>
      <button type="button" className="sidebar-close" onClick={closeSidebar} aria-label="Close sidebar">
        <i className="fas fa-times" />
      </button>
      <div className="nav-logo">
        <i className="fas fa-paw nav-logo-icon" />
        <h2 className="nav-logo-title">PetStore</h2>
      </div>
      <ul className="nav-links">
        <li className="nav-item">
          <button
            type="button"
            className={`nav-link ${activeSection === 'pets-section' ? 'active' : ''}`}
            onClick={() => setActiveSection('pets-section')}
          >
            <i className="fas fa-dog" /> Available Pets
          </button>
        </li>
        <li className="nav-item">
          <button
            type="button"
            className={`nav-link ${activeSection === 'requests-section' ? 'active' : ''}`}
            onClick={() => setActiveSection('requests-section')}
          >
            <i className="fas fa-heart" /> Adoption Requests
          </button>
        </li>
        <li className="nav-item">
          <button
            type="button"
            className={`nav-link ${activeSection === 'history-section' ? 'active' : ''}`}
            onClick={() => setActiveSection('history-section')}
          >
            <i className="fas fa-history" /> Store History
          </button>
        </li>
      </ul>
      <div className="user-block">
        <div className="user-row">
          <div className="user-avatar">
            <i className="fas fa-user-tie" />
          </div>
          <div>
            <p className="user-title">Store Manager</p>
            <button type="button" className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
