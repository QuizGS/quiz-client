import Link from "next/link";

export default function CollapsableWeek(props) {
  let checkBoxId = "btnControlWeek" + props.weekNum.toString();
  let weekId = "week" + props.weekNum.toString();

  return (
    <div>
      <label
        htmlFor={checkBoxId}
        id={weekId}
        className="card my-4 w-full outline outline-2 outline-base-300"
      >
        <input id={checkBoxId} type="checkbox" className="" />
        <div className="p-4 text-xl font-medium">Week {props.weekNum}</div>
        <ul
          id="quizzes"
          className="menu rounded-box menu-compact bg-base-100 p-4 pt-0"
        >
          {props.week.map((quiz) => (
            <li key={quiz.section} className="">
              <Link
                key={quiz.section}
                href={`javaCourse/${quiz.week}/${quiz.section}`}
              >
                {quiz.name}
              </Link>
            </li>
          ))}
        </ul>
      </label>
    </div>
  );
}
