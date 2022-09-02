import { useState } from "react";

export default function SignUp() {
  const [createAccountSuccess, setCreateAccount] = useState(null);
  const [signUpClicked, setClicked] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    // handle signup and if successful, setCreateAccount true
    setCreateAccount({ createAccountSuccess: true });

    setClicked({ signUpClicked: true });
  };

  const signedUp = () => {
    if (createAccountSuccess) {
      return (
        <div className="toast toast-top">
          <div className="alert alert-success">
            <div>
              <span>Account creation successful</span>
            </div>
          </div>
        </div>
      );
    }
    if (!createAccountSuccess && signUpClicked) {
      return (
        <div className="toast toast-top">
          <div className="alert alert-error">
            <span>Account creation successful</span>
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
            Create An Account
          </h1>
          <p className=" unselectable w-80 text-center text-sm font-semibold tracking-wide">
            Create an account with GenSpark email to continue with this site
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
            id="signUpBtn"
            className="btn btn-accent text-accent-content"
            onClick={handleClick}
          >
            Create Account
          </button>
          <p className="text-sm">
            Already have an account?
            <span className="ml-1 underline">Sign In</span>
          </p>
        </form>
      </div>
    </div>
  );
}
