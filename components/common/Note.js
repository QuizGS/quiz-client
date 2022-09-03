import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NoteEditor from "./NoteEditor";

export default function Note(props) {
  return (
    <>
      <a
        href={"#" + props.id}
        className="daisy-border-box group card relative gap-1 overflow-visible bg-info p-4 text-info-content"
      >
        <h2 className="card-title">Quiz id: {props.quizId}</h2>
        <p className="max-w-md">{props.text}</p>

        <div className="absolute bottom-0 right-0 h-6 w-6 overflow-hidden">
          <div className="traingle-t-l mt-2 ml-2 h-4 w-4" />
        </div>

        <button className="sticky-note">
          <FontAwesomeIcon icon={faPen} />
        </button>
      </a>

      <NoteEditor id={props.id} quizId={props.id} text={props.text} />
    </>
  );
}
