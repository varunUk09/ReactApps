import { useState } from "react";
import "./App.css";

function App() {
  const [temp, setTemp] = useState(0);
  const handleIncrease = () => {
    if (temp < 100) {
      setTemp(temp + 1);
    }
  };
  const handleDecrease = () => {
    if (temp > 0) {
      setTemp(temp - 1);
    }
  };
  return (
    <>
      <div className='wrapper'>
        <div className='container'>
          <span
            style={{
              backgroundColor: temp >= 20 ? "red" : "white",
            }}>
            {temp} C
          </span>
          <div className='btn-group'>
            <button onClick={handleDecrease}>-</button>
            <button onClick={handleIncrease}>+</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
