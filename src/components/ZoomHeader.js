import zoomLogo from "../assets/zoom-logo.png";
import ZoomLanguageDropdown from "./ZoomLanguageDropdown.js";

function ZoomHeader() {
  const linkSignup = () => {
    window.open("https://zoom.us/signup#/signup", "_blank");
  };

  const linkSupport = () => {
    window.open("https://support.zoom.com/hc/en", "_blank");
  };
  return (
    <>
      <div className="flex justify-between relative  bg-white text-zoomdarkblue font-semibold text-[14px] border-b-2">
        <div className="ml-10 py-4">
          <img
            className="bg-white w-[110px] h-[25px]"
            src={zoomLogo}
            alt="zoomlogo"
          />
        </div>
        <div className="flex absolute right-0 pt-4">
          <div className="mr-1 text-black hidden sm:inline-flex font-normal">
            <span>New to Zoom? </span>
          </div>
          <div className=" mr-3 sm:mr-10">
            <button
              className="hover:underline underline-offset-2"
              onClick={linkSignup}
            >
              Sign Up Free
            </button>
          </div>

          <div className="mr-10 hidden sm:inline-flex">
            <button
              className="hover:text-zoomdarkblue hover:underline underline-offset-2"
              onClick={linkSupport}
            >
              Support
            </button>
          </div>
          <div className="mr-10 hover:bg-blue">
            <ZoomLanguageDropdown />
          </div>
        </div>
      </div>
    </>
  );
}

export default ZoomHeader;
