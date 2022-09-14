import Image from "next/image";
import HeaderImg from "@/public/images/header.jpg";

// TODO: clean up styling / potentially move layout to be connected to nav properly
const SidePanel = ({ children }) => {
  return (
    <div className="flex h-screen w-1/4 min-w-[15rem] max-w-lg flex-col bg-base-200">
      <figure id="courseHeader" className="bg-primary">
        <Image
          src={HeaderImg}
          alt="Random lines of decorative, multi-colored code."
          layout="fill"
        />
      </figure>
      {children}
    </div>
  );
};

export default SidePanel;
