import SidePanel from "@/components/common/SidePanel";
import CollapsableWeek from "@/components/javaCourse/CollapsableWeek";
import fetchQuizzes from "@/util/data/fetchQuizzes";

export const getStaticProps = async () => {
  const weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let quizzesByWeek = [];

  const quizzes = await fetchQuizzes();

  weeks.forEach((week) => {
    quizzesByWeek.push(quizzes.filter((quiz) => quiz.week === week));
  });

  return {
    props: {
      weeks: quizzesByWeek,
    },
  };
};

export default function WeekList(props) {
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
      <main className="week-list">
        <h1 className="main-header">Quizzes</h1>
        {props.weeks.map((week, i) => (
          <CollapsableWeek key={i} quizzes={week} weekNum={i + 1} />
        ))}{" "}
      </main>
    </div>
  );
}
