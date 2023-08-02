// import { Notetype } from "../services/types";
import "./Notes.css";
import deleteImage from "../assets/delete-svgrepo-com.svg";
import editImage from "../assets/edit-svgrepo-com.svg";
interface Props {
  id: number;
  content: string;
  Headline: string;
}

function Notes({ id, content, Headline }: Props) {
  return (
    <div className="notes" key={id}>
      <p>{content}</p>
      <div className="bottom">
        <h5>{Headline}...</h5>
        <button className="btn1 edit" onClick={() => console.log(id, "edit")}>
          <img src={editImage} />
        </button>
        <button
          className="btn1 delete"
          onClick={() => console.log(id, "delete")}
        >
          <img src={deleteImage} />
        </button>
      </div>
    </div>
  );
}

export default Notes;
