import "./NavBar.css";
import bookImage from "../assets/Logo.svg";

function NavBar() {
  return (
    <div className="header">
      <img src={bookImage} />
      <h2>NOTEBOOK</h2>
    </div>
  );
}

export default NavBar;
