import SidePanel from "@/components/common/SidePanel";
import Question from "@/components/javaCourse/Question";
import { useState, useEffect } from "react";
import fetchQuestions from "@/util/data/fetchQuestions";
import { useRouter } from "next/router";

export default function Quiz(props) {
  //this gives you the url ids
  const router = useRouter();
  const { week, quiz, name, section } = router.query;

  const [questions, setQuestions] = useState([]);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [percentageComplete, setPercentageComplete] = useState(0);

  useEffect(() => {
    fetchQuestions({ quizId: quiz }).then((arr) => {
      setQuestions(arr);
    });
  }, []);

  const handleClick = () => {
    const newCount = answeredCount + 1;
    setAnsweredCount(newCount);
    setPercentageComplete(Math.round((newCount / questions.length) * 100));
  };

  return (
    <div className="flex">
      <SidePanel>
        <div className="card h-screen bg-base-100">
          <div className="card-body">
            <h1 className="card-title text-base-content">Week {week}</h1>
            <h3 className="text-base-content">Section {section}</h3>
            <h2 className="text-base-content">{name}</h2>
            <div
              className="radial-progress"
              style={{ "--value": percentageComplete }}
            >
              {percentageComplete}%
            </div>
          </div>
        </div>
      </SidePanel>
      <main className="week-list">
        {questions.map((problem, i) => (
          <Question
            key={i}
            problem={problem.question}
            answer={problem.answer}
            options={problem.options}
            handleClick={handleClick}
          />
        ))}
      </main>
    </div>
  );
}
