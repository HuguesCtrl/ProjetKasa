import ArrowDown from "../assets/img/ArrowDown.png";
import Footer from "../components/Footer";
import ArrowBackward from "../assets/img/ArrowBackward.png";
import ArrowForward from "../assets/img/ArrowForward.png";

function AppartementsSingle() {
  return (
    <div>
      <div className="apartment-single-container">
        <div className="appartment-slider">
          <p>1/4</p>
          <img
            src={ArrowBackward}
            alt="Arrière"
            className="arrow-slider-backward"
          />
          <img
            src={ArrowForward}
            alt="Avant"
            className="arrow-slider-forward"
          />
        </div>
        <div className="apartment-text">
          <div className="flex-disposition">
            <div className="apartment-description">
              <h2>Titre de l'appartment</h2>
              <p>Région de l'appartement</p>
              <div className="apartment-specification">
                <button>Cozy</button>
                <button>Canal</button>
                <button>Paris 10</button>
              </div>
            </div>
            <div className="apartement-name">
              <div className="name">
                <h3>Alexandre Dumas</h3>
                <div className="picture"></div>
              </div>
              <div className="rating">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="keywords-collapse">
          <div>
            <p>Description</p>
            <img src={ArrowDown} alt="Fleche vers le bas" />
          </div>
          <div>
            <p>Equipements</p>
            <img src={ArrowDown} alt="Fleche vers le bas" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default AppartementsSingle;
