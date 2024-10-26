import { useRef, useState } from "react";

const Timer = () => {
  // time state
  const [startTime, setStartTime] = useState(null);
  const [targetTime, setTargetTime] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);

  // time ref
  const timerRef = useRef(null);

  //  handle start
  const handleCountDownStart = () => {
    setStartTime(Date.now());
    // set start time
    timerRef.current = setInterval(() => {
      setCurrentTime(Date.now());

      if ((startTime + targetTime * 60 * 1000) === currentTime) {
        clearInterval(timerRef.current);
      }
    }, 10);
  };

  // target time in miliseconds
  const targetTimeStamps = startTime + targetTime * 60 * 1000;
  const remainTime = (targetTimeStamps - currentTime) / 1000;

  return (
    <div style={{ width: "70%", margin: "50px auto", textAlign: "center" }}>
      <h2>Countdown Timer: </h2>
      <h2>Remain {remainTime.toFixed(2)} seconds</h2>
      <input
        type="number"
        placeholder="type minutes"
        value={targetTime}
        onChange={(e) => setTargetTime(e.target.value)}
      />{" "}
      <br /> <br />
      <button onClick={handleCountDownStart}>Start</button>
      <button>Pause</button>
      <button>Stop</button>
    </div>
  );
};

export default Timer;
