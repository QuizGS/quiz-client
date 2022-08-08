import { useState, useEffect } from "react";
import Link from "next/link";

const weekNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function QuizNavbar() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    fetchQuizzes().then(setQuizzes);
  }, []);

  return (
    <div class="overflow-auto">
      {" "}
      {weekNums.map((weekNum) => (
        <div
          tabindex="0"
          class="collapse collapse-arrow border border-base-300 bg-base-100"
        >
          <ul class="menu flex flex-col ">
            <div class="collapse-title text-xl font-medium">
              {" "}
              <li class="menu-title">
                <span>{`Week ${weekNum}`}</span>
              </li>
            </div>
            <div class="collapse-content">
              {quizzes
                .filter(quiz => quiz.week === weekNum)
                .map((quiz) => (
                  <Link href={`Week${weekNum}/${quiz.section}`}>
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
