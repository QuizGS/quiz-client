import SidePanel from "@/components/common/SidePanel";
import CollapsableWeek from "@/components/common/CollapsableWeek";
import fetchQuizzes from "@/util/data/fetchQuizzes";

export const getStaticProps = async () => {
  const weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let quizzesByWeek = [];

  await fetchQuizzes().then((quizzes) => {
    weeks.forEach((week) => {
      quizzesByWeek.push(quizzes.filter((quiz) => quiz.week === week));
    });
  });

  return {
    props: {
      weeks: quizzesByWeek
    }
  };
};

export default function WeekList(props) {
  return (
    <div className="flex">
      <SidePanel />
      <main className="week-list">
        <h1 className="main-header">Quizzes</h1>
        {props.weeks.map((week, i) => (
          <CollapsableWeek key={i} week={week} weekNum={i + 1} />
        ))}{" "}
      </main>
    </div>
  );
};
