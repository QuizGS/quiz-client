import Note from "@/components/common/Note";
import NoteEditor from "@/components/common/NoteEditor";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const getStaticProps = async () => {
  let userId = 1; //hard coded for now

  const url = "https://quizgs.herokuapp.com/api/notes/" + userId.toString();

  var res = await fetch(url);
  var data = await res.json();

  return {
    props: {
      notes: data,
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
