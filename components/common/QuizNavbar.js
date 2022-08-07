import Link from "next/link";
import quizzes from "../config/courseConfig";

const weekNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function QuizNavbar() {
  return (
    <div class="overflow-auto">
      {" "}
      {weekNum.map((thisweek) => (
        <div
          tabindex="0"
          class="collapse collapse-arrow border border-base-300 bg-base-100"
        >
          <ul class="menu flex flex-col ">
            <div class="collapse-title text-xl font-medium">
              {" "}
              <li class="menu-title">
                <span>{`Week${thisweek}`}</span>
              </li>
            </div>
            <div class="collapse-content">
              {quizzes[thisweek - 1].map((quiz) => (
                <Link href={`Week${thisweek}/${quiz.section}`}>
                  <div key={quiz.section}>
                    <li>
                      <a>{quiz.name}</a>
                    </li>
                  </div>
                </Link>
              ))}
            </div>
          </ul>
        </div>
      ))}
    </div>
  );
}
