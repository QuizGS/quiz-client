import Quizspark from "@/public/images/quizspark.svg";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const WelcomePanel = ({ children }) => {
  return (
    <aside className="flex h-screen min-w-max max-w-lg flex-col bg-base-200">
      <div className=" card-body justify-center gap-8 accent-accent">
        <Quizspark className="mx-auto w-2/3" />

        <SignUp />
        <SignIn />
      </div>
    </aside>
  );
};

export default WelcomePanel;
