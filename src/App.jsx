import React from "react";
import "./App.css";
import EnergyBar from "./components/EnergyBar/EnergyBar";
import AnalogClock from "./components/AnalogClock/AnalogClock";
import Watch from "./components/Watch/Watch";

const testTime = new Date("2025-05-12T12:45:00");

function App() {
  return (
    <>
      <Watch />
      <AnalogClock testTime={testTime} />
      <EnergyBar testTime={testTime} />
    </>
  );
}

export default App;
