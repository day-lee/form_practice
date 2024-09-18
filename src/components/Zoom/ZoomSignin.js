import { useState } from "react";

import ZoomSpinner from "./ZoomSpinner";

import applelogo from "../../assets/apple-logo.svg";
import info from "../../assets/circle-information-svgrepo-com.svg";
import passwordHide from "../../assets/eye-password-hide-svgrepo-com.svg";
import passwordShow from "../../assets/eye-password-show-svgrepo-com.svg";
import facebooklogo from "../../assets/facebook-logo.svg";
import googlelogo from "../../assets/google-logo.svg";
import ssologo from "../../assets/sso-logo.svg";
import openwindow from "../../assets/window-open.png";

const INITIAL_VALUES = { zoomemail: "", zoompassword: "" };
const ERROR_VALUES = {
  error: false,
  errorEmail: "",
  errorPassword: "",
  errorMsg: "",
  isBothError: false,
};
const forgotPasswordLink = "https://zoom.us/signin#/forgot-password";
const googlePrivacyLink = "https://policies.google.com/privacy";
const googleTermsLink = "https://policies.google.com/terms";
const zoomPrivavyLink = "https://explore.zoom.us/en/privacy/";
const zoomTermsLink = "https://www.zoom.com/en/trust/terms/";
const ssoLink = "https://zoom.us/web/sso/login?en=signin#/";
const appleLink =
  "https://appleid.apple.com/auth/authorize?response_type=code&client_id=us.zoom.videomeetings.appleidsign&redirect_uri=https%3A%2F%2Fzoom.us%2Fapple%2Foauth&scope=name%20email&response_mode=form_post&state=OHhYazhoMUxUYS1MUm5NMGRPVXRjQSxhcHBsZV9zaWduaW4&_x_zm_rtaid=Le30iYENQ7Oz09-6XiRodw.1722720173320.5ca1e6651661b022ad92de02a35c40a6&_x_zm_rhtaid=755";
const googleLink =
  "https://accounts.google.com/v3/signin/identifier?opparams=%253F_x_zm_rhtaid%253D755%2526_x_zm_rtaid%253DLe30iYENQ7Oz09-6XiRodw.1722720173320.5ca1e6651661b022ad92de02a35c40a6&dsh=S-281526729%3A1722720312758671&access_type=offline&client_id=849883241272-ed6lnodi1grnoomiuknqkq2rbvd2udku.apps.googleusercontent.com&ddm=0&o2v=2&prompt=select_account&redirect_uri=https%3A%2F%2Fzoom.us%2Fgoogle%2Foauth&response_type=code&scope=profile+email&service=lso&state=OHhYazhoMUxUYS1MUm5NMGRPVXRjQSxnb29nbGVfc2lnbmlu&flowName=GeneralOAuthFlow&continue=https%3A%2F%2Faccounts.google.com%2Fsignin%2Foauth%2Fconsent%3Fauthuser%3Dunknown%26part%3DAJi8hAPo1pO2TBbE-x9nPQwHbcJMy1JdVLo_wwCMwR_JBDYKAn4TI2P1afU2NQRS2gEqetq8e3--FPw5oTbfqgLOcDM-_W9Oe5KBg3arFmnSA221nilIab124VdaCejv0qjOkBp4g0xc--YtSX8zXSkxPPg0UxNvta6IXnzxm0yZCuyLuImS5fpqOHW9pi0id9x8Naj0-jPfzFDxwXM7mP21oG9eaZmbd0I13ncxfDOIs2ytK--DnlyxUxxgrdsp1VcEcmzatco_Ns6ThuuPsFQiT40dBTkDKRk9KZG7-FJESkHIusvpi51t6x983I8PDIzgtKxILLfp_mIc5ZyLIbfjttfe7xI1DxMVsSAgPB22Mjhnp4fuiDZnVyJ1z370WH7ISsU94f7Wx9AOZvfosPh3468CkabZWG4TRL44gmX3_nD3FD5Vqj9CM07r3R4Jt5a74ya8JqCThE1qWsOWInBp3Bz2Wh2WqA%26flowName%3DGeneralOAuthFlow%26as%3DS-281526729%253A1722720312758671%26client_id%3D849883241272-ed6lnodi1grnoomiuknqkq2rbvd2udku.apps.googleusercontent.com%23&app_domain=https%3A%2F%2Fzoom.us&rart=ANgoxceSzqcQIvlHl3mNVBldm0CCGyyuObU6tCTT8Ej99ULMq2xjF1XG16usoS2ZmbAEpAOWLoE_mvDt0Lr9qCOG5l-tmauukjE6g_OEOdlaV8jxYVVXcVk";
