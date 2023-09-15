function Banner({ source, txt, altText }) {
  return (
    <header className="hero-image">
      <img src={source} alt={altText} />
      <h1>{txt}</h1>
    </header>
  );
}
export default Banner;
