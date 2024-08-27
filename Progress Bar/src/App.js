import React, {useState} from "react";
import "./App.css";

export default function App() {
  const [barValue, setBarValue] = useState("");
  
  const handleValue = (e) => {
    const {value} = e.target;
    const numValue = Number(value);
    setBarValue(Math.max(0, Math.min(100, numValue)));
  }

  return (
      <div className="App">
        <h1>Progress bar</h1>
        <form>
          <label htmlFor="barValue">Input Percentage:</label>
          <input 
          id="barValue"
          type="number" 
          min="0"
          max="100"
          value={barValue} 
          onChange={handleValue} />
        </form>
        <div
          className="progress-bar-fill"
          style={{width: `${barValue}%`}}
        >
          {barValue}%
        </div>
      </div>
  );
}
