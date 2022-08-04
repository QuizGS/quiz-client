import Link from "next/link";

export default function QuizNavbar(props) {
  return (
    <div>
      <div
        tabindex="0"
        class="collapse collapse-arrow border-base-300 bg-base-100"
      >
        <ul class="menu flex flex-col ">
          <div class="collapse-title text-xl font-medium">
            {" "}
            <li class="menu-title">
              <span>{props.weekname}</span>
            </li>
          </div>
          <div class="collapse-content">
            {props.week.map((thisweek) => (
              <Link href={`javaCourse/${props.weekname}/${thisweek.section}`}>
                <div key={thisweek.section}>
                  <li>
                    <a>{thisweek.name}</a>
                  </li>
                </div>
              </Link>
            ))}
          </div>
        </ul>
      </div>
      <li></li>
    </div>
  );
}
