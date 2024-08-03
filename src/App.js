import "./App.css";
import LoginForm from "./components/LoginForm";
import linkedin from "./assets/linkedin-logo.png";
import { useState } from "react";

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
    <div className="flex-col relative h-screen">
      <div className="">
        <p className="text-2xl mb-[500px] pt-10 pb-10 px-10">
          Clone coding: Linkedin Login Form
        </p>
      </div>

      <div className="flex justify-center items-center flex-grow">
        <div className="absolute bg-white px-5 py-10 pl-[85px]">
          <img className="mb-4" src={linkedin} alt="linkedinlogo" />

          <div className="bg-white pt-15 px-16 py-5 justify-center w-[534px] h-[846px]">
            <h1 className="text-[32px] font-semibold">Sign in</h1>
            <p className="font-normal mt-1 mb-6 text-[14px]">
              Stay updated on your professional world.
            </p>
            <div className="w-[352px] h-[536px]">
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
  );
}

export default App;
