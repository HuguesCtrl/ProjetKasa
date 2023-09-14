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

  const descriptionArrow = useRef();
  const equipmentsArrow = useRef();
  const descriptionText = useRef();
  const equipmentsText = useRef();

  function handleDescriptionOpen() {
    setOpenDescription(!openDescription);
    if (!openDescription) {
      descriptionArrow.current.classList.add("open");
      descriptionText.current.classList.add("active");
    } else {
      descriptionArrow.current.classList.remove("open");
      descriptionText.current.classList.remove("active");
    }
  }
  function handleEquipementOpen() {
    setOpenEquipement(!openEquipement);
    if (!openEquipement) {
      equipmentsArrow.current.classList.add("open");
      equipmentsText.current.classList.add("active");
    } else {
      equipmentsArrow.current.classList.remove("open");
      equipmentsText.current.classList.remove("active");
    }
  }
  const [indexImage, setIndexImage] = useState(0);
  let imagesSlider = filterData[0]?.pictures;
  console.log(imagesSlider, indexImage);

  return (
    <div className="single-container">
      <div className="apartment-single-container">
        <div className="appartment-slider">
          {
            <img
              src={filterData[0]?.pictures[indexImage]}
              alt=""
              className="img-slider"
            />
          }
          <p>
            {`${indexImage + 1}` + "/" + `${filterData[0]?.pictures.length}`}
          </p>
          <img
            src={ArrowBackward}
            alt="Arrière"
            className="arrow-slider-backward"
            onClick={() => {
              if (indexImage > 0) {
                setIndexImage(indexImage - 1);
              } else {
                setIndexImage(filterData[0]?.pictures.length - 1);
              }
            }}
          />
          <img
            src={ArrowForward}
            alt="Avant"
            className="arrow-slider-forward"
            onClick={() => {
              if (indexImage < filterData[0]?.pictures.length - 1) {
                setIndexImage(indexImage + 1);
              } else {
                setIndexImage(0);
              }
            }}
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
          {/* Partie description */}
          <div className="description">
            <div className="description-label">
              <p>Description</p>
              <img
                src={ArrowDown}
                alt="Arrow"
                className="arrow-collapse-description"
                ref={descriptionArrow}
                onClick={() => handleDescriptionOpen()}
              />
            </div>
            <div className="description-text" ref={descriptionText}>
              {<p>{filterData[0]?.description}</p>}
            </div>
          </div>
          {/* Partie equipments */}
          <div className="equipments">
            <div className="equipments-label">
              <p>Equipments</p>
              <img
                src={ArrowDown}
                alt="Arrow"
                className="arrow-collapse-equipement"
                ref={equipmentsArrow}
                onClick={() => handleEquipementOpen()}
              />
            </div>
            <div className="equipments-text" ref={equipmentsText}>
              {
                <ul>
                  {filterData[0]?.equipments.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              }
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default AppartementsSingle;
