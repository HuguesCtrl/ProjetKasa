import ArrowDown from "../assets/img/ArrowDown.png";
import Footer from "../components/Footer";
import ArrowBackward from "../assets/img/ArrowBackward.png";
import ArrowForward from "../assets/img/ArrowForward.png";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { getAPIresult } from "../theme/APIcontext";
import Accordion from "../components/Accordion";
import Slider from "../components/Slider";
import Ratings from "../components/Ratings";

function AppartementsSingle() {
  const { id } = useParams();
  console.log(id);
  const { loading, error, data } = useContext(getAPIresult);

  const filterData = data?.filter((item) => item.id === id);
  console.log(filterData);

  const filterDataDescription = filterData[0]?.description;
  const filterDataEquipments = filterData[0]?.equipments;

  const rating = filterData[0]?.rating;
  console.log(rating);
  let starRating = [];
  for (let index = 0; index < rating; index++) {
    starRating.push(<i className="fa-solid fa-star"></i>);
  }
  console.log(starRating);

  const [indexImage, setIndexImage] = useState(0);
  let imagesSlider = filterData[0]?.pictures;
  console.log(imagesSlider, indexImage);

  return (
    <div className="single-container">
      <div className="apartment-single-container">
        <Slider
          filterData={filterData}
          indexImage={indexImage}
          ArrowBackward={ArrowBackward}
          ArrowForward={ArrowForward}
          setIndexImage={setIndexImage}
        />
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
              {/* Ici */}
              <Ratings starRating={starRating} />
              {/* Là */}
            </div>
          </div>
        </div>
        <div className="keywords-collapse">
          {/* Partie description */}
          <Accordion label="Description" content={filterDataDescription} />
          {/* Partie equipments */}
          <Accordion label="Équipements" content={filterDataEquipments} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default AppartementsSingle;
