import "./App.css";
import google from "./assets/google-logo.png";
import apple from "./assets/apple-logo.png";
import linkedin from "./assets/linkedin-logo.png";
import { useState } from "react";

const INITIAL_DATA = { email: "", password: "" };
function App() {
  const [formValues, setFormValues] = useState(INITIAL_DATA);
  const [errorEmail, setErrorEmail] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const { email, password } = formValues;

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    if (name === "email") {
      if (validateEmail(value)) {
        setErrorEmail("");
        setIsDisabled(false);
      } else {
      }
    }

    console.log(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      alert(`Successfully logged in as ${email}`);
    } else {
      setErrorEmail("Please enter a valid username.");
      setFormValues(INITIAL_DATA);
    }
  };

  return (
    <div className=" w-full h-screen">
      <p className="text-2xl mb-10 pt-10 px-10">
        Clone coding: Linkedin Login Form{" "}
      </p>
      <div className="bg-white px-5 py-10 justify-center border shadow">
        <img className="mb-4" src={linkedin} alt="linkedinlogo" />

        <div className="bg-white pt-15 px-16 py-5 justify-center w-[534px] h-[846px]">
          <h1 className="text-[32px] font-semibold">Sign in</h1>
          <p className="font-normal mt-1 mb-6 text-[14px]">
            Stay updated on your professional world.
          </p>
          <div className="w-[352px] h-[536px]">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email"></label>
                <input
                  className="w-[352px] h-[52px] border border-solid border-slate-500 rounded p-2 mt-1 "
                  id="email"
                  name="email"
                  type="text"
                  value={email}
                  required
                  onChange={onInputChange}
                  placeholder="Email"
                />
                {errorEmail && (
                  <p className="text-themered text-[14px] font-medium">
                    {errorEmail}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="password"></label>
                <input
                  className="w-[352px] h-[52px] border border-solid border-slate-500 rounded p-2 mt-4 mb-4"
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  required
                  onChange={onInputChange}
                  placeholder="Password"
                />
              </div>
              <button
                className="bg-white text-themeblue font-semibold p-1
               hover:bg-themelightblue hover:border-themelightblue hover:rounded-3xl"
              >
                Forgot password?
              </button>
              <button
                className="w-[352px] bg-themeblue p-3 rounded-3xl font-semibold text-white mt-5 mb-3 hover:bg-hoverblue"
                type="submit"
                disabled={isDisabled}
              >
                Sign in
              </button>
              <div className="text-[14px] text-center text-themgray">
                <span class="block border-b-2 border-gray w-1/2 mx-auto"></span>
                <span>or</span>
                <span class="block border-b-2 border-gray w-1/2 mx-auto"></span>
              </div>
              <div className="text-xs mt-3 mb-3">
                <span>
                  By clicking Continue, you agree to LinkedIn’s{" "}
                  <span className="text-themeblue font-semibold">
                    User Agreement
                  </span>
                  ,
                  <span className="text-themeblue font-semibold">
                    Privacy Policy
                  </span>
                  , and{" "}
                  <span className="text-themeblue font-semibold">
                    Cookie Policy
                  </span>
                  .{" "}
                </span>
              </div>
              <button
                className="w-[352px] text-[16px] border border-solid border-slate-400 rounded-3xl p-2 mb-2 hover:bg-hovergrey"
                type="submit"
                disabled={isDisabled}
              >
                <img src={google} alt="googlelogo" />
                Continue with Google
              </button>
              <button
                className="w-[352px] border border-solid border-slate-400 rounded-3xl p-2 mt-1 hover:bg-hovergrey"
                type="submit"
                disabled={isDisabled}
              >
                <img src={apple} alt="applelogo" />
                Sign in with Apple
              </button>
              <div className="mt-7 font-light text-center">
                <span>New to LinkedIn?</span>
                <span className="text-themeblue font-semibold"> Join now</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
