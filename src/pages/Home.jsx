import Rochers from "../assets/img/ImageSource1.png";

function Home() {
  return (
    <div>
      <h1>Je suis la page d'accueil</h1>
      <div className="hero-image">
        <img src={Rochers} alt="" />
      </div>
    </div>
  );
}
export default Home;
