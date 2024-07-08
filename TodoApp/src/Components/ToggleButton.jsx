import { HeaderContext } from "./MyContext";
import { useContext } from "react";
export default function ToggleButton() {
  const { isDarkTheme, updateTheme } = useContext(HeaderContext);
  return (
    <div className={`toggle ${isDarkTheme ? "active" : ""}`} id='toggleBtn' onClick={updateTheme}>
      <div className='toggle-inner'></div>
    </div>
  );
}
