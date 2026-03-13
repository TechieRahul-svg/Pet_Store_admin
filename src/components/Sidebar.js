import React from 'react';

<<<<<<< HEAD
function Sidebar({ currentPage, onPageChange, onLogout }) {
  const navItems = [
    { id: 'availability', label: 'My Availability', icon: 'calendar' },
    { id: 'requests', label: 'Appoint Requests', icon: 'users' },
    { id: 'history', label: 'Work History', icon: 'history' }
  ];

  const getIcon = (iconType) => {
    const icons = {
      calendar: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      ),
      users: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      history: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    };
    return icons[iconType] || null;
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        VETDOCTOR
      </div>
      <nav className="nav-links">
        {navItems.map((item) => (
          <div 
            key={item.id}
            className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
            onClick={() => onPageChange(item.id)}
            style={{ cursor: 'pointer' }}
          >
            {getIcon(item.icon)}
            {item.label}
          </div>
        ))}
      </nav>
      <div 
        className="nav-item" 
        style={{ color: 'var(--danger)', marginTop: 'auto', cursor: 'pointer' }}
        onClick={onLogout}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
          <polyline points="16 17 21 12 16 7"></polyline>
          <line x1="21" y1="12" x2="9" y2="12"></line>
        </svg>
        Logout
      </div>
    </aside>
  );
}
=======
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
>>>>>>> 0ed70e0f007f3c3788304c8a51869c012c88de2e

export default Sidebar;
