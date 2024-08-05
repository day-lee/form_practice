import zoomImg from "../assets/zoom-img.png";
import openwindow from "../assets/window-open.png";
import passwordHide from "../assets/eye-password-hide-svgrepo-com.svg";
import passwordShow from "../assets/eye-password-show-svgrepo-com.svg";
import info from "../assets/circle-information-svgrepo-com.svg";
import { useState } from "react";

//TODO: show errormsg
//TODO: input validation
//bug -> sign in, hide, help button considered same button (+ linkedin submit with enter key)

//TODO: stay signed in i hover popup
//TODO: help hover popup chat
//TODO: simple auto chat
//TODO: signin loading spinning

//CSS
//TODO: positioning
//TODO: styling
//TODO: responsive - layoutchange

const INNITIAL_VALUES = { zoomemail: "", zoompassword: "" };

function ZoomSignin({ helpHandle }) {
  const [formValues, setFormValues] = useState(INNITIAL_VALUES);
  const [isVisible, setIsVisible] = useState(false);
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
        setErrorEmail("Please enter your email address");
        setErrorPassword("Please enter your password");
      } else if (!validateEmail(zoomemail)) {
        setErrorEmail("Please enter a valid email address.");
      } else if (zoompassword !== "1234") {
        setErrorMsg(
          "Incorrect email or password. Enter your sign ininformation again, or request an email to gain access to your account."
        );
      } else {
        alert(`You have successfully logged in as ${zoomemail} `);
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
          <p>Sign In</p>
          <form onSubmit={submitHandle} id="zoomForm">
            <div>
              <label htmlFor="email"></label>
              <input
                className="border-2"
                type="text"
                id="zoomemail"
                name="zoomemail"
                value={zoomemail}
                onChange={onInputChange}
                onKeyPress={handleKeyPress}
                placeholder="Email Address"
              />

              <div className="p-2 text-zoomred">{errorEmail}</div>

              <label htmlFor="password"></label>
              <input
                className="border-2"
                type={isVisible ? "text" : "password"}
                id="zoompassword"
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

              <div className="p-2 text-zoomred">{errorPassword}</div>
            </div>

            <div>
              <button
                id="forgotPassword"
                name="forgotPassword"
                className="p-2"
                onClick={forgotHandle}
              >
                Forgot password?
              </button>
              <button name="zoomHelp">Help</button>
              <img className="w-4 h-4" src={openwindow} alt="open-window" />
            </div>

            <div className="bg-zoomlightred p-2">{errorMsg}</div>

            <button
              id="zoomSignIn"
              name="zoomSignin"
              className="bg-zoombtnblue text-white font-semibold border p-2"
              type="submit"
            >
              Sign In
            </button>

            <div>
              <p>
                By signing in, I agree to the
                <span>Zoom's Privacy Statement</span>
                and <span>Terms of Service.</span>
              </p>
              <p>
                <input type="checkbox" /> Stay signed in{" "}
                <img className="w-5 h-5" src={info} />
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ZoomSignin;
