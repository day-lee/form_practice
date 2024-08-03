import ssologo from "../assets/sso-logo.png";
import applelogo from "../assets/apple-sm-logo.png";
import googlelogo from "../assets/google-sm-logo.png";
import facebooklogo from "../assets/facebook-logo.png";

function ZoomSsoList() {
  return (
    <>
      <div>
        <p> -- Or sign in with --</p>
        <div className="">
          <button className="">
            <img src={ssologo} alt="ssologo" />
            <p>SSO</p>
          </button>
        </div>
        <div className="">
          <button className="">
            <img src={applelogo} alt="applelogo" />
            <p>Apple</p>
          </button>
        </div>
        <div className="">
          <button className="">
            <img src={googlelogo} alt="googlelogo" />
            <p>Google</p>
          </button>
        </div>
        <div className="">
          <button className="">
            <img src={facebooklogo} alt="facebooklogo" />
            <p>Facebook</p>
          </button>
        </div>

        <div>
          Zoom is protected by reCAPTCHA and the <span>Privacy Policy</span> and
          <span>Terms of Service</span> apply.
        </div>
      </div>
    </>
  );
}

export default ZoomSsoList;
