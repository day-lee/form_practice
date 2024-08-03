// C1. Header -> language select

// C2. LoginForm
//  -left: img
//  - right: input & Btn

//  C3. SsoList

import ZoomHeader from "./ZoomHeader";
import ZoomSignin from "./ZoomSignin";
import ZoomSsoList from "./ZoomSsoList";
import zoomhelpbf from "../assets/zoom-help-1.png";
import zoomhelpaf from "../assets/zoom-help-2.png";

function ZoomPage() {
  return (
    <>
      <ZoomHeader />
      <ZoomSignin />
      <ZoomSsoList />
      <img src={zoomhelpbf} alt="zoomHelpBf" />
      <img src={zoomhelpaf} alt="zoomHelpAf" />
    </>
  );
}

export default ZoomPage;
