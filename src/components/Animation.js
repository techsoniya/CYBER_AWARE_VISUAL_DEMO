// src/components/Animation.js

import React, { useState } from 'react';
import '../assets/styles.css'; // Ensure this file includes your shared styles
import './Animation.css'; // Additional styles specific to Animation component
import hackerImg from '../assets/hacker.png';
import victimImg from '../assets/victim.jpeg';
import serverImg from '../assets/server.jpeg';

const Animation = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const [messageToServerClass, setMessageToServerClass] = useState('');
  const [serverMessage, setServerMessage] = useState('Transfer 1000 rupees to Bhoomika');
  const [logs, setLogs] = useState([]);
  const [status, setStatus] = useState({
    victim: 'waiting',
    hacker: 'waiting',
    server: 'waiting',
  });

  const startAttack = () => {
    setStartAnimation(true);
    setLogs([...logs, 'Victim: Transfer 1000 rupees to Bhoomika']);
    setStatus({ victim: 'sent', hacker: 'waiting', server: 'waiting' });

    setTimeout(() => {
      setMessageToServerClass('to-hacker');
    }, 1000);

    setTimeout(() => {
      setMessageToServerClass('to-server to-server-hacked');
      setServerMessage('Transfer 1000 rupees to Soniya');
      setLogs((prevLogs) => [
        ...prevLogs,
        'Hacker: Intercepted message and changed to "Transfer 1000 rupees to Soniya"',
      ]);
      setStatus({ victim: 'sent', hacker: 'intercepted', server: 'waiting' });
    }, 3000);

    setTimeout(() => {
      setLogs((prevLogs) => [...prevLogs, 'Server: Received "Transfer 1000 rupees to Soniya"']);
      setStatus({ victim: 'sent', hacker: 'intercepted', server: 'received' });
    }, 5000);
  };

  return (
    <div className="hack-container">
      <div className="binary-container">
        <div className="binary"></div>
        <div className="binary"></div>
        <div className="binary"></div>
      </div>
      <div className="overlay"></div>
      <div className="container">
        <img src={victimImg} alt="Victim" className="image victim" />
        <img src={hackerImg} alt="Hacker" className="image hacker" />
        <img src={serverImg} alt="Server" className="image server" />

        {startAnimation && (
          <>
            <div className={`message to-server ${messageToServerClass}`}>
              {serverMessage}
            </div>
          </>
        )}
      </div>
      <button className="start-button" onClick={startAttack}>Start Attack</button>
      <div className="status-container">
        <div className={`status victim ${status.victim}`}>Victim: {status.victim}</div>
        <div className={`status hacker ${status.hacker}`}>Hacker: {status.hacker}</div>
        <div className={`status server ${status.server}`}>Server: {status.server}</div>
      </div>
      <div className="logs-container">
        <h2>Message Logs</h2>
        <ul>
          {logs.map((log, index) => (
            <li key={index}>{log}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Animation;
