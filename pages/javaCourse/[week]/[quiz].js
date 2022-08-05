import Question from "../../../components/common/Question";
import SidePanel from "../../../components/common/SidePanel";
import { useState, useEffect } from "react";
import fetchQuestions from "../../../util/data/fetchQuestions";
import { useRouter } from "next/router";

export default function Quiz(props) {
  //this gives you the url ids
  const router = useRouter();
  const { week, quiz } = router.query;

  const [question, setQuestion] = useState([]);

  useEffect(() => {
    fetchQuestions(week, quiz).then((arr) => {
      setQuestion(arr);
    });
  });

  return (
    <div className="flex">
      <SidePanel>
        {props.week} and {props.quiz}
      </SidePanel>
      <main className=" week-list ">
        {question.map((problem, i) => (
          <li key={i}>
            <a>{problem.question}</a>
          </li>
        ))}
      </main>
    </div>
  );
}
