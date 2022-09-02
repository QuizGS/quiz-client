import SidePanel from "../../components/common/SidePanel";
import CollapsableWeek from "../../components/common/CollapsableWeek";

export const getStaticProps = async () => {
  const weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var weekQuiz = [];

  for (let index = 1; index <= weeks.length; index++) {
    const url =
      "https://quizgs.herokuapp.com/api/quizzes/week/" + index.toString();

    var res = await fetch(url);
    var data = await res.json();

    weekQuiz.push(data);
  }

  return {
    props: {
      weeks: weekQuiz
    }
  };
};

export default function WeekList(props) {
  return (
    <div className="flex">
      <SidePanel />
      <main className=" week-list ">
        <h1 className=" main-header">Quizzes</h1>
        {props.weeks.map((week, i) => (
          <CollapsableWeek key={i} week={week} weekNum={i + 1} />
        ))}{" "}
      </main>
    </div>
  );
}
