import Course from "../components/common/Course";
import SidePanel from "../components/common/SidePanel";

export default function Dashboard() {
  return (
    // TODO: everything :)
    <div className="flex">
      <SidePanel />
      <main className="main-content">
        <Course Name="Java Java" Description="Java Crouse duh" />
      </main>
    </div>
  );
}
