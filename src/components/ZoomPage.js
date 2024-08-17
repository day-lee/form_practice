import { useState } from "react";

import ZoomSignin from "./ZoomSignin";
import ZoomSsoList from "./ZoomSsoList";
import ZoomSupport from "./ZoomSupport";

import zoomImg from "../assets/zoom-img.png";
import zoomhelpbf from "../assets/zoom-help-1.png";
import zoomhelpaf from "../assets/zoom-help-2.png";

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
    </>
  );
}

export default ZoomPage;
