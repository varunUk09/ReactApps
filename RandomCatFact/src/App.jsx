import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [catFact, setCatFact] = useState(null);
  const fetchFact = () => {
    fetch("https://catfact.ninja/fact")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        data && setCatFact(data.fact);
      });
  };
  useEffect(() => {
    fetchFact();
  }, []);
  return (
    <>
      <button
        onClick={() => {
          fetchFact();
        }}>
        Get Cat Fact
      </button>
      {catFact && <p>{catFact}</p>}
    </>
  );
}

export default App;
