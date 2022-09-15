import { useState } from "react";

const types = {
  signup: {
    title: "Sign Up",
    button: "Create Account",
    buttonId: "signUpBtn",
    success: "Account creation successful",
    error: "Account creation failed",
    description:
      "Create an account with GenSpark email to continue with this site",
    redirect: "Already have an account?",
    redirectBtn: "Sign In",
  },
  signin: {
    title: "Sign In",
    button: "Sign In",
    buttonId: "signInBtn",
    success: "Sign In successful",
    error: "Please try again",
    description: "Welcome to QuizSpark",
    redirect: "Don't have an account?",
    redirectBtn: "Sign Up",
  },
};

export default function AccountAccess({ type = "signup" } = {}) {
  const content = types[type];

  const [isAccessed, setAccessed] = useState(false);
  const [isClicked, setClicked] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    setAccessed(true);

    setClicked(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };

    // TODO: send this user to BE; ideally don't use plain text password
  };

  const accessInfo = () => {
    if (isAccessed) {
      return (
        <div className="toast toast-top">
          <div className="alert alert-success">
            <div>
              <span>{content.success}</span>
            </div>
          </div>
        </div>
      );
    }

    if (!isAccessed && isClicked) {
      return (
        <div className="toast toast-top">
          <div className="alert alert-error">
            <div>
              <span>{content.error}</span>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="card w-96 rounded-2xl bg-base-100 shadow-md">
      <div className="card-body gap-4 text-base-content">
        <div className="space-y-2">
          <h1 className="unselectable card-title justify-center text-3xl font-bold">
            {content.title}
          </h1>
          <p className="unselectable w-80 text-center text-sm font-semibold tracking-wide">
            {content.description}
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col place-items-center justify-center gap-6"
        >
          <input
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-primary w-full"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input input-primary w-full"
          />

          {accessInfo()}

          <button
            id={content.buttonId}
            className="btn btn-accent text-accent-content"
            onClick={handleClick}
          >
            {content.button}
          </button>
          <p className="text-sm">
            {content.redirect}
            <span className="ml-1 cursor-pointer underline">
              {content.redirectBtn}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
