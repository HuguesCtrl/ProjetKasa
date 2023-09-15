function Ratings({ starRating }) {
  return (
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
  );
}
export default Ratings;
