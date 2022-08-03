
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faBook } from "@fortawesome/free-solid-svg-icons"
import Quizspark from "../../public/images/quizspark.svg"
import { ThemeButton } from "./ThemeButton"

export default function NavBar(props) {

    return (

        // navbar pinned to left side
        <nav className="navbar flex-col bg-base-300 w-20 h-screen p-5 gap-8 ">
            <a id="homeIcon" href="\" className="navbar-icon" data-tip="Home">
                <FontAwesomeIcon icon={faHome} />
            </a>
            {/* !!! this has to hide when in "login" screen and for now tsakes you to quizview */}
            <a id="coursesIcon" href="\quiz\quiz" className="navbar-icon" data-tip="Courses">
                <FontAwesomeIcon icon={faBook} />
            </a>
            <ThemeButton />
            <a id="quizSparkLogo" href="\about" className="navbar-logo" data-tip="About">
                <Quizspark className="h-full" fill="currentColor" />
            </a>
        </nav>

    )

}