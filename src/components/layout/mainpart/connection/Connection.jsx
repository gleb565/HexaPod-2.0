import React, { useState, useEffect } from 'react';
import { IconContext } from 'react-icons';
import { FaWifi, FaSignal, FaBan } from 'react-icons/fa';
import styles from './Connection.module.scss';

const ConnectionQuality = () => {
  const [connectionStatus, setConnectionStatus] = useState('good');

  useEffect(() => {
    const updateConnectionStatus = () => {
      const statuses = ['good', 'average', 'poor'];
      setConnectionStatus(statuses[Math.floor(Math.random() * statuses.length)]);
    };

    const interval = setInterval(updateConnectionStatus, 5000);
    return () => clearInterval(interval);
  }, []);

  const getIcon = () => {
    switch (connectionStatus) {
      case 'good':
        return <FaWifi className={`${styles.icon} ${styles.good}`} />;
      case 'average':
        return <FaSignal className={`${styles.icon} ${styles.average}`} />;
      case 'poor':
        return <FaBan className={`${styles.icon} ${styles.poor}`} />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.connectionQuality}>
      <IconContext.Provider value={{ size: '50px' }}>
        {getIcon()}
      </IconContext.Provider>
    </div>
  );
};

export default ConnectionQuality;