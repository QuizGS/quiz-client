import SidePanel from "@/components/common/SidePanel";
import { FlashcardArray } from "react-quizlet-flashcard";
import fetchQuestions from "@/util/data/fetchQuestions";

export const getStaticProps = async () => {
  const data = await fetchQuestions();
  let questions = [];
  data.forEach((problem, index) => {
    const prob = {
      id: index,
      front: problem.question,
      back: problem.answer,
    };
    questions.push(prob);
  });

  // randomizes order
  questions.sort(() => Math.random() - 0.5);

  return {
    props: { questions },
  };
};

// TODO: rewrite to instead use daisyui's card and/or carousel
// TODO: add options to only have cards by a certain week, quiz, etc.
export default function FlashcardPage(props) {
  return (
    <div className="flex">
      <SidePanel>
        <h3 className="card-title leading-none">Java Full-Stack</h3>
        <p>
          JAVA was developed by James Gosling at Sun Microsystems Inc in the
          year 1995, later acquired by Oracle Corporation. It is a simple
          programming language. Java makes writing, compiling, and debugging
          programming easy. It helps to create reusable code and modular
          programs. Java is a class-based, object-oriented programming language
          and is designed to have as few implementation dependencies as
          possible. A general-purpose programming language made for developers
          to write once run anywhere that is compiled Java code can run on all
          platforms that support Java. Java applications are compiled to byte
          code that can run on any Java Virtual Machine.
        </p>
      </SidePanel>
      <main className="main-content">
        <h1 className="main-header">Flashcards</h1>
        <FlashcardArray cards={props.questions} />
      </main>
    </div>
  );
}
