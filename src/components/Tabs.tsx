import { Link, Outlet } from "react-router-dom";
import "./Tabs.css";

function Tabs() {
  return (
    <>
      <div className="tabs filter-link">
        <Link className="newTabs" to="/new">
          New
        </Link>
        <Link className="archiveTabs" to="/archived">
          Archived
        </Link>
        <Link className="starTabs" to="/starred">
          Starred
        </Link>
      </div>
      <Outlet />
    </>
  );
}

export default Tabs;
