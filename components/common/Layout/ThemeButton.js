import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ThemeButton(props) {
  return (
    <div className="dropdown-bottom dropdown">
      <i
        tabIndex="0"
        id="themeIcon"
        className="navbar-icon mb-2 not-italic outline-none"
        data-tip="Theme"
      >
        <FontAwesomeIcon icon={faPalette} className="mx-2" />
      </i>
      <ul
        tabIndex="0"
        className="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow"
      >
        <li>
          <a data-set-theme="light">Light</a>
        </li>
        <li>
          <a data-set-theme="dark">Dark</a>
        </li>
        <li>
          <a data-set-theme="cupcake">Cupcake</a>
        </li>
        <li>
          <a data-set-theme="retro">Retro</a>
        </li>
        <li>
          <a data-set-theme="corporate">Corporate</a>
        </li>
        <li>
          <a data-set-theme="business">Business</a>
        </li>
      </ul>
    </div>
  );
};
