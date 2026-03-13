import React from 'react';

const LoginPage = ({ credentials, setCredentials, handleLogin }) => {
  return (
    <div id="login-page">
      <div className="login-card glass fade-in">
        <div className="logo-container">
          <i className="fas fa-paw" />
          <h2>PetStore Admin</h2>
          <p>Enter your credentials to manage the store</p>
        </div>
        <form id="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="admin"
              required
              value={credentials.username}
              onChange={(event) =>
                setCredentials((current) => ({ ...current, username: event.target.value }))
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              required
              value={credentials.password}
              onChange={(event) =>
                setCredentials((current) => ({ ...current, password: event.target.value }))
              }
            />
          </div>
          <button type="submit" className="btn-primary">
            Sign In
          </button>
          <div className="login-help-text">Demo account: admin / admin</div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
