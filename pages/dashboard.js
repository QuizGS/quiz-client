import Course from "../components/common/Course";
import SidePanel from "../components/common/SidePanel";

export default function Dashboard() {
  const course = {
    name: "Java ☕",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum tempus consectetur. Cras et blandit turpis. Donec feugiat lectus ut est iaculis, eget suscipit mauris blandit. Quisque elementum ex dictum nibh porttitor viverra. Sed semper nisl risus, nec lobortis tortor imperdiet eget. Nunc efficitur viverra metus vitae fermentum. Fusce vel tellus iaculis, semper erat vitae, lobortis nulla.",
  };

  return (
    // TODO: Fetch courses in the future if we implement it and add something to the sidebar
    <div className="flex">
      <SidePanel />
      <main className="main-content">
        <h1 className=" main-header">Courses</h1>
        <div className=" flex w-full flex-wrap gap-4">
          <Course course={course} />
          <Course course={course} />
          <Course course={course} />
          <Course course={course} />
        </div>
      </main>
    </div>
  );
}
