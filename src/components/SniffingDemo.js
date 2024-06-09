// src/components/SniffingDemo.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SniffingDemo = () => {
  const [formData, setFormData] = useState({ message: '' });
  const [capturedData, setCapturedData] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCapturedData([...capturedData, formData.message]);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="demo">
      <h2>Sniffing Demonstration</h2>
      <p>Enter a message to see how it can be sniffed by an attacker:</p>
      <div className="user-hacker-screen">
        <div className="user-screen">
          <h3>User's Screen</h3>
          <form onSubmit={handleSubmit}>
            <label>
              Message:
              <input type="text" name="message" value={formData.message} onChange={handleChange} />
            </label>
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="hacker-screen">
          <h3>Hacker's Screen</h3>
          <div className="network-simulator">
            {capturedData.map((data, index) => (
              <motion.div
                key={index}
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 50 }}
                className="packet"
              >
                {data}
              </motion.div>
            ))}
          </div>
          <div className="traffic-capture">
            <h3>Captured Packets</h3>
            {capturedData.map((data, index) => (
              <div key={index}>{data}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="explanation">
        <h3>Explanation</h3>
        <p>When you send a message, the attacker can capture it through sniffing tools, as shown on the hacker's screen.</p>
      </div>
    </motion.div>
  );
};

export default SniffingDemo;
