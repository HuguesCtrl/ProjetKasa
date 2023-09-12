import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";

function Error() {
  return (
    <div className="error-container">
      <div className="error-text">
        <h2>404</h2>
        <p>Oups! la page que vous demandez n'existe pas.</p>
        <NavLink to="/">Retourner sur la page d'accueil</NavLink>
      </div>
      <Footer />
    </div>
  );
}
export default Error;
