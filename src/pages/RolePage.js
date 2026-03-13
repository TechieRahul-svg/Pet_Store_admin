import React from 'react';

function RolePage({ onRoleSelect }) {
  return (
    <div className="login-container">
      <div className="login-card glass animate-fade-in" style={{ maxWidth: '600px' }}>
        <div className="logo">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="url(#paint0_linear)" strokeWidth="2"/>
            <path d="M12 8V16M8 12H16" stroke="url(#paint0_linear)" strokeWidth="2" strokeLinecap="round"/>
            <defs>
              <linearGradient id="paint0_linear" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4ADE80"/>
                <stop offset="1" stopColor="#2D5A27"/>
              </linearGradient>
            </defs>
          </svg>
          VETDOCTOR
        </div>
        <h2 style={{ marginBottom: '10px' }}>Welcome to VETDOCTOR</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>Select your role to continue</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <button 
            onClick={() => onRoleSelect('doctor')}
            style={{
              padding: '30px 20px',
              background: 'var(--glass)',
              border: '1px solid var(--glass-border)',
              borderRadius: '12px',
              color: 'white',
              cursor: 'pointer',
              textAlign: 'center',
              transition: 'var(--transition)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(45, 90, 39, 0.2)';
              e.currentTarget.style.borderColor = 'var(--primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--glass)';
              e.currentTarget.style.borderColor = 'var(--glass-border)';
            }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ margin: '0 auto 16px' }}>
              <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <h3 style={{ marginBottom: '8px' }}>Doctor</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Manage schedule & appointments</p>
          </button>

          <button 
            onClick={() => onRoleSelect('pet_owner')}
            style={{
              padding: '30px 20px',
              background: 'var(--glass)',
              border: '1px solid var(--glass-border)',
              borderRadius: '12px',
              color: 'white',
              cursor: 'pointer',
              textAlign: 'center',
              transition: 'var(--transition)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(45, 90, 39, 0.2)';
              e.currentTarget.style.borderColor = 'var(--primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--glass)';
              e.currentTarget.style.borderColor = 'var(--glass-border)';
            }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ margin: '0 auto 16px' }}>
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <h3 style={{ marginBottom: '8px' }}>Pet Owner</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Book appointments</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default RolePage;
