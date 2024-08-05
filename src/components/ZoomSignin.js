import zoomImg from "../assets/zoom-img.png";
import openwindow from "../assets/window-open.png";
import passwordHide from "../assets/eye-password-hide-svgrepo-com.svg";
import passwordShow from "../assets/eye-password-show-svgrepo-com.svg";
import info from "../assets/circle-information-svgrepo-com.svg";
import { useState } from "react";

//TODO: stay signed in i hover popup
//TODO: help hover popup chat
//TODO: simple auto chat
//TODO: signin loading spinning

//CSS
//TODO: input focus email/password text size smaller
//TODO: positioning
//TODO: styling - help hover underline, errorMsg margin, signin btn (default, isLoading, error), sso btn
//TODO: responsive - layoutchange

//TODO -> Linkedin submit enter

const INNITIAL_VALUES = { zoomemail: "", zoompassword: "" };

function ZoomSignin({ helpHandle }) {
  const [formValues, setFormValues] = useState(INNITIAL_VALUES);
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState(false);
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { zoomemail, zoompassword } = formValues;

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const onInputChange = (e) => {
    setErrorEmail("");
    setErrorPassword("");
    setErrorMsg("");
    const { name, value } = e.target;
    // Change the formValues as entered
    setFormValues((prev) => ({ ...prev, [name]: value }));
    console.log(name, value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      document.getElementById("zoomSignIn").click();
    }
  };

  const submitHandle = (e) => {
    e.preventDefault();
    const buttonName = e.nativeEvent.submitter.name;
    if (buttonName === "zoomSignin") {
      // Validate the formValues to show error msg or comple the login
      if (zoomemail === "" && zoompassword === "") {
        setError(true);
        setErrorEmail("Please enter your email address");
        setErrorPassword("Please enter your password");
      } else if (!validateEmail(zoomemail)) {
        setError(true);
        setErrorEmail("Please enter a valid email address.");
      } else if (zoompassword !== "1234") {
        setError(true);
        setErrorMsg(
          "Incorrect email or password. Enter your sign ininformation again, or request an email to gain access to your account."
        );
      } else {
        alert(`You have successfully logged in as ${zoomemail} `);
        setFormValues(INNITIAL_VALUES);
      }
    } else if (buttonName === "zoomHelp") {
      helpHandle();
    } else if (buttonName === "zoomPasswordVisibility") {
      console.log("hi");
      setIsVisible(!isVisible);
    }
  };

  const forgotHandle = () => {
    window.open("https://zoom.us/signin#/forgot-password", "_blank");
  };

  //   const helpClickHandle = () => {
  //     helpHandle();
  //onClick={helpClickHandle}
  //   };

  //   const passwordVisibleClick = () => {
  //     setIsVisible(!isVisible);
  // onClick={passwordVisibleClick}
  //   };

  return (
    <>
      <div>
        <div>
          <img src={zoomImg} alt="zoomimg" />
        </div>

        <div>
          <p className="text-[32px] mb-[32px] font-semibold">Sign In</p>
          <form className="w-[346px]" onSubmit={submitHandle} id="zoomForm">
            <div>
              <label htmlFor="email"></label>
              <input
                className={`w-full rounded p-2 mb-4 ${
                  !error
                    ? "border border-zoombordergrey"
                    : "mb-0 border  border-red-500"
                }`}
                type="text"
                id="zoomemail"
                name="zoomemail"
                value={zoomemail}
                onChange={onInputChange}
                onKeyPress={handleKeyPress}
                placeholder="Email Address"
              />

              <div className="text-zoomred text-sm">{errorEmail}</div>

              <label htmlFor="password"></label>
              <input
                className={`w-full rounded p-2 ${
                  !error
                    ? "border border-zoombordergrey"
                    : "border  border-red-500"
                }`}
                type={isVisible ? "text" : "password"}
                id="zoompassword"
                s
                name="zoompassword"
                value={zoompassword}
                onChange={onInputChange}
                onKeyPress={handleKeyPress}
                placeholder="Password"
              />

              <div>
                <button
                  id="zoomPasswordVisibility"
                  name="zoomPasswordVisibility"
                  className="w-4 h-4"
                >
                  {!isVisible ? (
                    <img src={passwordShow} alt="show" />
                  ) : (
                    <img src={passwordHide} alt="hide" />
                  )}
                </button>
                // inside password
              </div>

              <div className="text-zoomred text-sm">{errorPassword}</div>
            </div>

            <div>
              <button
                className="text-zoomdarkblue font-semibold text-sm p-2 hover:text-zoomhoverblue "
                id="forgotPassword"
                name="forgotPassword"
                onClick={forgotHandle}
              >
                Forgot password?
              </button>
              <button
                className="text-zoomdarkblue font-semibold text-sm p-2 hover:text-zoomhoverblue underline-offset-auto hover:underline-offset-8"
                name="zoomHelp"
              >
                Help
              </button>
              <img className="w-4 h-4" src={openwindow} alt="open-window" />
            </div>
            <div className="bg-zoomlightred p-[16px] mb-[16px] rounded text-sm">
              {errorMsg}
            </div>
            <button
              id="zoomSignIn"
              name="zoomSignin"
              className="w-full bg-zoombtnblue text-white rounded-lg font-semibold border p-2  h-[40px]"
              type="submit"
            >
              Sign In
            </button>
            <div>
              <p className="text-zoomagreegrey text-sm font-normal mt-[16px] mb-[10px]">
                By signing in, I agree to the
                <span className="text-zoomdarkblue">
                  &nbsp;Zoom's Privacy Statement
                </span>
                and <span className="text-zoomdarkblue">Terms of Service.</span>
              </p>
              <p className="text-zoombordergrey text-sm mt-[8px] font-semibold">
                <input type="checkbox" /> Stay signed in{" "}
                <img className="w-4 h-4" src={info} />
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ZoomSignin;
