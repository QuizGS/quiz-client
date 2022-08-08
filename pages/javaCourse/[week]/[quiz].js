import Question from "@/components/common/Question";
import SidePanel from "@/components/common/SidePanel";
import fetchQuestions from "@/util/data/fetchQuestions";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

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
        <h1 className=" card-title text-base-content">Week {week}</h1>
        <h2 className=" text-base-content">Quiz {quiz}</h2>
      </SidePanel>
      <main className=" week-list ">
        {question.map((problem, i) => (
          <Question
            problem={problem.question}
            answer={problem.answer}
            options={problem.options}
          />
        ))}
      </main>
    </div>
  );
}
