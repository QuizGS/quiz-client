import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import fetchQuestions from "../../util/data/fetchQuestions";
import QuizProblem from "../../components/common/QuizProblem";

const QuizDetails = () => {
  const router = useRouter();
  const week = router.query.week.slice(4);
  const section = router.query.quizName;

  const [question, setQuestion] = useState([]);

  useEffect(() => {
    fetchQuestions(week, section).then((arr) => {
      setQuestion(arr);
    });
  }, []);

  return (
    <div>
      {question.map((problem) => (
        <QuizProblem
          problem={problem.question}
          answer={problem.answer}
          options={problem.options}
        />
      ))}
    </div>
  );
};

export default QuizDetails;
