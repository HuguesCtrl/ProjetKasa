import Footer from "../components/Footer";
import ArrowDown from "../assets/img/ArrowDown.png";

function About() {
  return (
    <div>
      <header className="hero-image">
        <h1>Chez vous partout et ailleurs</h1>
      </header>
      <div className="keyword-container">
        <div className="keywords-description">
          <p>Fiabilité</p>
          <img src={ArrowDown} alt="Fleche bas" />
        </div>
        <div className="keywords-description">
          <p>Respect</p>
          <img src={ArrowDown} alt="Fleche bas" />
        </div>
        <div className="keywords-description">
          <p>Service</p>
          <img src={ArrowDown} alt="Fleche bas" />
        </div>
        <div className="keywords-description">
          <p>Sécurité</p>
          <img src={ArrowDown} alt="Fleche bas" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default About;
