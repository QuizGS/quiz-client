import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBook } from "@fortawesome/free-solid-svg-icons";
import Logo from "@/public/images/logo.svg";
import { ThemeButton } from "./ThemeButton";

export default function NavBar(props) {
  return (
    // navbar to be placed in left of screen
    //TODO: change to <Link/>
    <nav className="navbar z-50 h-screen w-20 flex-col gap-8 bg-base-300 p-5">
      <a id="homeIcon" href="\" className="navbar-icon" data-tip="Home">
        <FontAwesomeIcon icon={faHome} className="mx-2" />
      </a>
      <a
        id="coursesIcon"
        href="\dashboard"
        className="navbar-icon"
        data-tip="Courses"
      >
        <FontAwesomeIcon icon={faBook} className="mx-2" />
      </a>
      <ThemeButton />
      <a
        id="quizSparkLogo"
        href="\about"
        className="navbar-logo bgbase"
        data-tip="About"
      >
        <Logo className="mx-2 h-full" />
      </a>
    </nav>
  );
};
