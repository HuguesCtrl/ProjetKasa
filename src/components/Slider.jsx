import { useState } from "react";

function Slider({
  filterData,
  indexImage,
  ArrowBackward,
  ArrowForward,
  setIndexImage,
}) {
  return (
    <div className="appartment-slider">
      {
        <img
          src={filterData[0]?.pictures[indexImage]}
          alt=""
          className="img-slider"
        />
      }
      {filterData[0]?.pictures.length > 1 && (
        <p>{`${indexImage + 1}` + "/" + `${filterData[0]?.pictures.length}`}</p>
      )}
      {filterData[0]?.pictures.length > 1 && (
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
      )}
      {filterData[0]?.pictures.length > 1 && (
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
      )}
    </div>
  );
}
export default Slider;
