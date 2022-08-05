import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function ContactCard(props) {
  return (
    <section className="card bg-primary shadow-sm">
      <div className=" card-body items-center text-center text-primary-content">
        <i className="text-6xl">
          {/* !!! This will be an image but for now using an icon to illustrate */}
          <FontAwesomeIcon icon={faUser} />
        </i>
        <h2 className=" card-title">{props.Name}</h2>
        <p className="">{props.Bio}</p>
      </div>
    </section>
  );
}
