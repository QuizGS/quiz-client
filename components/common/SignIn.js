import { useState } from "react";

export default function SignIn() {
  const [signIn, setSignIn] = useState(null);
  const [signInClicked, setClicked] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    // handle signup and if successful, setSignIn true
    setSignIn({ signIn: true });

    setClicked({ signInClicked: true });
  };

  const signedUp = () => {
    if (signIn) {
      return (
        <div className="toast toast-top">
          <div className="alert alert-success">
            <div>
              <span>Sign In successful</span>
            </div>
          </div>
        </div>
      );
    }
    if (!signIn && signInClicked) {
      return (
        <div className="toast toast-top">
          <div className="alert alert-error">
            <div>
              <span>Please try again</span>
            </div>
          </div>
        </div>
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };

    // send this user to BE
  };
  return (
    <div className="card w-96 rounded-2xl bg-base-100 shadow-md">
      <div className="card-body gap-4 text-base-content">
        <div className="space-y-2">
          <h1 className="unselectable card-title justify-center text-3xl font-bold">
            Sign In
          </h1>
          <p className=" unselectable w-80 text-center text-sm font-semibold tracking-wide">
            Welcome to QuizSpark
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

          {signedUp()}

          <button
            id="signInBtn"
            className="btn btn-accent text-accent-content"
            onClick={handleClick}
          >
            Sign In
          </button>
          <p className=" text-sm">
            Dont have an account?
            <span className="ml-1 cursor-pointer underline">Sign Up</span>
          </p>
        </form>
      </div>
    </div>
  );
}
