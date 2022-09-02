import Note from "@/components/common/Note";
import NoteTextBox from "@/components/common/NoteTextBox";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Notes() {
  return (
    <main className="main-content">
      <header className="flex gap-8">
        <h1 className=" main-header mr-auto">Notes</h1>

        {/* FIXME: this label+modal should be a component itslef will refactor it */}
        <label htmlFor="new-note" className="modal-button btn gap-2">
          <FontAwesomeIcon icon={faPlus} />
          New Note
        </label>

        <input type="checkbox" id="new-note" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box flex flex-col gap-6 bg-primary  text-primary-content">
            <input type="text" placeholder="Title" className="title-input" />
            <textarea className="note-input" placeholder="Write note here" />
            <div className="modal-action m-0">
              <label htmlFor="new-note" className="btn btn-ghost">
                cancel
              </label>
              <label htmlFor="new-note" className="btn btn-accent">
                Save
              </label>
            </div>
          </div>
        </div>
      </header>
      <div className="flex flex-wrap gap-4">
        <Note
          title="I have a beautiful Title"
          text="this is a lot of text dude"
        />
        <Note
          title="I have a beautiful Title"
          text="this is a lot of text dude this is a lot of text dude this is a lot of text dude this is a lot of text dude this is a lot of text dude this is a lot of text dude "
        />
        <Note
          title="I have a beautiful Title"
          text="this is a lot of text dude this is a lot of text dude this is a lot of text dude this is a lot of text dude this is a lot of text dude "
        />
        <Note
          title="I have a beautiful Title"
          text="this is a lot of text dude this is a lot of text dude this is a lot of text dude this is a lot of text dude this is a lot of text dude this is a lot of text dude this is a lot of text dude this is a lot of text dude this is a lot of text dude this is a lot of text dude this is a lot of text dude this is a lot of text dude this is a lot of text dude this is a lot of text dude this is a lot of text dude "
        />
      </div>
    </main>
  );
}
