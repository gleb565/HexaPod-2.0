import React, { useState, useEffect } from 'react';
import styles from './Time.module.scss'

function Clock() {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateState(new Date());
    }, 1000); // Обновлять каждую секунду

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className={styles.times}>
      <p>
        {dateState.toLocaleTimeString('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </p>
    </div>
  );
}

export default Clock;