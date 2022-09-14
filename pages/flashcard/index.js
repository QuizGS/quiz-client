import SidePanel from "@/components/common/SidePanel";
import { FlashcardArray } from "react-quizlet-flashcard";
import fetchQuestions from "@/util/data/fetchQuestions";

export const getStaticProps = async () => {
  const data = await fetchQuestions();
  let questions = [];
  console.log(data);
  data.forEach((problem, index) => {
    const prob = {
      id: index,
      front: problem.question,
      back: problem.answer
    };
    questions.push(prob);
  });

  questions.sort(() => Math.random() - 0.5);

  return {
    props: { questions }
  };
};

// TODO: rewrite to instead use daisyui's card and/or carousel
export default function FlashcardPage(props) {
  return (
    <div className="flex">
      <SidePanel />
      <main className="week-list">
        <h1 className="main-header">Flashcards</h1>
        <FlashcardArray cards={props.questions} />
      </main>
    </div>
  );
}
