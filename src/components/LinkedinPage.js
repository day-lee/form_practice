import { useState } from "react";

import LinkedinLoginForm from "./LinkedinLoginForm";

import linkedin from "../assets/linkedin-logo.png";

const INITIAL_DATA = { email: "", password: "" };
const DEFAULT_ERROR = { errorEmail: "", errorPassword: "", isError: false };

function LinkedinPage() {
  const [formValues, setFormValues] = useState(INITIAL_DATA);
  const [errorValues, setErrorValues] = useState(DEFAULT_ERROR);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const { email, password } = formValues;
  const { isError } = errorValues;

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const onInputChange = (e) => {
    setErrorValues((prev) => ({ ...prev, errorEmail: "", errorPassword: "" }));
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    if (name === "email") {
      if (validateEmail(value)) {
        setErrorValues((prev) => ({ ...prev, errorEmail: "" }));
        setIsDisabled(false);
      }
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setErrorValues((prev) => ({
        ...prev,
        errorEmail: "Please enter a valid username.",
        isError: true,
      }));
      setFormValues(INITIAL_DATA);
    } else if (password !== "1234") {
      setErrorValues((prev) => ({
        ...prev,
        errorPassword:
          "Wrong email or password. Try again or create an account.",
        isError: true,
      }));
      setFormValues(INITIAL_DATA);
    } else {
      setFormValues(INITIAL_DATA);
      alert(`Linkedin: You have successfully logged in as ${email}`);
      setErrorValues((prev) => ({
        errorEmail: "",
        errorPassword: "",
        isError: false,
      }));
    }
  };

  const showHandle = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  return (
    <div className="flex justify-center items-center bg-white h-[800px]">
      <div className="relative px-10 pt-10">
        <div className="absolute sm:left-10 left-[123px]">
          <img className="mb-4" src={linkedin} alt="linkedinlogo" />
        </div>
        <div className="flex flex-col items-center pt-20  py-5 justify-center sm:w-[534px] h-[700px]">
          <div className="absolute sm:left-[130px] sm:top-20 left-[130px] top-20">
            <h1 className="text-[32px] font-semibold">Sign in</h1>
            <p className="font-normal mt-1 mb-6 text-[14px]">
              Stay updated on your professional world.
            </p>
          </div>
          <div className="pt-5 w-[352px] h-[536px]">
            <LinkedinLoginForm
              formValues={formValues}
              errorValues={errorValues}
              isDisabled={isDisabled}
              isPasswordShown={isPasswordShown}
              onChange={onInputChange}
              onSubmit={onSubmit}
              onShow={showHandle}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LinkedinPage;
