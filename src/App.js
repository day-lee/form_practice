import "./App.css";
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
        setErrorEmail("Invalid email address");
        setIsDisabled(true);
      }
    }

    console.log(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      alert(`Successfully logged in as ${email}`);
    } else {
      setErrorEmail("Please enter a valid email address");
      setFormValues(INITIAL_DATA);
    }
  };

  return (
    <div className="p-10 ">
      <p className="text-blue-500 mb-10"> Linkedin Login Form</p>

      <div className="w-[343px] h-[448px] border shadow">
        <p>Sign in</p>
        <p>Stay updated on your professional world Email or Phone Password</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email"></label>
          <input
            id="email"
            name="email"
            type="text"
            value={email}
            required
            onChange={onInputChange}
            placeholder="Email"
          />
          {errorEmail && <p>{errorEmail}</p>}
          <label htmlFor="password"></label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            required
            onChange={onInputChange}
            placeholder="Password"
          />
          <p>Forgot password?</p>
          <button type="submit" disabled={isDisabled}>
            Sign in
          </button>
          <p>or</p>
          <button type="submit" disabled={isDisabled}>
            Sign in with Apple
          </button>
        </form>
        Sign in
      </div>
    </div>
  );
}

export default App;
