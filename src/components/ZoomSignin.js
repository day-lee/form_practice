import zoomImg from "../assets/zoom-img.png";
import openwindow from "../assets/window-open.png";
import passwordHide from "../assets/eye-password-hide-svgrepo-com.svg";
import passwordShow from "../assets/eye-password-show-svgrepo-com.svg";
import info from "../assets/circle-information-svgrepo-com.svg";
import { useState } from "react";

//TODO: password show hide logic
//TODO: signin loading spinning
//TODO: input validation
//TODO: show errormsg
//TODO: stay signed in i hover popup
//TODO: help hover popup chat
//TODO: simple auto chat

//CSS
//TODO: positioning
//TODO: styling
//TODO: responsive - layoutchange

function ZoomSignin({ helpHandle }) {
  const [isVisible, setIsVisible] = useState(false);

  const onInputChange = () => {
    console.log("input");
  };

  const submitHandle = (e) => {
    e.preventDefault();
  };

  const forgotHandle = () => {
    window.open("https://zoom.us/signin#/forgot-password", "_blank");
  };

  const helpClickHandle = () => {
    helpHandle();
  };

  const passwordVisibleClick = () => {
    setIsVisible(!isVisible);
  };

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
                type="text"
                id="zoomemail"
                name="zoomemail"
                onChange={onInputChange}
                placeholder="Email Address"
              />
              <div className="p-2">
                "error msg: Please enter your email address "
              </div>

              <label htmlFor="password"></label>
              <input
                type="password"
                id="zoompassword"
                name="zoompassword"
                onChange={onInputChange}
                placeholder="Password"
              />

              <div>
                <button onClick={passwordVisibleClick}>
                  {!isVisible ? (
                    <img src={passwordShow} alt="show" />
                  ) : (
                    <img src={passwordHide} alt="hide" />
                  )}
                </button>
                // inside password show hide btn
              </div>
            </div>

            <div>
              <button className="p-2" onClick={forgotHandle}>
                Forgot password?
              </button>
              <button onClick={helpClickHandle}>Help </button>
              <img src={openwindow} alt="open-window" />
            </div>

            <div className="p-2">
              "error msg: Incorrect email or password. Enter your sign in
              information again, or request an email to gain access to your
              account."
            </div>

            <button> Sign In</button>
            <div>
              <p>
                By signing in, I agree to the
                <span>Zoom's Privacy Statement</span>
                and <span>Terms of Service.</span>
              </p>
              <p>
                <input type="checkbox" /> Stay signed in <img src={info} />
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ZoomSignin;
