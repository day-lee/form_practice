import { useState } from "react";

import ZoomHeader from "./ZoomHeader";
import ZoomSignin from "./ZoomSignin";
import ZoomSsoList from "./ZoomSsoList";
import ZoomSupport from "./ZoomSupport";

import zoomhelpbf from "../assets/zoom-help-1.png";
import zoomhelpaf from "../assets/zoom-help-2.png";
import zoomImg from "../assets/zoom-img.png";

function ZoomPage() {
  const [isHelp, setIsHelp] = useState(false);
  const [isHoverd, setIsHovered] = useState(false);
  const [isClose, setIsClose] = useState(true);

  const helpHandle = () => {
    setIsHelp(true);
  };

  const handleHover = () => {
    setIsHovered(!isHoverd);
  };

  const handleClose = () => {
    setIsClose(!isClose);
  };

  return (
    <>
      <div className="flex flex-col bg-white w-screen">
        <ZoomHeader />
        <div className="flex relative bg-white w-full sm:h-[900px] h-[1000px]">
          <div className="bg-zoomgrey w-1/2 sm:p-[6rem]">
            <div>
              <div className="pt-[160px]">
                {/* desktop img */}
                <img src={zoomImg} alt="zoomimg" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center bg-white pt-20 px-16 py-5 w-full sm:h-[900px] h-[1000px]">
            <div className="w-[352px] h-[536px]">
              <div className="">
                {/* mobile img */}
                <div className="sm:hidden">
                  <img src={zoomImg} alt="zoomimg" />
                </div>
                <ZoomSignin help={isHelp} helpHandle={helpHandle} />
                <ZoomSsoList />
              </div>
              <ZoomSupport close={isClose} closeHandle={handleClose} />
              <button
                className="absolute bottom-10 right-5"
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
                onClick={handleClose}
              >
                {isHelp && (
                  <img
                    className="b-2"
                    src={isHoverd ? zoomhelpaf : zoomhelpbf}
                    alt="help"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ZoomPage;
