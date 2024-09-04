import { useState } from "react";

import ZoomSpinner from "./ZoomSpinner";

import info from "../assets/circle-information-svgrepo-com.svg";
import passwordHide from "../assets/eye-password-hide-svgrepo-com.svg";
import passwordShow from "../assets/eye-password-show-svgrepo-com.svg";
import openwindow from "../assets/window-open.png";

const INNITIAL_VALUES = { zoomemail: "", zoompassword: "" };
const ERROR_VALUES = {
  error: false,
  errorEmail: "",
  errorPassword: "",
  isBothError: false,
  errorMsg: "",
};
const forgotPWLink = "https://zoom.us/signin#/forgot-password";
const zoomPrivavyLink = "https://explore.zoom.us/en/privacy/";
const zoomTermsLink = "https://www.zoom.com/en/trust/terms/";

function ZoomSignin({ helpHandle }) {
  const [formValues, setFormValues] = useState(INNITIAL_VALUES);
  const [errorValues, setErrorValues] = useState(ERROR_VALUES);
  const [isVisible, setIsVisible] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { zoomemail, zoompassword } = formValues;
  const { error, errorEmail, errorPassword, isBothError, errorMsg } =
    errorValues;

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const onInputChange = (e) => {
    setErrorValues((prev) => ({
      ...prev,
      errorEmail: "",
      errorPassword: "",
      errorMsg: "",
      error: false,
      isBothError: false,
    }));
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      document.getElementById("zoomSignIn").click();
    }
  };

  const submitHandle = (e) => {
    e.preventDefault();

    const buttonName = e.nativeEvent.submitter.name;
    if (buttonName === "zoomSignin") {
      if (zoomemail === "" && zoompassword === "") {
        setErrorValues((prev) => ({
          ...prev,
          errorEmail: "Please enter your email address",
          errorPassword: "Please enter your password",
          error: true,
        }));
      } else if (!validateEmail(zoomemail)) {
        setErrorValues((prev) => ({
          ...prev,
          errorEmail: "Please enter your email address",
          error: true,
        }));
      } else if (zoompassword !== "snrnsk!@") {
        setErrorValues((prev) => ({
          ...prev,
          isBothError: true,
          errorMsg:
            "Incorrect email or password. Enter your sign ininformation again, or request an email to gain access to your account.",
        }));
      } else {
        setIsLoading(true);
        const timer = setTimeout(() => {
          alert(`Zoom: You have successfully logged in as ${zoomemail} `);
          setFormValues(INNITIAL_VALUES);
          setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
      }
    } else if (buttonName === "zoomHelp") {
      helpHandle();
    } else if (buttonName === "zoomPasswordVisibility") {
      setIsVisible(!isVisible);
    }
  };

  const forgotHandle = () => {
    window.open(forgotPWLink, "_blank");
  };

  return (
    <>
      <div>
        <div className="flex-col">
          <p
            className="flex justify-center
           text-[32px] mb-[32px] font-semibold"
          >
            Sign In
          </p>
          <form
            className="w-[246px] sm:w-[346px]"
            onSubmit={submitHandle}
            id="zoomForm"
          >
            <div>
              <div className="relative mb-2">
                {isEmailFocused && (
                  <label
                    className="absolute text-slate-500 pt-1 pb-2 left-0 top-0 text-xs mb-1 px-2"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                )}
                <input
                  className={`w-full h-12 rounded-lg px-2 mb-4 placeholer:pt-0 placeholder:text-slate-500 
                    focus:placeholder-transparent focus:pt-4 ${
                      !error
                        ? "border border-zoombordergrey"
                        : "mb-0 border  border-red-500"
                    }`}
                  type="text"
                  id="zoomemail"
                  name="zoomemail"
                  value={zoomemail}
                  onChange={onInputChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Email Address"
                  onFocus={() => setIsEmailFocused(true)}
                  onBlur={() => setIsEmailFocused(false)}
                />
                <div className="text-zoomred text-sm ">{errorEmail}</div>
              </div>
              <div className="relative flex">
                {isPasswordFocused && (
                  <label
                    className="absolute text-slate-500 pt-1 pb-2 left-0 top-0 text-xs mb-1 px-2"
                    htmlFor="email"
                  >
                    Password
                  </label>
                )}
                <input
                  className={`w-full h-12 rounded-lg px-2 mb-4 placeholer:pt-0 placeholder:text-slate-500 
                    focus:placeholder-transparent focus:pt-4 ${
                      !error
                        ? "border border-zoombordergrey"
                        : "mb-0 border  border-red-500"
                    }`}
                  type={isVisible ? "text" : "password"}
                  id="zoompassword"
                  s
                  name="zoompassword"
                  value={zoompassword}
                  onChange={onInputChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Password"
                  onFocus={() => setIsPasswordFocused(true)}
                  onBlur={() => setIsPasswordFocused(false)}
                />
                <div className="absolute flex items-center top-4 right-3  ">
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
                </div>
              </div>
              <div className="text-zoomred text-sm">{errorPassword}</div>
            </div>
            <div className="flex justify-between mb-3">
              <button
                className="flex text-zoomdarkblue font-semibold text-sm py-2 hover:underline underline-offset-2 hover:text-zoomhoverblue "
                id="forgotPassword"
                name="forgotPassword"
                onClick={forgotHandle}
              >
                Forgot password?
              </button>
              <button
                className="flex text-zoomdarkblue font-semibold text-sm py-2 hover:text-zoomhoverblue 
                 hover:underline underline-offset-2"
                name="zoomHelp"
              >
                Help
                <img
                  className="w-4 h-4 ml-2 flex items-cneter"
                  src={openwindow}
                  alt="open-window"
                />
              </button>
            </div>
            <div
              className={`bg-zoomlightred p-[16px] my-[16px] rounded text-sm ${
                !isBothError && "hidden"
              }`}
            >
              {errorMsg}
            </div>
            <div className="relative">
              <button
                id="zoomSignIn"
                name="zoomSignin"
                className={`w-full ${
                  isLoading
                    ? "bg-zoomsigningrey text-zoomsignindarkgrey"
                    : "bg-zoombtnblue text-white border p-2"
                }  rounded-lg font-bold  h-[40px]`}
                type="submit"
              >
                {isLoading && (
                  <div className="absolute left-5 top-4">
                    <ZoomSpinner />
                  </div>
                )}
                Sign In
              </button>
            </div>
            <div>
              <p className="text-zoomagreegrey text-sm font-semibold mt-[16px] mb-[10px]">
                By signing in, I agree to the
                <span className="text-zoomdarkblue hover:underline underline-offset-2">
                  <a href={zoomPrivavyLink} target="_blank" rel="noreferrer">
                    &nbsp;Zoom's Privacy Statement
                  </a>
                </span>
                &nbsp; and &nbsp;
                <a
                  className="text-zoomdarkblue hover:underline underline-offset-2"
                  href={zoomTermsLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Terms of Service.
                </a>
              </p>
              <div className="flex items-center">
                <p className="text-zoombordergrey text-sm mt-[8px] font-medium">
                  <input type="checkbox" /> Stay signed in &nbsp;
                </p>
                <img className="w-4 h-4 mt-2" src={info} alt="info" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ZoomSignin;
