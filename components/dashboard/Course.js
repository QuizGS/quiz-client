import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  faClipboardQuestion,
  faTarp,
  faPen,
} from "@fortawesome/free-solid-svg-icons";

export default function Course(props) {
  return (
    // TODO: Go over this again im sure i can make it better
    <section className="card rounded-box flex h-max w-full min-w-[20rem] max-w-2xl flex-col bg-base-300 shadow lg:flex-row">
      <div className="flex h-52 lg:h-auto lg:w-1/3 ">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="\images\header.jpg"
          alt="Album"
          className="lg:daisy-border-l object-cover object-center"
        />
      </div>
      <div className="card-body gap-4 text-base-content lg:w-2/3 lg:flex-row">
        <div className="">
          <h2 className="card-title text-3xl">{props.course.name}</h2>
          <p>{props.course.description}</p>
        </div>

        <ul className="daisy-border ml-auto flex h-min w-min bg-accent lg:my-auto lg:flex-col [&>li]:btn [&>li]:btn-accent [&>li]:text-accent-content [&>li>svg]:text-lg ">
          <li
            className="tooltip tooltip-info lg:tooltip-left"
            data-tip="quizzes"
          >
            <Link href={"/javaCourse"}>
              <FontAwesomeIcon icon={faClipboardQuestion} />
            </Link>
          </li>
          <li
            className="tooltip tooltip-info lg:tooltip-left"
            data-tip="flash cards"
          >
            <Link href={"/flashcard"}>
              <FontAwesomeIcon icon={faTarp} />
            </Link>
          </li>
          <li className="tooltip tooltip-info lg:tooltip-left" data-tip="notes">
            <Link href={"/javaCourse/notes"} className="relative">
              <FontAwesomeIcon icon={faPen} />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};
