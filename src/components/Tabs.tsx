import { Link, Outlet, useParams } from "react-router-dom";
import "./Tabs.css";

function Tabs() {
  const { bookId } = useParams();
  return (
    <>
      <div className="tabs filter-link">
        <Link className="newTabs" to={`/book/${bookId}/new`}>
          New
        </Link>
        <Link className="archiveTabs" to={`/book/${bookId}/archived`}>
          Archived
        </Link>
        <Link className="starTabs" to={`/book/${bookId}/starred`}>
          Starred
        </Link>
      </div>
      <Outlet />
    </>
  );
}

export default Tabs;
