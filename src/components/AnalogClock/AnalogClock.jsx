import React from "react";
import "./AnalogClock.css";
import { useState, useEffect } from "react";

const AnalogClock = ({ testTime }) => {
  const time = testTime ? new Date(testTime) : new Date();

  const hours = time.getHours();
  const minutes = time.getMinutes();

  const hourDeg = (hours % 12) * 30 + minutes * 0.5;
  const minuteDeg = minutes * 6;

  return (
    <div className="clock-container">
      <div
        className="hand hour"
        style={{ transform: `rotate(${hourDeg}deg)` }}
      ></div>
      <div
        className="hand minute"
        style={{ transform: `rotate(${minuteDeg}deg)` }}
      ></div>
      <div className="center-dot"></div>
    </div>
  );
};
export default AnalogClock;
