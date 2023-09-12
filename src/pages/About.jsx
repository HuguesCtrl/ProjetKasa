import Footer from "../components/Footer";
import ArrowDown from "../assets/img/ArrowDown.png";
import Montagnes from "../assets/img/ImageAbout.png";

function About() {
  return (
    <div className="about-container">
      <header className="hero-image">
        <img src={Montagnes} alt="" />
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
