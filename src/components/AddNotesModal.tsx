import "./AddnotesModal.css";

function AddNotesModal() {
  return (
    <div className="overlay">
      <div className="modal">
        <form>
          <label htmlFor="heading">Title</label>
          <br />
          <input type="text" id="heading" name="heading" />
          <br />

          <label htmlFor="content">Description</label>
          <br />
          <textarea id="content" name="content" rows={15} />
          <br />

          <div className="btn">
            <button className="btn1">Cancel</button>
            <button type="submit" className="btn2">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddNotesModal;
