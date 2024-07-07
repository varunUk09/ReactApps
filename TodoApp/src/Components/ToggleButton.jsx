import { useState, useEffect } from "react";
export default function ToggleButton() {
  const [isActive, setActive] = useState(false);
  const updateTheme = () => {
    setActive(!isActive);
  };
  useEffect(
    function () {
      if (isActive) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }

      // Cleanup function
      return () => {
        document.body.classList.remove("dark");
      };
    },
    [isActive]
  );
  return (
    <div className={`toggle ${isActive ? "active" : ""}`} id='toggleBtn' onClick={updateTheme}>
      <div className='toggle-inner'></div>
    </div>
  );
}
