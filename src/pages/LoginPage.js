import React, { useState, useRef } from 'react';

function LoginPage({ onLogin }) {

  const [email, setEmail] = useState('doctor@vetdoctor.com');
  const [password, setPassword] = useState('password123');

  const videoRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="login-container">

      {/* VIDEO BACKGROUND */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="background"
      >
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="overlay"></div>

      {/* LOGIN CARD */}
      <div className="login-card glass animate-fade-in">

        <div className="logo">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
              stroke="url(#paint0_linear)"
              strokeWidth="2"
            />
            <path
              d="M12 8V16M8 12H16"
              stroke="url(#paint0_linear)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="paint0_linear" x1="3" y1="3" x2="21" y2="21">
                <stop stopColor="#4ADE80" />
                <stop offset="1" stopColor="#2D5A27" />
              </linearGradient>
            </defs>
          </svg>

          VETDOCTOR
        </div>

        <h2 style={{ marginBottom: '10px' }}>Doctor Login</h2>

        <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>
          Access your portal
        </p>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-block"
          >
            Login to Dashboard
          </button>

        </form>

        <div className="login-footer">
          <p>Welcome back, Doctor. Your schedule is ready.</p>
        </div>

      </div>
    </div>
  );
}

export default LoginPage;