import Note from "@/components/javaCourse/Note";
import { NoteEditor } from "@/components/javaCourse/Note";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fetchNotes from "@/util/data/fetchNotes";

// TODO: fetch notes from database based on currently authenticated user
// TODO: add ability/view to add notes from quiz view; each note should be associated with one quiz
export const getStaticProps = async () => {
  let userId = 1; //hard coded for now

  const notes = await fetchNotes({ userId });

  return {
    props: {
      notes,
    },
  };
};

export default function Notes(props) {
  return (
    <main className="main-content">
      <header className="flex gap-8">
        <h1 className=" main-header mr-auto">Notes</h1>
        {/* New Note */}
        <a href="#newNote" className="btn gap-2">
          {" "}
          <FontAwesomeIcon icon={faPlus} />
          New Note
        </a>
        <NoteEditor id="newNote" />
        {/* ^^^ */}
      </header>
      <div className="flex flex-wrap gap-4">
        {props.notes.map((note, i) => (
          <Note key={i} id={note.id} quizId={note.quizId} text={note.content} />
        ))}
      </div>
    </main>
  );
}
