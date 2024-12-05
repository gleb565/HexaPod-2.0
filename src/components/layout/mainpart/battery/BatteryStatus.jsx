import React from 'react';
import { FiBattery, FiBatteryCharging } from 'react-icons/fi'; // Импортируем необходимые иконки
import useBattery from '../../../../hooks/useBattery.jsx';
import styles from './BatteryStatus.module.scss';

const BatteryStatus = () => {
  const battery = useBattery();

  return (
    <div className={styles['battery-container']}>
      <div
        className={`battery ${battery.charging? 'charging' : ''} ${battery.level < 0.2? 'low' : ''}`}
        style={{ '--level': battery.level * 100 }}
      >
        <FiBattery className={styles['battery-icon']} />
        <div className={styles['battery-level']}></div>
        {battery.charging && <FiBatteryCharging className={styles['battery-charging-icon']} />}
        <span className={styles['battery-percentage']}>
          {Math.round(battery.level * 100)}%
        </span>
      </div>
    </div>
  );
};

export default BatteryStatus;