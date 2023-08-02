import "./NavBar.css";
import bookImage from "../assets/book.svg";

function NavBar() {
  return (
    <div className="header">
      <img src={bookImage} />
    </div>
  );
}

export default NavBar;
