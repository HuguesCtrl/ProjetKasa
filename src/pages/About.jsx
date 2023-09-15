import Footer from "../components/Footer";
import ArrowDown from "../assets/img/ArrowDown.png";
import Montagnes from "../assets/img/ImageAbout.png";
import { useState, useRef, useContext } from "react";
import { getAPIresult } from "../theme/APIcontext";
import Accordion from "../components/Accordion";
import Banner from "../components/Banner";

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
      fiabilityText.current.classList.add("active");
    } else {
      fiability.current.classList.remove("open");
      fiability.current.classList.add("close");
      fiabilityText.current.classList.remove("active");
    }
  }
  function handleRespectOpen() {
    setOpenRespect(!openRespect);
    if (!openRespect) {
      respect.current.classList.add("open");
      respect.current.classList.remove("close");
      respectText.current.classList.add("active");
    } else {
      respect.current.classList.remove("open");
      respect.current.classList.add("close");
      respectText.current.classList.remove("active");
    }
  }
  function handleServiceOpen() {
    setOpenService(!openService);
    if (!openService) {
      service.current.classList.add("open");
      service.current.classList.remove("close");
      serviceText.current.classList.add("active");
    } else {
      service.current.classList.remove("open");
      service.current.classList.add("close");
      serviceText.current.classList.remove("active");
    }
  }
  function handleSecurityOpen() {
    setOpenSecurity(!openSecurity);
    if (!openSecurity) {
      security.current.classList.add("open");
      security.current.classList.remove("close");
      securityText.current.classList.add("active");
    } else {
      security.current.classList.remove("open");
      security.current.classList.add("close");
      securityText.current.classList.remove("active");
    }
  }
  const fiabilityText = useRef();
  const respectText = useRef();
  const serviceText = useRef();
  const securityText = useRef();

  const FiabilityPara = `Les annonces postées sur Kasa garantissent une fiablitée totale.
  Les photos sont conformes aux logements, et toutes les
  informations sont régulièrement vérifiées par nos équipes.`;
  const respectPara = `La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
  comportement discriminatoire ou de perturbation du voisinage
  entraînera une exclusion de notre plateforme`;
  const servicesPara = `Bienvenue chez nous, votre havre de paix loin de chez vous. Chez
  Kasa, nous sommes déterminés à vous offrir une expérience unique
  et mémorable, que vous soyez en voyage d'affaires ou en vacances.`;
  const securityPara = `La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
  pour les voyageurs, chaque logement correspond aux critères de
  sécurité établis par nos services. En laissant une note aussi bien
  à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
  que les standards sont bien respectés. Nous organisons également
  des ateliers sur la sécurité domestique pour nos hôtes.`;
  return (
    <div className="about-container">
      <Banner source={Montagnes} altText="Paysage Montagneux" />
      <div className="keyword-about">
        <div className="keyword-container">
          <Accordion label="Fiabilité" content={FiabilityPara} isAbout={true} />
        </div>
        <div className="keyword-container">
          <Accordion label="Respect" content={respectPara} isAbout={true} />
        </div>
        <div className="keyword-container">
          <Accordion label="Service" content={servicesPara} isAbout={true} />
        </div>
        <div className="keyword-container">
          <Accordion label="Sécurité" content={securityPara} isAbout={true} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default About;
