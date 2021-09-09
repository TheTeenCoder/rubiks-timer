import React, { useEffect, useRef, useState } from "react";
import { useLastTime } from "../hooks/storage";

const Timer = () => {
  const [time, setTime] = useState(0.0);
  const [isCounting, setIsCounting] = useState(false);
  const SPACE_KEY = 32;
  const counterRef = useRef();
  const [lastTime, setLastTime] = useLastTime();

  const handleIncrement = () => {
    setTime(0.0);
    setIsCounting(true);
    counterRef.current = setInterval(() => {
      setTime((state) => state + 0.1);
    }, 100);
  };

  const handleStop = () => {
    clearInterval(counterRef.current);
    setIsCounting(false);
    setLastTime(time.toFixed(1));
  };

  const handleKeyDown = (event) => {
    switch (event.keyCode) {
      case SPACE_KEY:
        if (isCounting) {
          console.log("stop it");
          handleStop();
        } else {
          console.log("continue");
          handleIncrement();
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    console.log("test");
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div className="text-gray-700 justify-center items-center flex flex-col container texct-gray-300">
      {lastTime && <h3>Last time: {lastTime}s</h3>}
      <span className="flex items-center space-x-2">
        <h1>{time.toFixed(1)}</h1>
        {!isCounting && <h4>seconds.</h4>}
      </span>
    </div>
  );
};

export default Timer;
