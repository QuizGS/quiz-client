import { Children } from "react";
import Image from "next/image";

const SidePanel = ({ children }) => {
  return (
    <aside className="flex h-screen w-1/4 min-w-[15rem] max-w-lg flex-col bg-base-200">
      <figure id="courseHeader" className=" bg-primary ">
        <Image src={`/images/header.jpg`} alt="Random lines of decorative, multi-colored code." layout='fill'></Image>
      </figure>
      <div className=" card-body">{children}</div>
    </aside>
  );
};

export default SidePanel;
