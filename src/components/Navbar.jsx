import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink>Accueil</NavLink>
        </li>
        <li>
          <NavLink>A propos</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
