// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';  // Importing a CSS file for styling

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }} 
      className="home"
    >
      <div className="overlay"></div> {/* Adding an overlay for a hacker effect */}
      <div className="binary-container">
        <div className="binary"></div>
        <div className="binary"></div>
        <div className="binary"></div>
      </div>
      <div className="content">
        <h1>CYBER AWARE</h1>
        <p>
          Learn about sniffing, spoofing, phishing attacks, and Man in the Middle attacks through interactive demonstrations.
        </p>
        <nav>
          <ul>
            <li><Link to="/sniffing">Sniffing Attack</Link></li>
            <li><Link to="/spoofing">Spoofing Attack</Link></li>
            <li><Link to="/phishing">Phishing Attack</Link></li>
            <li><Link to="/Animation">Man In The Middle Attack</Link></li>
          </ul>
        </nav>
      </div>
    </motion.div>
  );
};

export default Home;
