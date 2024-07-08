import { Link } from "react-router-dom";
import { useContext } from "react";
import { MainContext } from "./MyContext";
import ToggleButton from "./ToggleButton";
import logo from "../logo.svg";
export default function Header() {
  const { username, setShowUserNameForm } = useContext(MainContext);
  return (
    <nav id='header'>
      <ul className='headerItems'>
        <li className='headerItem'>
          <Link to={"/"} className='headerLogoWrapper'>
            <img src={logo} className='headerLogo' />
          </Link>
          <p className='headerTextArea'>
            Hey,
            <button
              type='button'
              id='headerUserName'
              onClick={() => {
                setShowUserNameForm(true);
              }}>
              {username !== "" ? username : "User"}
            </button>
          </p>
        </li>
        <li className='headerItem'>
          <ToggleButton />
        </li>
      </ul>
    </nav>
  );
}
