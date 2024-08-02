import "./App.css";
import google from "./assets/google-logo.png";
import apple from "./assets/apple-logo.png";
import linkedin from "./assets/linkedin-logo.png";
import { useState } from "react";

const INITIAL_DATA = { email: "", password: "" };
function App() {
  const [formValues, setFormValues] = useState(INITIAL_DATA);
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [isError, setIsError] = useState(false);
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
      }
    }

    console.log(value);
    console.log(typeof value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //
    if (!validateEmail(email)) {
      setErrorEmail("Please enter a valid username.");
      setIsError(true);
      setFormValues(INITIAL_DATA);
    } else if (password !== "1") {
      setIsError(true);
      setErrorPassword(
        "Wrong email or password. Try again or create an account."
      );
      setFormValues(INITIAL_DATA);
    } else {
      setFormValues(INITIAL_DATA);
      alert(`Successfully logged in as ${email}`);
      setIsError(false);
    }
  };

  const googleHandle = () => {
    window.open(
      "https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Faccounts.google.com%2Fgsi%2Fselect%3Fclient_id%3D990339570472-k6nqn1tpmitg8pui82bfaun3jrpmiuhs.apps.googleusercontent.com%26auto_select%3Dfalse%26ux_mode%3Dpopup%26ui_mode%3Dcard%26context%3Dsignin%26as%3Dj36xhruNcEKnS83Olo%252BCDw%26channel_id%3Db9d9c32e7fea98d9512405769e55afd3dcaa9731f29c56be8b33f93921901229%26origin%3Dhttps%3A%2F%2Fwww.linkedin.com&faa=1&ifkv=AdF4I75Pg8vgU6g3iw0fwg4_gHsZKYFxwTT7SbqAl8MPScchLy9nm61kEYdNDFvKTK4l0lXK2hlXZQ&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S673158336%3A1722630480496456&ddm=0",
      "_blank"
    );
  };

  const appleHandle = () => {
    window.open(
      "https://appleid.apple.com/auth/authorize?client_id=com.linkedin.LinkedIn.service&redirect_uri=https%3A%2F%2Fwww.linkedin.com%2Fredirect&response_type=code%20id_token&scope=name%20email&response_mode=web_message&frame_id=52a1168e-bdfd-4e1d-9715-60a78ad9082e&m=11&v=1.5.3",
      "_blank"
    );
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
                  className={`w-[352px] h-[52px]  rounded p-2 mt-1 ${
                    !isError
                      ? "border border-solid border-slate-500"
                      : "border border-2 border-red-500"
                  }`}
                  id="email"
                  name="email"
                  type="text"
                  value={email}
                  required
                  onChange={onInputChange}
                  placeholder="Email"
                />
                {errorEmail && (
                  <p className="text-themered text-[14px] font-semibold">
                    {errorEmail}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="password"></label>
                <input
                  className={`w-[352px] h-[52px]  rounded p-2 mt-5 ${
                    !isError
                      ? "border border-solid border-slate-500"
                      : "border border-2 border-red-500"
                  }`}
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  required
                  onChange={onInputChange}
                  placeholder="Password"
                />

                {errorPassword && (
                  <p className="text-themered text-[14px] font-semibold">
                    {errorPassword}
                  </p>
                )}
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
              <div className="flex justify-center text-[14px] text-center text-themgray">
                <span class="block border-b border-gray w-1/2 mx-auto mb-2"></span>
                <span> &nbsp;&nbsp;or&nbsp;&nbsp; </span>
                <span class="block border-b border-gray w-1/2 mx-auto mb-2"></span>
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
                className="w-[352px] text-[16px] border border-solid 
              border-slate-400 rounded-3xl p-2 mb-2 hover:bg-hovergrey"
                onClick={googleHandle}
              >
                <div className="flex justify-center">
                  <img
                    className="mx-1 mt-1 h-5"
                    src={google}
                    alt="googlelogo"
                  />
                  <p>Continue with Google</p>
                </div>
              </button>

              <button
                className="w-[352px] border border-solid border-slate-400
               rounded-3xl p-2 mt-1 hover:bg-hovergrey"
                onClick={appleHandle}
              >
                <div className="flex justify-center">
                  <img className="mx-1" src={apple} alt="applelogo" />
                  <p>Sign in with Apple</p>
                </div>
              </button>

              <div className="mt-7 font-light text-center">
                <span className="font-normal">New to LinkedIn?</span>
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
