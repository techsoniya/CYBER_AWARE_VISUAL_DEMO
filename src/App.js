// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SniffingDemo from './components/SniffingDemo';
import SpoofingDemo from './components/SpoofingDemo';
import PhishingDemo from './components/PhishingDemo';
import AnimationDemo from './components/Animation';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sniffing" element={<SniffingDemo />} />
          <Route path="/spoofing" element={<SpoofingDemo />} />
          <Route path="/phishing" element={<PhishingDemo />} />
          <Route path="/animation" element={<AnimationDemo/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
