import { Link, Outlet } from "react-router-dom";
import "./Tabs.css";

function Tabs() {
  return (
    <>
      <div className="tabs filter-link">
        <Link to="/new">New</Link>
        <Link to="/archived">Archived</Link>
        <Link to="/starred">Starred</Link>
      </div>
      <Outlet />
    </>
  );
}

export default Tabs;
