import { useRef, useState } from "react";

const Stopwatch = () => {
  // time state
  const [starTime, setStartTime] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);

  // interval ref
  const intRef = useRef(null);

  // handle timer start
  const handleTimerStart = () => {
    // set start time
    setStartTime(Date.now());

    intRef.current = setInterval(() => {
      setCurrentTime(Date.now());
    }, 10);
  };

  // stop timer
  const handleStopTimer = () => {
    clearInterval(intRef.current);
  };

  // calculate time spend
  const getTimeSpend = (currentTime - starTime) / 1000;
  return (
    <div style={{ width: "70%", margin: "50px auto", textAlign: "center" }}>
      <h2>StopWatch: </h2>
      <h2>{getTimeSpend.toFixed(3)}</h2>
      <button onClick={handleTimerStart}>Start</button>
      <button onClick={handleStopTimer}>Stop</button>
    </div>
  );
};

export default Stopwatch;
