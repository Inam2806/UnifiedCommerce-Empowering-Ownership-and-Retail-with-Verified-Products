import React, { useState } from 'react';
import axios from 'axios';
import '../style/Login_Register.scss'; 

const Login = ({ onLogin }) => { 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [retailerCode, setRetailerCode] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/RetailerLogin', {
        username,
        password,
        retailerCode
      });
      const token = response.data.token;
      if (token) { 
        onLogin(token); 
        localStorage.setItem('token', token);
        console.log('Login successful:', response.data);
      } else {
        setError('Invalid token');
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="container_login_register">
      <h1>Retailer Dashboard</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"} // Toggle input type
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className={`eye-button ${showPassword ? "active" : ""}`} // Add active class when showPassword is true
            onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
          >
            {showPassword ? "🙈" : "👁️"} {/* You can replace with an icon */}
          </button>
        </div>
        <input
          type="text"
          placeholder="Retailer Code"
          value={retailerCode}
          onChange={(e) => setRetailerCode(e.target.value)}
        />
        <button className='login-register' type="submit">Retailer Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>

      <p>Don't have an account? <a href="/Retailer-Registration" className="login-register-link">Register</a></p>
    </div>
  );
};

export default Login;