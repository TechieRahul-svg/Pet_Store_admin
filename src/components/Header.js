import React from 'react';

function Header({ pageTitle }) {
  return (
    <header className="header">
      <div className="page-title">{pageTitle}</div>
      <div className="doctor-profile">
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontWeight: '600' }}>Dr. Sarah Wilson</div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Veterinary Surgeon</div>
        </div>
        <div className="avatar">SW</div>
      </div>
    </header>
  );
}

export default Header;
