import { hasSelectionSupport } from "@testing-library/user-event/dist/utils/index.js";
import zoomLogo from "../assets/zoom-logo.png";
import LanguageDropdown from "./LanguageDropdown.js";

function Header() {
  const linkSignup = () => {
    window.open("https://zoom.us/signup#/signup", "_blank");
  };

  const linkSupport = () => {
    window.open("https://support.zoom.com/hc/en", "_blank");
  };
  return (
    <>
      <img src={zoomLogo} alt="zoomlogo" />
      <span>New to Zoom? </span>
      <button className="" onClick={linkSignup}>
        Sign Up Free
      </button>
      <button className="" onClick={linkSupport}>
        Support
      </button>

      <LanguageDropdown />
    </>
  );
}

export default Header;
