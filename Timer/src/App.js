import "./App.css";
import { useState, useRef, useEffect } from "react";

export default function App() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if(!isRunning){
    intervalRef.current = setInterval(() =>{
        setTimer(prevTimer => prevTimer + 1)
      }, 1000);
    }
    setIsRunning(true);
  };

  const pauseTimer = () => {
    if(intervalRef.current){
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsRunning(false);
  };

  const stopTimer = () => {
    if(intervalRef.current){
     clearInterval(intervalRef.current);
     intervalRef.current = null;
    }
    setIsRunning(false);
    setTimer(0);
  };

  useEffect(() => {
    return () => {
      if(intervalRef.current){
        clearInterval(intervalRef.current);
      }
    }
  }
  ,[]);

  const formatTime = (time) => {
   const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  }

  return (
    <div className="container">
      <h1>Timer</h1>
      <span > {formatTime(timer)}</span>
      <div>
        <button onClick={startTimer} disabled={isRunning}>Start</button>
        <button onClick={pauseTimer} disabled={!isRunning}>Pause</button>
        <button onClick={stopTimer} disabled={!isRunning}>Stop</button>
      </div>
    </div>
  );
}



