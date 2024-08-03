import zoomImg from "../assets/zoom-img.png";
import openwindow from "../assets/window-open.png";
import passwordHide from "../assets/eye-password-hide-svgrepo-com.svg";
import passwordShow from "../assets/eye-password-show-svgrepo-com.svg";
import info from "../assets/circle-information-svgrepo-com.svg";

function ZoomSignin() {
  const onInputChange = () => {};

  const submitHandle = (e) => {
    e.preventDefault();
  };

  const forgotHandle = () => {
    window.open("https://zoom.us/signin#/forgot-password", "_blank");
  };
  const helpHandle = () => {};
  return (
    <>
      <div>
        <div>
          <img src={zoomImg} alt="zoomimg" />
        </div>

        <div>
          <p>Sign In</p>
          <form onSubmit={submitHandle}>
            <div>
              <label htmlFor="email"></label>
              <input
                type="text"
                id="email"
                name="email"
                onChange={onInputChange}
                placeholder="Email Address"
              />
              <div className="">
                "error msg: Please enter your email address "
              </div>

              <label htmlFor="password"></label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={onInputChange}
                placeholder="Password"
              />
              <div>
                <img src={passwordHide} />
                <img src={passwordShow} />
                // inside password show hide btn
              </div>
            </div>

            <div>
              <button onClick={forgotHandle}>Forgot password?</button>
              <button onClick={helpHandle}>Help </button>
              <img src={openwindow} alt="open-window" />
            </div>

            <div className="">
              "error msg: Incorrect email or password. Enter your sign in
              information again, or request an email to gain access to your
              account."
            </div>

            <button> Sign In</button>
            <div>
              <p>
                By signing in, I agree to the{" "}
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
