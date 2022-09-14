import Quizspark from "@/public/images/quizspark.svg";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const WelcomePanel = ({ children }) => {
  return (
    <aside className="flex h-screen w-1/4 min-w-[15rem] max-w-lg flex-col bg-base-200">
      <div className="card-body justify-center gap-8 accent-accent">
        <Quizspark />
        <h1 className="card-title justify-center text-center">
          Welcome to QuizSpark!
        </h1>
        <div className="card-actions justify-center">
          <Link href="/dashboard" className="btn btn-accent">
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default WelcomePanel;
