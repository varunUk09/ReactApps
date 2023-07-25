import { useEffect, useState } from "react";
import "./App.css";
import Text from "./Text";
function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setShow(!show);
        }}>
        Click me
      </button>
      {show && <Text />}
    </>
  );
}

export default App;
