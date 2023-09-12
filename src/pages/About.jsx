import Footer from "../components/Footer";
import ArrowDown from "../assets/img/ArrowDown.png";
import Montagnes from "../assets/img/ImageAbout.png";
import { useState, useRef } from "react";

function About() {
  const [openFiability, setOpenFiability] = useState(false);
  const [openRespect, setOpenRespect] = useState(false);
  const [openService, setOpenService] = useState(false);
  const [openSecurity, setOpenSecurity] = useState(false);

  const fiability = useRef();
  const respect = useRef();
  const service = useRef();
  const security = useRef();

  function handleFiabilityOpen() {
    setOpenFiability(!openFiability);
    if (!openFiability) {
      fiability.current.classList.add("open");
      fiability.current.classList.remove("close");
    } else {
      fiability.current.classList.remove("open");
      fiability.current.classList.add("close");
    }
  }
  function handleRespectOpen() {
    setOpenRespect(!openRespect);
    if (!openRespect) {
      respect.current.classList.add("open");
      respect.current.classList.remove("close");
    } else {
      respect.current.classList.remove("open");
      respect.current.classList.add("close");
    }
  }
  function handleServiceOpen() {
    setOpenService(!openService);
    if (!openService) {
      service.current.classList.add("open");
      service.current.classList.remove("close");
    } else {
      service.current.classList.remove("open");
      service.current.classList.add("close");
    }
  }
  function handleSecurityOpen() {
    setOpenSecurity(!openSecurity);
    if (!openSecurity) {
      security.current.classList.add("open");
      security.current.classList.remove("close");
    } else {
      security.current.classList.remove("open");
      security.current.classList.add("close");
    }
  }
  return (
    <div className="about-container">
      <header className="hero-image">
        <img src={Montagnes} alt="" />
      </header>
      <div className="keyword-container">
        <div className="keywords-description">
          <p>Fiabilité</p>
          <img
            src={ArrowDown}
            alt="Fleche bas"
            ref={fiability}
            onClick={() => handleFiabilityOpen()}
            className="close"
          />
        </div>
        <div className="keywords-description">
          <p>Respect</p>
          <img
            src={ArrowDown}
            alt="Fleche bas"
            ref={respect}
            onClick={() => handleRespectOpen()}
            className="close"
          />
        </div>
        <div className="keywords-description">
          <p>Service</p>
          <img
            src={ArrowDown}
            alt="Fleche bas"
            ref={service}
            onClick={() => handleServiceOpen()}
            className="close"
          />
        </div>
        <div className="keywords-description">
          <p>Sécurité</p>
          <img
            src={ArrowDown}
            alt="Fleche bas"
            ref={security}
            onClick={() => handleSecurityOpen()}
            className="close"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default About;
