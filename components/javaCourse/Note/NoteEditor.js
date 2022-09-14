export default function NoteEditor(props) {
  return (
    <div className="modal" id={props.id}>
      <div className="modal-box flex flex-col gap-6 bg-primary  text-primary-content">
        {/* <input type="text" placeholder="Title" className="title-input" /> */}
        <h3 className="w-full bg-primary text-2xl font-black">
          Note Id: {props.quizId || "New Note"}
        </h3>
        <textarea
          className="note-input"
          placeholder="Write note here"
          defaultValue={props.text}
        />
        <div className="modal-action m-0">
          <a href="#" className="btn btn-ghost">
            cancel
          </a>
          <a href="#" className="btn btn-accent">
            Save
          </a>
        </div>
      </div>
    </div>
  );
}
