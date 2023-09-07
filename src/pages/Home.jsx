import Rochers from "../assets/img/ImageSource1.png";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <header className="hero-image">
        <h1>Chez vous partout et ailleurs</h1>
      </header>
      <section className="appartment-section">
        <div className="appartment-single">
          <h2>Titre de la location</h2>
        </div>
        <div className="appartment-single">
          <h2>Titre de la location</h2>
        </div>

        <div className="appartment-single">
          <h2>Titre de la location</h2>
        </div>
        <div className="appartment-single">
          <h2>Titre de la location</h2>
        </div>
        <div className="appartment-single">
          <h2>Titre de la location</h2>
        </div>
        <div className="appartment-single">
          <h2>Titre de la location</h2>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default Home;
