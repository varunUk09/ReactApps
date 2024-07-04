import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const crrTheme = JSON.parse(localStorage.getItem("crrtheme") || false);
  const [isDarkTheme, setTheme] = useState(crrTheme);
  const handleChangle = () => {
    setTheme(!isDarkTheme);
  };
  useEffect(
    function () {
      const className = "dark";
      const bodyClassList = document.body.classList;
      isDarkTheme ? bodyClassList.add(className) : bodyClassList.remove(className);
      localStorage.setItem("crrtheme", isDarkTheme);
      // Clean up effect
      return () => {
        bodyClassList.remove(className);
      };
    },
    [isDarkTheme]
  );
  return (
    <div className='wrapper'>
      <h1 className='heading'>This is {isDarkTheme ? "Dark" : "Light"} Theme</h1>
      <p className='content'>
        "Embrace the power of change. Every switch in the theme is a new beginning, a fresh perspective. Let your creativity shine as you explore different colors and moods. Remember, the smallest shift can spark the greatest inspiration. Dare to be bold, and let your imagination lead the way to a
        world of endless possibilities."
      </p>
      <label className='themeswitch label'>
        <small>Switch to {isDarkTheme ? "light" : "dark"} </small>
        <input type='checkbox' onChange={handleChangle} checked={isDarkTheme} />
      </label>
    </div>
  );
}

export default App;
