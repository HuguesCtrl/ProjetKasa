import { NavLink } from "react-router-dom";
import LogoKasaRouge from "../assets/img/LogoKasaRouge.png";
function Navbar() {
  return (
    <nav className="main-menu">
      <NavLink to="/">
        <img src={LogoKasaRouge} alt="Logo Kasa" />
      </NavLink>
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
