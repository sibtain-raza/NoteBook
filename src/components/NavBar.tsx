import "./NavBar.css";
import { Link } from "react-router-dom";
import HomeImage from "../assets/svg/icons8-home.svg";
import bookImage from "../assets/svg/Logo.svg";

function NavBar() {
  return (
    <div className="header">
      <img src={bookImage} />
      <h2>NOTEBOOK</h2>
      <Link to={"/"} className="home-button">
        <img src={HomeImage} />
      </Link>
    </div>
  );
}

export default NavBar;
