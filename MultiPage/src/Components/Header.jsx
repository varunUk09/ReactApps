import { Link } from "react-router-dom";
export default function Header() {
  return (
    <nav id='header'>
      <ul id='headerItems'>
        <li className='headerItem'>
          <Link to={"/"}>Home</Link>
        </li>
        <li className='headerItem'>
          <Link to={"about"}>About</Link>
        </li>
        <li className='headerItem'>
          <Link to={"contact"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
