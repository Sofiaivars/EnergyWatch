import React from "react";
import "./App.css";
import EnergyBar from "./components/EnergyBar/EnergyBar";
import AnalogClock from "./components/AnalogClock/AnalogClock";
import Watch from "./components/Watch/Watch";

const testTime = new Date("2025-05-12T13:25:00");

function App() {
  return (
    <>
      <Watch />
      <EnergyBar testTime={testTime} />
      <AnalogClock testTime={testTime} />
    </>
  );
}

export default App;
