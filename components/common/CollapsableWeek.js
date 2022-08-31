import Link from "next/link";

export default function CollapsableWeek(props) {
  let checkBoxId = "btnControlWeek" + props.weekNum.toString();
  let weekId = "week" + props.weekNum.toString();

  return (
    <label
      htmlFor={checkBoxId}
      className="unselectable card my-4 w-full outline outline-2 outline-base-300"
      onChange={() => {
        if (document.getElementById(checkBoxId).checked) {
          document.getElementById(weekId).style.display = "block";
        } else {
          document.getElementById(weekId).style.display = "none";
        }
      }}
    >
      <input id={checkBoxId} type="checkbox" className="hidden" />
      <h1 className="p-4 text-xl font-medium">Week {props.weekNum}</h1>

      <ul
        id={weekId}
        className="menu rounded-box menu-compact hidden bg-base-100 p-4 pt-0"
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
  );
}
