import Course from "../components/common/Course";
import SidePanel from "../components/common/SidePanel";

export default function Dashboard() {
  const course = {
    name: "Java ☕",
    description:
      "JAVA was developed by James Gosling at Sun Microsystems Inc in the year 1995, later acquired by Oracle Corporation. It is a simple programming language. Java makes writing, compiling, and debugging programming easy. It helps to create reusable code and modular programs. Java is a class-based, object-oriented programming language and is designed to have as few implementation dependencies as possible. A general-purpose programming language made for developers to write once run anywhere that is compiled Java code can run on all platforms that support Java. Java applications are compiled to byte code that can run on any Java Virtual Machine. "
  };

  return (
    // TODO: Fetch courses in the future if we implement it and add something to the sidebar
    <div className="flex">
      <SidePanel />
      <main className="main-content">
        <h1 className=" main-header">Java full-stack</h1>
        <div className=" flex w-full flex-wrap gap-4">
          <Course course={course} />
        </div>
      </main>
    </div>
  );
}
