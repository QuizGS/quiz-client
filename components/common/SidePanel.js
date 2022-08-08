import { Children } from "react";
import Link from "next/link";
import QuizNavbar from "./QuizNavbar";
import ThemeButton from "./ThemeButton";

import Quizspark from "../../public/images/quizspark.svg";
const SidePanel = ({ Children }) => {
  return (
    <div className="flex flex-col bg-base-200 w-1/4 min-w-[15rem] h-screen">
      <figure id="courseHeader" className=" bg-primary ">
        <img src="\images\header.jpg"></img>
      </figure>
      <h2 className="card-title text-2xl">Java Course</h2>
      <QuizNavbar />
    </div>
  );
};

export default SidePanel;
