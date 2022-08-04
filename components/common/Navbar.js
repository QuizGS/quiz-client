import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../public/images/logo.svg';
import { ThemeButton } from './ThemeButton';

export default function NavBar(props) {
	return (
		// navbar to be placed in left of screen
		//TODO: change to <Link/>
		<nav className="navbar flex-col bg-base-300 w-20 h-screen p-5 gap-8 z-50">
			<a id="homeIcon" href="\" className="navbar-icon" data-tip="Home">
				<FontAwesomeIcon icon={faHome} className="mx-2" />
			</a>
			<a id="coursesIcon" href="\dashboard" className="navbar-icon" data-tip="Courses">
				<FontAwesomeIcon icon={faBook} className="mx-2" />
			</a>
			<ThemeButton />
			<a id="quizSparkLogo" href="\about" className="navbar-logo bgbase" data-tip="About">
				<Logo className="h-full mx-2" />
			</a>
		</nav>
	);
}
