import { useState, useEffect } from "react";

export default function App() {
  const [sec, setSec] = useState(50);
  const [min, setMin] = useState(59);
  const [hr, setHr] = useState(11);
  const [dy, setDy] = useState(1);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSec(preSec => {
        let newSec = preSec + 1;
        if (newSec < 60) {
          return newSec;
        } else {
          setMin(prevMin => {
            let newMin = prevMin + 1;
            if (newMin < 60) {
              return newMin;
            } else {
              setHr(prevHr => {
                let newHr = prevHr + 1;
                if (newHr < 12) {
                  return newHr;
                } else {
                  setDy(prevDy => {
                    let newDy = prevDy + 1;
                    return newDy;
                  });
                  return 0;
                }
              });
              return 0;
            }
          });
          return 0;
        }
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className='wrapper'>
      <div>
        {dy >= 0 && <span className='dy'>{dy}</span>}
        {hr >= 0 && <span className='hr'>{hr}</span>}
        {min >= 0 && <span className='min'>{min}</span>}
        {sec >= 0 && <span className='sec'>{sec}</span>}
      </div>
      <div className='cta-grp'>
        <button>Start</button>
        <button>Stop</button>
        <button>Reset</button>
      </div>
    </div>
  );
}
