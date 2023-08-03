import "./ConfirmDeleteModal.css";
import closeImage from "../assets/close-svgrepo-com.svg";

interface Props {
  onclick: () => void;
}

function ConfirmDeleteModal({ onclick }: Props) {
  return (
    <div className="overlayconfirm">
      <div className="modalconfirm">
        <img
          src={closeImage}
          onClick={(e) => {
            onclick();
            e.stopPropagation();
          }}
        />
        <p>Are you sure You want to Delete the Note ?</p>
        <h5>"Notes for my computer class"</h5>
        <div className="btnClass">
          <button className="archiveBtn">ARCHIVE</button>
          <button className="deleteBtn">DELETE</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDeleteModal;
