export const getStaticPaths = async () => {
  const res = await fetch("https://quizgs.herokuapp.com/api/questions/3");
  const data = await res.json();
  const ids = data.map((week) => {
    return week.quizId.toString();
  });

  const uniqueIds = Array.from(new Set(ids));

  const paths = uniqueIds.map((id) => {
    return {
      params: { quizName: id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.quizName; // depends on how many variables passed from the above params
  const res = await fetch("https://quizgs.herokuapp.com/api/questions/3/" + id);
  const data = await res.json();

  return {
    props: {
      problems: data,
    },
  };
};

const QuizDetails = ({ problems }) => {
  console.log(problems);
  return (
    <div>
      {problems.map((problem) => (
        <div>
          <li>
            <a>{problem.question}</a>
          </li>
        </div>
      ))}
    </div>
  );
};

export default QuizDetails;
