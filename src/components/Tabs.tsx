import edit from "../assets/svg/vector-white-edit.svg";
import archive from "../assets/svg/archive.svg";
import star from "../assets/svg/vector-white-star.svg";
import "./Tabs.css";

interface Props {
  changeTab: (tab: string) => void;
}

function Tabs({ changeTab }: Props) {
  return (
    <div className="tabs">
      <button className="newTabs" onClick={() => changeTab("new")}>
        NEW <img src={edit} />
      </button>
      <button className="archiveTabs" onClick={() => changeTab("archive")}>
        ARCHIVED <img src={archive} />
      </button>
      <button className="starTabs" onClick={() => changeTab("star")}>
        STARRED <img src={star} />
      </button>
    </div>
  );
}

export default Tabs;
