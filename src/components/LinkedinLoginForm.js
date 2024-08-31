import LinkedinLoginInputBtn from "./LinkedinLoginInputBtn.js";

import apple from "../assets/apple-logo.png";
import google from "../assets/google-logo.png";

function LinkedinLoginForm({
  formValues,
  errorValues,
  isPasswordShown,
  isDisabled,
  onChange,
  onSubmit,
  onShow,
}) {
  const googleHandle = () => {
    window.open(
      "https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Faccounts.google.com%2Fgsi%2Fselect%3Fclient_id%3D990339570472-k6nqn1tpmitg8pui82bfaun3jrpmiuhs.apps.googleusercontent.com%26auto_select%3Dfalse%26ux_mode%3Dpopup%26ui_mode%3Dcard%26context%3Dsignin%26as%3Dj36xhruNcEKnS83Olo%252BCDw%26channel_id%3Db9d9c32e7fea98d9512405769e55afd3dcaa9731f29c56be8b33f93921901229%26origin%3Dhttps%3A%2F%2Fwww.linkedin.com&faa=1&ifkv=AdF4I75Pg8vgU6g3iw0fwg4_gHsZKYFxwTT7SbqAl8MPScchLy9nm61kEYdNDFvKTK4l0lXK2hlXZQ&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S673158336%3A1722630480496456&ddm=0",
      "_blank",
      "width=500,height=600,top=100,left=100,scrollbars=yes"
    );
  };

  const appleHandle = () => {
    window.open(
      "https://appleid.apple.com/auth/authorize?client_id=com.linkedin.LinkedIn.service&redirect_uri=https%3A%2F%2Fwww.linkedin.com%2Fredirect&response_type=code%20id_token&scope=name%20email&response_mode=web_message&frame_id=52a1168e-bdfd-4e1d-9715-60a78ad9082e&m=11&v=1.5.3",
      "_blank",
      "width=500,height=600,top=100,left=100,scrollbars=yes"
    );
  };

  const joinHandle = () => {
    window.open("https://www.linkedin.com/signup/cold-join", "_blank");
  };

  return (
    <>
      <form id="linkedinform" onSubmit={(e) => onSubmit(e)}>
        <LinkedinLoginInputBtn
          formValues={formValues}
          errorValues={errorValues}
          isPasswordShown={isPasswordShown}
          isDisabled={isDisabled}
          onInputChangeHandle={(e) => onChange(e)}
          onShowHandle={onShow}
        />
        <div className="flex justify-center text-[14px] text-center text-themgray">
          <span className="block border-b border-gray w-1/2 mx-auto mb-2"></span>
          <span> &nbsp;&nbsp;or&nbsp;&nbsp; </span>
          <span className="block border-b border-gray w-1/2 mx-auto mb-2"></span>
        </div>
        <div className="text-xs mt-3 mb-3">
          <span>
            By clicking Continue, you agree to LinkedIn’s{" "}
            <span className="text-themeblue font-semibold">User Agreement</span>
            ,
            <span className="text-themeblue font-semibold">Privacy Policy</span>
            , and{" "}
            <span className="text-themeblue font-semibold">Cookie Policy</span>.{" "}
          </span>
        </div>
        <button
          className="w-[352px] text-[16px] border border-solid 
      border-slate-400 rounded-3xl p-2 mb-2 hover:bg-hovergrey"
          onClick={googleHandle}
        >
          <div className="flex justify-center">
            <img className="mx-1 mt-1 h-5" src={google} alt="googlelogo" />
            <p>Continue with Google</p>
          </div>
        </button>
        <button
          className="w-[352px] border border-solid border-slate-400
       rounded-3xl p-2 mt-1 hover:bg-hovergrey"
          onClick={appleHandle}
        >
          <div className="flex justify-center">
            <img className="mx-1" src={apple} alt="applelogo" />
            <p>Sign in with Apple</p>
          </div>
        </button>
        <div className="mt-7 font-light text-center">
          <span className="font-normal">New to LinkedIn?</span>
          <button className="text-themeblue font-semibold" onClick={joinHandle}>
            &nbsp;Join now
          </button>
        </div>
      </form>
    </>
  );
}

export default LinkedinLoginForm;
