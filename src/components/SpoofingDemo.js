// src/components/SpoofingDemo.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SpoofingDemo = () => {
  const [ipAddress, setIpAddress] = useState('');
  const [arpTable, setArpTable] = useState([
    { ip: '192.168.0.1', mac: 'AA:BB:CC:DD:EE:FF' },
    { ip: '192.168.0.2', mac: 'FF:EE:DD:CC:BB:AA' },
  ]);

  const handleSpoof = () => {
    setArpTable([
      { ip: '192.168.0.1', mac: 'FF:EE:DD:CC:BB:AA' },
      { ip: '192.168.0.2', mac: 'FF:EE:DD:CC:BB:AA' },
    ]);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="demo">
      <h2>Spoofing Demonstration</h2>
      <p>Enter an IP address to see how spoofing works:</p>
      <div className="user-hacker-screen">
        <div className="user-screen">
          <h3>User's Screen</h3>
          <label>
            IP Address:
            <input
              type="text"
              value={ipAddress}
              onChange={(e) => setIpAddress(e.target.value)}
            />
          </label>
          <button onClick={handleSpoof}>Spoof</button>
        </div>
        <div className="hacker-screen">
          <h3>Hacker's Screen</h3>
          <div className="arp-table">
            <h3>ARP Table</h3>
            {arpTable.map((entry, index) => (
              <motion.div
                key={index}
                initial={{ x: '100vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 50 }}
              >
                IP: {entry.ip}, MAC: {entry.mac}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="explanation">
        <h3>Explanation</h3>
        <p>When the attacker spoofs the ARP table, it tricks the user into sending data to the attacker's MAC address, as shown on the hacker's screen.</p>
      </div>
    </motion.div>
  );
};

export default SpoofingDemo;
