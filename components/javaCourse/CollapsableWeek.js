import { useRouter } from "next/router";

export default function CollapsableWeek({ quizzes, weekNum }) {
  let checkBoxId = "btnControlWeek" + weekNum.toString();
  let weekId = "week" + weekNum.toString();
  const router = useRouter();

  const handleClick = ({ week, id, name, section }) => {
    router.push(
      {
        pathname: `javaCourse/${week}/${id}`,
        query: { name, section },
      },
      `javaCourse/${week}/${id}`
    );
  };

  return (
    <label
      htmlFor={checkBoxId}
      className="unselectable card my-4 w-full bg-base-300"
      onChange={() => {
        if (document.getElementById(checkBoxId).checked) {
          document.getElementById(weekId).style.display = "block";
        } else {
          document.getElementById(weekId).style.display = "none";
        }
      }}
    >
      <input id={checkBoxId} type="checkbox" className="hidden" />
      <h1 className="p-4 text-xl font-medium">Week {weekNum}</h1>

      <ul id={weekId} className="menu rounded-box menu-compact hidden p-4 pt-0">
        {quizzes.map((quiz) => (
          <li key={quiz.id} className="">
            <a href="#" onClick={() => handleClick(quiz)}>
              {quiz.name}
            </a>
          </li>
        ))}
      </ul>
    </label>
  );
}
