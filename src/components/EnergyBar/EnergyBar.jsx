import React from "react";
import "./EnergyBar.css";
import { useState } from "react";
import { useEffect } from "react";

const EnergyBar = ({ testTime = null }) => {
  const [energy, setEnergy] = useState(100);

  useEffect(() => {
    const updateEnergy = () => {
      const now = testTime ? new Date(testTime) : new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const totalMinutes = hours * 60 + minutes;

      const start = 8 * 60;
      const end = 22 * 60;

      if (totalMinutes < start || totalMinutes > end) {
        setEnergy(0);
      } else {
        const minutesPassed = totalMinutes - start;
        const totalRange = end - start;
        const remaining = 100 - (minutesPassed / totalRange) * 100;
        setEnergy(Math.round(remaining));
      }
    };
    updateEnergy();
    const interval = setInterval(updateEnergy, 60000);
    return () => clearInterval(interval);
  }, [testTime]);

  return (
    <div className="energy-bar">
      <div className="energy-fill" style={{ width: `${energy}%` }}></div>
      <div className="energy-text">{energy}%</div>
    </div>
  );
};

export default EnergyBar;
