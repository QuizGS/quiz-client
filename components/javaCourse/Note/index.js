import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NoteTextBox from "./NoteTextBox";
export { NoteTextBox };

// TODO: properly use props
export default function Note(props) {
  return (
    <div className="daisy-border-box group card relative overflow-visible bg-info p-4 text-info-content">
      <h2 className="card-title">Quiz 2 Question 3</h2>
      <p>This Questions was very hard besties</p>

      <div className="absolute bottom-0 right-0 h-6 w-6 overflow-hidden">
        <div className="traingle-t-l mt-2 ml-2 h-4 w-4" />
      </div>

      <button className="absolute right-4 flex h-6 w-6 scale-0 place-items-center justify-center rounded-full bg-secondary text-xs text-secondary-content shadow-md transition-all duration-300 group-hover:scale-100">
        <FontAwesomeIcon icon={faPen} />
      </button>
    </div>
  );
};
