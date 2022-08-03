import Quizspark from "../../public/images/quizspark.svg"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const WelcomePanel = ({ children }) => {

    return (

        <aside className="flex flex-col bg-base-200 w-1/4 max-w-lg min-w-[15rem] h-screen">

            <div className=' card-body justify-center accent-accent gap-8'>
                <Quizspark />
                <h1 className=" card-title text-center justify-center">
                    Welcome to QuizSpark!
                </h1>
                <div className=" card-actions justify-center">
                    <a href="/quiz/quiz" className="btn btn-accent">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                </div>
            </div>

        </aside>

    )
}

export default WelcomePanel;