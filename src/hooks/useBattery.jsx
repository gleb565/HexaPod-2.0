import { useState, useEffect } from 'react';

const useBattery = () => {
  const [battery, setBattery] = useState({
    level: 0,
    charging: false,
    chargingTime: 0,
    dischargingTime: 0,
  });

  useEffect(() => {
    let batteryStatus;
    const updateBatteryStatus = (battery) => {
      setBattery({
        level: battery.level,
        charging: battery.charging,
        chargingTime: battery.chargingTime,
        dischargingTime: battery.dischargingTime,
      });
    };

    if ('getBattery' in navigator) {
      navigator.getBattery().then((battery) => {
        updateBatteryStatus(battery);
        batteryStatus = battery;
        batteryStatus.onchargingchange = () => updateBatteryStatus(battery);
        batteryStatus.onlevelchange = () => updateBatteryStatus(battery);
        batteryStatus.ondischargingtimechange = () => updateBatteryStatus(battery);
        batteryStatus.onchargingtimechange = () => updateBatteryStatus(battery);
      });
    } else {
      console.log('API состояния батареи не поддерживается');
    }
  }, []);

  return battery;
};

export default useBattery;