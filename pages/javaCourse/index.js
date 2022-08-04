import SidePanel from "../../components/common/SidePanel";
import QuizNavbar from "../../components/common/QuizNavbar";

// get topics of the week
export const getStaticProps = async () => {
  const res = await fetch("https://quizgs.herokuapp.com/api/quizzes/1");
  const data1 = await res.json();
  const res2 = await fetch("https://quizgs.herokuapp.com/api/quizzes/2");
  const data2 = await res2.json();

  const res3 = await fetch("https://quizgs.herokuapp.com/api/quizzes/3");
  const data3 = await res3.json();

  const res4 = await fetch("https://quizgs.herokuapp.com/api/quizzes/4");
  const data4 = await res4.json();

  const res5 = await fetch("https://quizgs.herokuapp.com/api/quizzes/5");
  const data5 = await res5.json();

  const res6 = await fetch("https://quizgs.herokuapp.com/api/quizzes/6");
  const data6 = await res6.json();

  const res7 = await fetch("https://quizgs.herokuapp.com/api/quizzes/7");
  const data7 = await res7.json();

  const res8 = await fetch("https://quizgs.herokuapp.com/api/quizzes/8");
  const data8 = await res8.json();

  const res9 = await fetch("https://quizgs.herokuapp.com/api/quizzes/9");
  const data9 = await res9.json();

  return {
    props: {
      week1: data1,
      week2: data2,
      week3: data3,
      week4: data4,
      week5: data5,
      week6: data6,
      week7: data7,
      week8: data8,
      week9: data9
    }
  };
};

const Quizs = ({
  week1,
  week2,
  week3,
  week4,
  week5,
  week6,
  week7,
  week8,
  week9
}) => {
  return (
    <div className=" flex w-full">
      <SidePanel>
        {" "}
        <h2 className=" card-title">Java Course</h2>
      </SidePanel>
      <ul class="menu bg-base-100 w-56 p-2 rounded-box">
        <QuizNavbar week={week1} weekname="Week1" />
        <QuizNavbar week={week2} weekname="Week2" />
        <QuizNavbar week={week3} weekname="Week3" />
        <QuizNavbar week={week4} weekname="Week4" />
        <QuizNavbar week={week5} weekname="Week5" />
        <QuizNavbar week={week6} weekname="Week6" />
        <QuizNavbar week={week7} weekname="Week7" />
        <QuizNavbar week={week8} weekname="Week8" />
        <QuizNavbar week={week9} weekname="Week9" />
      </ul>
      <main className=" w-full">QuizViewHere</main>
    </div>
  );
};

export default Quizs;
