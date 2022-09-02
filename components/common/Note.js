import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Note(props) {
  // using a random hopefully unique id for now until we get the ones form the Database
  //needs a unique id to open the correct modal
  let id = "note" + Math.floor(Math.random() * 1000);

  return (
    <>
      <a
        href={"#" + id}
        className="daisy-border-box group card relative gap-1 overflow-visible bg-info p-4 text-info-content"
      >
        <h2 className="card-title">{props.title}</h2>
        <p className="max-w-md">{props.text}</p>

        <div className="absolute bottom-0 right-0 h-6 w-6 overflow-hidden">
          <div className="traingle-t-l mt-2 ml-2 h-4 w-4" />
        </div>

        <button className="absolute -left-2 -top-2 flex h-6 w-6 scale-0 place-items-center justify-center rounded-full bg-secondary text-xs text-secondary-content shadow-md transition-all duration-300 group-hover:scale-100">
          <FontAwesomeIcon icon={faPen} />
        </button>
      </a>

      {/* FIXME: this should be a note editor component will refactor */}
      <div className="modal" id={id}>
        <div className="modal-box">
          <i>
            <b>{id}</b>
          </i>
          <div className="modal-action">
            <a href="#" className="btn">
              Yay!
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
