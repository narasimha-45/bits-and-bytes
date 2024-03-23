import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css'; // Import your CSS file for styling

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    axios.post('http://localhost:4000/usersApi/login-user', { username, password })
    .then((response) => {
      if (!response.data.status) {
        window.alert('Invalid credentials! Please try again.');
      } else {
        alert("Logged in")
      }
    })
    .catch((err) => {
      alert(err);
    });
  };

  return (
    <div className="login-page">
      <div className="left-half">
        <div className="website-name">Connect</div>
      </div>
      <div className="right-half">
        <div className="login-container">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
          <div className="forgot-password">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
          <div className="not-registered">
            <span>Not yet registered?</span>
            <Link to="/register">Register now</Link> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