const facebookLink =
  "https://www.facebook.com/login.php?skip_api_login=1&api_key=113289095462482&kid_directed_site=0&app_id=113289095462482&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv18.0%2Fdialog%2Foauth%3Fresponse_type%3Dcode%26client_id%3D113289095462482%26scope%3Demail%252Cpublic_profile%26redirect_uri%3Dhttps%253A%252F%252Fzoom.us%252Ffacebook%252Foauth%26state%3DOHhYazhoMUxUYS1MUm5NMGRPVXRjQSxmYWNlYm9va19zaWduaW4%26_x_zm_rtaid%3DLe30iYENQ7Oz09-6XiRodw.1722720173320.5ca1e6651661b022ad92de02a35c40a6%26_x_zm_rhtaid%3D755%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D53b0a444-102e-4327-abb9-682c77d42eb3%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fzoom.us%2Ffacebook%2Foauth%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3DOHhYazhoMUxUYS1MUm5NMGRPVXRjQSxmYWNlYm9va19zaWduaW4%23_%3D_&display=page&locale=ko_KR&pl_dbl=0";

function ZoomSignin({ helpHandle }) {
  const [formValues, setFormValues] = useState(INITIAL_VALUES);
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

  const handleSubmit = (e) => {
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
      } else if (zoompassword !== "1234abc!") {
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
          setFormValues(INITIAL_VALUES);
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

  const handleForgotPassword = () => {
    window.open(forgotPasswordLink, "_blank");
  };

  const openExternalLink = (url) => window.open(url, "_blank", "noreferrer");

  const handleSSOClick = (e) => {
    const { name } = e.currentTarget;
    switch (name) {
      case "sso":
        openExternalLink(ssoLink);
        break;
      case "apple":
        openExternalLink(appleLink);
        break;
      case "google":
        openExternalLink(googleLink);
        break;
      case "facebook":
        openExternalLink(facebookLink);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div>
        <div className="flex-col">
          <p
            className="hidden lg:flex justify-center
           text-[32px] mb-[32px] font-semibold"
          >
            Sign In
          </p>
          <form
            className="w-[246px] sm:w-[346px]"
            onSubmit={handleSubmit}
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
                    aria-label={isVisible ? "Hide password" : "Show password"}
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
                aria-label="forgot password"
                onClick={handleForgotPassword}
              >
                Forgot password?
              </button>
              <button
                className="flex text-zoomdarkblue font-semibold text-sm py-2 hover:text-zoomhoverblue 
                 hover:underline underline-offset-2"
                name="zoomHelp"
                aria-label="help"
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
                aria-label="zoom signin"
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
              <p className="text-zoomagreegrey text-sm font-semibold mt-4 mb-[10px]">
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
            <div className="text-zoomagreegrey text-sm font-semibold mt-4">
              <div className="flex justify-center mt-[12px] mb-[24px]">
                <span className="block border-b w-1/4 sm:w-1/3 my-auto"></span>
                <span>&nbsp; Or sign in with &nbsp;</span>
                <span className="block border-b w-1/4 sm:w-1/3 my-auto"></span>
              </div>
              <div className="flex justify-evenly">
                <div className="relative w-[85px] h-[86px] hover:text-black">
                  <button
                    className="border m-2 p-3 w-[48px] h-[48px] rounded-2xl hover:bg-[#F0F0F0]"
                    id="sso"
                    name="sso"
                    aria-label="sso login"
                    onClick={handleSSOClick}
                  >
                    <img src={ssologo} alt="ssologo" />
                    <p className="absolute left-5 mt-6">SSO</p>
                  </button>
                </div>
                <div className="relative w-[85px] h-[86px] hover:text-black">
                  <button
                    className="border m-2 pl-3 pt-3 pb-3 w-[48px] h-[48px] rounded-2xl hover:bg-[#F0F0F0]"
                    id="apple"
                    name="apple"
                    aria-label="appe login"
                    onClick={handleSSOClick}
                  >
                    <img src={applelogo} alt="applelogo" />
                    <p className="absolute left-4 mt-5">Apple</p>
                  </button>
                </div>
                <div className="relative w-[85px] h-[86px] hover:text-black">
                  <button
                    className="border m-2 p-3 w-[48px] h-[48px] rounded-2xl hover:bg-[#F0F0F0]"
                    id="google"
                    name="google"
                    aria-label="google login"
                    onClick={handleSSOClick}
                  >
                    <img src={googlelogo} alt="googlelogo" />
                    <p className="absolute left-2 mt-5">Google</p>
                  </button>
                </div>
                <div className="relative w-[85px] h-[86px] hover:text-black">
                  <button
                    className="border m-2 p-3 w-[48px] h-[48px] rounded-2xl hover:bg-[#F0F0F0]"
                    id="facebook"
                    name="facebook"
                    aria-label="facebook login"
                    onClick={handleSSOClick}
                  >
                    <img src={facebooklogo} alt="facebooklogo" />
                    <p className="absolute left-1 pt-5">Facebook</p>
                  </button>
                </div>
              </div>
              <div className="mt-[32px] text-zoombordergrey ">
                Zoom is protected by reCAPTCHA and the{" "}
                <a
                  href={googlePrivacyLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-zoomdarkblue hover:underline underline-offset-2"
                >
                  Privacy Policy{" "}
                </a>
                and{" "}
                <a
                  href={googleTermsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-zoomdarkblue hover:underline underline-offset-2"
                >
                  Terms of Service{" "}
                </a>
                apply.
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ZoomSignin;
