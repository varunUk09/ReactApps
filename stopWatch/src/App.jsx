import { useState, useEffect } from "react";
let secInterval;
export default function App() {
  const [sec, setSec] = useState(null);
  const [min, setMin] = useState(null);
  const [hr, setHr] = useState(null);
  const [dy, setDy] = useState(null);
  useEffect(() => {
    if (sec === 0) {
      setMin(prevMin => {
        let newMin = prevMin + 1;
        if (newMin < 60) {
          return newMin;
        } else {
          return 0;
        }
      });
    }
  }, [sec]);
  useEffect(() => {
    if (min === 0) {
      setHr(prevHr => {
        let newHr = prevHr + 1;
        if (newHr < 24) {
          return newHr;
        } else {
          return 0;
        }
      });
    }
  }, [min]);
  useEffect(() => {
    if (hr === 0) setDy(prevDy => prevDy + 1);
  }, [hr]);
  const startTimer = () => {
    clearInterval(secInterval);
    secInterval = setInterval(() => {
      setSec(prevSec => {
        let newSec = prevSec + 1;
        if (newSec < 60) {
          return newSec;
        } else {
          return 0;
        }
      });
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(secInterval);
  };
  const resetTimer = () => {
    setSec(null);
    setDy(null);
    setHr(null);
    setDy(null);
    clearInterval(secInterval);
  };
  return (
    <div className='wrapper'>
      <div>
        {dy !== null ? <span className='dy'>{dy}</span> : <span className='dy'>0</span>}
        {hr !== null ? <span className='hr'>{hr}</span> : <span className='hr'>0</span>}
        {min !== null ? <span className='min'>{min}</span> : <span className='min'>0</span>}
        {sec !== null ? <span className='sec'>{sec}</span> : <span className='sec'>0</span>}
      </div>
      <div className='cta-grp'>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
