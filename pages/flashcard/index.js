import SidePanel from "../../components/common/SidePanel";
import { FlashcardArray } from "react-quizlet-flashcard";

export const getStaticProps = async () => {
  const url = "https://quizgs.herokuapp.com/api/questions";

  var res = await fetch(url);
  var data = await res.json();

  var listQuestions = [];

  data.forEach(function (item, index) {
    const prob = {
      id: index,
      front: item.question,
      back: item.answer
    };
    listQuestions.push(prob);
  });

  return {
    props: {
      quizQuestions: listQuestions
    }
  };
};

export default function Flashcardpage(props) {
  return (
    <div className="flex">
      <SidePanel />
      <main className="week-list">
        <h1 className="main-header">Flashcards</h1>
        <FlashcardArray cards={props.quizQuestions} />
      </main>
    </div>
  );
}
