import Rochers from "../assets/img/ImageHome.png";
import Footer from "../components/Footer";
import { getAPIresult } from "../theme/APIcontext";
import { useContext } from "react";
import AppartementSheets from "../components/AppartmentSheets";
import { NavLink } from "react-router-dom";

function Home() {
  const { loading, error, data } = useContext(getAPIresult);
  console.log(data);
  return (
    <div>
      <header className="hero-image">
        <img src={Rochers} alt="Bord de mer rocailleux" />
        <h1>Chez vous, partout et ailleurs</h1>
      </header>
      <section className="appartment-section">
        {data?.map((item) => (
          <NavLink to={"/single/" + item.id} key={item.id}>
            <AppartementSheets item={item} />
          </NavLink>
        ))}
      </section>
      <Footer />
    </div>
  );
}
export default Home;
