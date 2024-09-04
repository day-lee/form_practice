import applelogo from "../assets/apple-logo.svg";
import facebooklogo from "../assets/facebook-logo.svg";
import googlelogo from "../assets/google-logo.svg";
import ssologo from "../assets/sso-logo.svg";

const googlePrivacyLink = "https://policies.google.com/privacy";
const googleTermsLink = "https://policies.google.com/terms";

function ZoomSsoList() {
  const linkHandle = (e) => {
    // "currentTarget" ensures nested img or p trigger the button click event
    const { name } = e.currentTarget;
    switch (name) {
      case "sso":
        window.open("https://zoom.us/web/sso/login?en=signin#/", "_blank");
        console.log("sso clicked");
        break;
      case "apple":
        window.open(
          "https://appleid.apple.com/auth/authorize?response_type=code&client_id=us.zoom.videomeetings.appleidsign&redirect_uri=https%3A%2F%2Fzoom.us%2Fapple%2Foauth&scope=name%20email&response_mode=form_post&state=OHhYazhoMUxUYS1MUm5NMGRPVXRjQSxhcHBsZV9zaWduaW4&_x_zm_rtaid=Le30iYENQ7Oz09-6XiRodw.1722720173320.5ca1e6651661b022ad92de02a35c40a6&_x_zm_rhtaid=755",
          "_blank",
          "noreferrer"
        );
        break;
      case "google":
        window.open(
          "https://accounts.google.com/v3/signin/identifier?opparams=%253F_x_zm_rhtaid%253D755%2526_x_zm_rtaid%253DLe30iYENQ7Oz09-6XiRodw.1722720173320.5ca1e6651661b022ad92de02a35c40a6&dsh=S-281526729%3A1722720312758671&access_type=offline&client_id=849883241272-ed6lnodi1grnoomiuknqkq2rbvd2udku.apps.googleusercontent.com&ddm=0&o2v=2&prompt=select_account&redirect_uri=https%3A%2F%2Fzoom.us%2Fgoogle%2Foauth&response_type=code&scope=profile+email&service=lso&state=OHhYazhoMUxUYS1MUm5NMGRPVXRjQSxnb29nbGVfc2lnbmlu&flowName=GeneralOAuthFlow&continue=https%3A%2F%2Faccounts.google.com%2Fsignin%2Foauth%2Fconsent%3Fauthuser%3Dunknown%26part%3DAJi8hAPo1pO2TBbE-x9nPQwHbcJMy1JdVLo_wwCMwR_JBDYKAn4TI2P1afU2NQRS2gEqetq8e3--FPw5oTbfqgLOcDM-_W9Oe5KBg3arFmnSA221nilIab124VdaCejv0qjOkBp4g0xc--YtSX8zXSkxPPg0UxNvta6IXnzxm0yZCuyLuImS5fpqOHW9pi0id9x8Naj0-jPfzFDxwXM7mP21oG9eaZmbd0I13ncxfDOIs2ytK--DnlyxUxxgrdsp1VcEcmzatco_Ns6ThuuPsFQiT40dBTkDKRk9KZG7-FJESkHIusvpi51t6x983I8PDIzgtKxILLfp_mIc5ZyLIbfjttfe7xI1DxMVsSAgPB22Mjhnp4fuiDZnVyJ1z370WH7ISsU94f7Wx9AOZvfosPh3468CkabZWG4TRL44gmX3_nD3FD5Vqj9CM07r3R4Jt5a74ya8JqCThE1qWsOWInBp3Bz2Wh2WqA%26flowName%3DGeneralOAuthFlow%26as%3DS-281526729%253A1722720312758671%26client_id%3D849883241272-ed6lnodi1grnoomiuknqkq2rbvd2udku.apps.googleusercontent.com%23&app_domain=https%3A%2F%2Fzoom.us&rart=ANgoxceSzqcQIvlHl3mNVBldm0CCGyyuObU6tCTT8Ej99ULMq2xjF1XG16usoS2ZmbAEpAOWLoE_mvDt0Lr9qCOG5l-tmauukjE6g_OEOdlaV8jxYVVXcVk",
          "_blank",
          "noreferrer"
        );
        break;
      case "facebook":
        window.open(
          "https://www.facebook.com/login.php?skip_api_login=1&api_key=113289095462482&kid_directed_site=0&app_id=113289095462482&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv18.0%2Fdialog%2Foauth%3Fresponse_type%3Dcode%26client_id%3D113289095462482%26scope%3Demail%252Cpublic_profile%26redirect_uri%3Dhttps%253A%252F%252Fzoom.us%252Ffacebook%252Foauth%26state%3DOHhYazhoMUxUYS1MUm5NMGRPVXRjQSxmYWNlYm9va19zaWduaW4%26_x_zm_rtaid%3DLe30iYENQ7Oz09-6XiRodw.1722720173320.5ca1e6651661b022ad92de02a35c40a6%26_x_zm_rhtaid%3D755%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D53b0a444-102e-4327-abb9-682c77d42eb3%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fzoom.us%2Ffacebook%2Foauth%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3DOHhYazhoMUxUYS1MUm5NMGRPVXRjQSxmYWNlYm9va19zaWduaW4%23_%3D_&display=page&locale=ko_KR&pl_dbl=0",
          "_blank",
          "noreferrer"
        );
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="text-zoomagreegrey text-sm font-semibold mt-[16px]">
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
              onClick={linkHandle}
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
              onClick={linkHandle}
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
              onClick={linkHandle}
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
              onClick={linkHandle}
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
    </>
  );
}

export default ZoomSsoList;
