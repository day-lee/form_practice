// C1. Header -> language select

// C2. LoginForm
//  -left: img
//  - right: input & Btn

//  C3. SsoList

import ZoomSignin from "./ZoomSignin";
import ZoomSsoList from "./ZoomSsoList";
import zoomhelpbf from "../assets/zoom-help-1.png";
import zoomhelpaf from "../assets/zoom-help-2.png";
import { useState } from "react";

function ZoomPage() {
  const [isHelp, setIsHelp] = useState(false);
  const [isHoverd, setIsHovered] = useState(false);

  const helpHandle = () => {
    setIsHelp(true);
  };

  const handleHover = () => {
    setIsHovered(!isHoverd);
  };

  return (
    <>
      <ZoomSignin help={isHelp} helpHandle={helpHandle} />
      <ZoomSsoList />
      <button
        className="absolute bottom-10 right-5"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
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
