import cover from "../assets/COVER2.jpg";
import "../style/Banner.scss";

//Banniere de la page a propos
function Banner2() {
  return (
    <div className="container">
      <div className="banner">
        <img src={cover} alt="Kasa - Location appartements" />
        <p></p>
      </div>
    </div>
  );
}

export default Banner2;
