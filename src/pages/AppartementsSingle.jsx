import ArrowDown from "../assets/img/ArrowDown.png";
import Footer from "../components/Footer";
import ArrowBackward from "../assets/img/ArrowBackward.png";
import ArrowForward from "../assets/img/ArrowForward.png";
import { useParams } from "react-router-dom";
import { useContext, useState, useRef } from "react";
import { getAPIresult } from "../theme/APIcontext";

function AppartementsSingle() {
  const { id } = useParams();
  console.log(id);
  const { loading, error, data } = useContext(getAPIresult);

  const filterData = data?.filter((item) => item.id === id);
  console.log(filterData);

  const rating = filterData[0]?.rating;
  console.log(rating);
  let starRating = [];
  for (let index = 0; index < rating; index++) {
    starRating.push(<i className="fa-solid fa-star"></i>);
  }
  console.log(starRating);

  const [openDescription, setOpenDescription] = useState(false);
  const [openEquipement, setOpenEquipement] = useState(false);

  const description = useRef();
  const equipement = useRef();

  function handleDescriptionOpen() {
    setOpenDescription(!openDescription);
    if (!openDescription) {
      description.current.classList.add("open");
      description.current.classList.remove("close");
    } else {
      description.current.classList.remove("open");
      description.current.classList.add("close");
    }
  }
  function handleEquipementOpen() {
    setOpenEquipement(!openEquipement);
    if (!openEquipement) {
      equipement.current.classList.add("open");
      equipement.current.classList.remove("close");
    } else {
      equipement.current.classList.remove("open");
      equipement.current.classList.add("close");
    }
  }

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
              <h2>{filterData[0]?.title}</h2>
              <p>{filterData[0]?.location}</p>
              <div className="apartment-specification">
                {filterData[0]?.tags.map((item, index) => (
                  <button type="" key={index}>
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="apartement-name">
              <div className="name">
                <h3>{filterData[0]?.host.name}</h3>
                <div className="picture">
                  <img src={filterData[0]?.host.picture} alt="" />
                </div>
              </div>
              <div className="rating">
                <div className="star-rating">
                  {starRating?.map((item, index) => (
                    <span key={index}>{item}</span>
                  ))}
                </div>
                <div className="star-rating grey">
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-star"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="keywords-collapse">
          <div>
            <p>Description</p>
            <img
              src={ArrowDown}
              alt="Fleche vers le bas"
              className="arrow-collapse-description close"
              ref={description}
              onClick={() => handleDescriptionOpen()}
            />
          </div>
          <div className="description-collapse">
            {filterData[0]?.description}
          </div>
          <div>
            <p>Equipements</p>
            <img
              src={ArrowDown}
              alt="Fleche vers le bas"
              className="arrow-collapse-equipement close"
              ref={equipement}
              onClick={() => handleEquipementOpen()}
            />
          </div>
          <div className="equipments-collapse">
            {filterData[0]?.equipments?.map((item, index) => (
              <p key={index} className="equipments-single">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default AppartementsSingle;
