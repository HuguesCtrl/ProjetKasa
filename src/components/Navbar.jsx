import { NavLink } from "react-router-dom";
import LogoKasa from "../assets/img/LogoKasa.png";
function Navbar() {
  return (
    <nav className="main-menu">
      <img src={LogoKasa} alt="Logo Kasa" />
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            A propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
