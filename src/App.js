import { useState } from "react";

import "./App.css";
import LoginForm from "./components/LoginForm";
import ZoomPage from "./components/ZoomPage";
import ZoomHeader from "./components/ZoomHeader";

import linkedin from "./assets/linkedin-logo.png";
import zoomImg from "./assets/zoom-img.png";

const INITIAL_DATA = { email: "", password: "" };
function App() {
  const [formValues, setFormValues] = useState(INITIAL_DATA);
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isShow, setIsShow] = useState(null);
  const { email, password } = formValues;

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const onInputChange = (e) => {
    setErrorEmail("");
    setErrorPassword("");
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

    if (!validateEmail(email)) {
      setErrorEmail("Please enter a valid username.");
      setIsError(true);
      setFormValues(INITIAL_DATA);
    } else if (password !== "1234") {
      setIsError(true);
      setErrorPassword(
        "Wrong email or password. Try again or create an account."
      );
      setFormValues(INITIAL_DATA);
    } else {
      setFormValues(INITIAL_DATA);
      alert(`You have successfully logged in as ${email}`);
      setIsError(false);
      setErrorPassword("");
      setErrorEmail("");
    }
  };

  const showHandle = () => {
    setIsShow(!isShow);
  };

  return (
    <>
      <div className="flex flex-col w-max sm:w-screen justfy-center items-center">
        <div className="text-2xl p-20 h-10">
          <p>Clone coding: Linkedin login form</p>
        </div>
        <div className="h-[750px] ">
          <div className="relative">
            <div className="bg-white px-10 pt-10 ">
              <div className="absolute sm:left-10 left-[123px]">
                <img className="mb-4" src={linkedin} alt="linkedinlogo" />
              </div>
              <div className="flex flex-col items-center pt-20 px-16 py-5 justify-center w-[534px] h-[700px]">
                <div className="absolute sm:left-[130px] sm:top-20 left-[130px]  top-20">
                  <h1 className="text-[32px] font-semibold">Sign in</h1>
                  <p className="font-normal mt-1 mb-6 text-[14px]">
                    Stay updated on your professional world.
                  </p>
                </div>
                <div className="pt-5 w-[352px] h-[536px]">
                  <LoginForm
                    email={email}
                    password={password}
                    errorPassword={errorPassword}
                    errorEmail={errorEmail}
                    isError={isError}
                    isDisabled={isDisabled}
                    isShow={isShow}
                    onChange={onInputChange}
                    onSubmit={handleSubmit}
                    onShow={showHandle}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-2xl p-20 h-10">
          <p>Clone coding: Zoom login form</p>
        </div>

        <div className="flex flex-col bg-white w-screen">
          <ZoomHeader />

          <div className="flex relative bg-white w-full sm:h-[900px] h-[1000px]">
            <div className="bg-zoomgrey w-1/2 sm:p-[6rem]">
              <div>
                <div className="pt-[160px]">
                  {/* desktop img */}
                  <img src={zoomImg} alt="zoomimg" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center bg-white pt-20 px-16 py-5 w-full sm:h-[900px] h-[1000px]">
              <div className="w-[352px] h-[536px]">
                {" "}
                <ZoomPage />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
