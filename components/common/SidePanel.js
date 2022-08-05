import { Children } from "react";

const SidePanel = ({ children }) => {
  return (
    <aside className="flex h-screen w-1/4 min-w-[15rem] max-w-lg flex-col bg-base-200">
      <figure id="courseHeader" className=" bg-primary ">
        <img src="\images\header.jpg"></img>
      </figure>
      <div className=" card-body">{children}</div>
    </aside>
  );
};

export default SidePanel;
