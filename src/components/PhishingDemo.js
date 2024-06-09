// src/components/PhishingDemo.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../assets/styles.css'; // Ensure this file includes your shared styles
import './Animation.css'; // Additional styles specific to Animation component
import AmazonLogo from '../assets/logo.png'; // Import the logo image

const PhishingDemo = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [capturedData, setCapturedData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCapturedData(formData);
    alert('Phishing attack simulated! Your data has been captured.');
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="demo">
      <h2>Phishing Demonstration</h2>
      <p>Enter your login credentials to see how phishing works:</p>
      <div className="user-hacker-screen">
        <div className="user-screen">
          <div className="logo">
            {/* Display the Amazon logo */}
            <img src={AmazonLogo} alt="Amazon Logo" />
          </div>
          <h3>Sign-In</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Email or mobile phone number</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Your email or phone number"
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Your password"
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <button type="submit" className="signin-button">Sign-In</button>
            </div>
          </form>
        </div>

        <div className="hacker-screen">
          <h3>Hacker's Screen</h3>
          {capturedData && (
            <div className="captured-data">
              <h3>Captured Data</h3>
              <p>Username: {capturedData.username}</p>
              <p>Password: {capturedData.password}</p>
            </div>
          )}
        </div>
      </div>
      <div className="explanation">
        <h3>Explanation</h3>
        <p>In a phishing attack, the attacker tricks the user into entering their credentials on a fake login form. The data is then captured by the attacker, as shown on the hacker's screen.</p>
      </div>
    </motion.div>
  );
};

export default PhishingDemo;
