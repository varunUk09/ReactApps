import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <p>{counter}</p>
      <div>
        <button onClick={() => setCounter(counter + 1)}>Increase</button>
        <button onClick={() => counter > 0 && setCounter(counter - 1)}>Decrease</button>
        <button onClick={() => setCounter(0)}>Reset</button>
      </div>
    </div>
  );
}
