import Rochers from "../assets/img/ImageHome.png";
import Spinner from "../assets/spinner.svg";
import Footer from "../components/Footer";
import { getAPIresult } from "../theme/APIcontext";
import { useContext } from "react";
import AppartmentVignette from "../components/AppartmentVignette";
import { NavLink } from "react-router-dom";
import Banner from "../components/Banner";

function Home() {
  const { loading, error, data } = useContext(getAPIresult);
  console.log(data);
  const txtHome = `Chez vous, partout et ailleurs`;
  return (
    <div>
      <Banner
        source={Rochers}
        txt={txtHome}
        altText="Bord de mer roccailleux"
      />
      <section className="appartment-section">
        {loading && <img src={Spinner} alt="Icône de chargement" />}
        {error && <h2>Une erreur est survenue, No/Bad fetch URL</h2>}
        {data &&
          data?.map((item) => (
            <NavLink to={"/single/" + item.id} key={item.id}>
              <AppartmentVignette item={item} />
            </NavLink>
          ))}
      </section>
      <Footer />
    </div>
  );
}
export default Home;
