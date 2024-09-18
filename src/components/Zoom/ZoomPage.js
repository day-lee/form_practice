import { useState } from "react";

import ZoomHeader from "./ZoomHeader";
import ZoomSignin from "./ZoomSignin";
import ZoomSupport from "./ZoomSupport";

import zoomhelpbf from "../../assets/zoom-help-1.png";
import zoomhelpaf from "../../assets/zoom-help-2.png";
import zoomImg from "../../assets/zoom-img.png";
import zoomAdImg from "../../assets/zoomAd.png";

function ZoomPage() {
  const [isHelp, setIsHelp] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClose, setIsClose] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const handleClose = () => {
    setIsClose(!isClose);
    setIsModalOpen(false);
  };

  const toggleSupportModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="flex flex-col bg-white w-screen">
        <ZoomHeader />
        <div className="flex relative w-full mx-auto sm:h-[900px] h-[1000px]">
          {/* desktop img */}
          <div className="bg-zoomgrey lg:w-3/5 lg:p-[6rem]">
            <div className="hidden lg:pt-[160px] lg:inline-block">
              <img
                className="w-[400px] min-w-[360px]"
                src={zoomImg}
                alt="zoomimg"
              />
            </div>
            <div className="absolute top-16 left-[90px] hidden 2xl:pt-[160px] 2xl:inline-block z-10">
              <a
                href="https://www.zoom.com/en/blog/zoom-docs-guide/?itm_source=signinpage&itm_medium=imm-en&itm_campaign=FY25_ZoomDocs_Aug5"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-[555px] min-w-[360px]"
                  src={zoomAdImg}
                  alt="zoomAdimg"
                />
              </a>
            </div>
          </div>
          <div className="relative flex flex-col items-center bg-white pt-20 px-16 py-5 w-full sm:h-[900px] h-[1000px]">
            <div className="flex justify-center absolute w-full bg-zoomgrey top-0 lg:hidden">
              <img className="w-[205px]" src={zoomImg} alt="zoomimg" />
            </div>
            <div className="absolute top-[200px] lg:top-20 h-[536px]">
              <div className="">
                <ZoomSignin help={isHelp} helpHandle={() => setIsHelp(true)} />
              </div>
              <ZoomSupport
                close={isClose}
                closeHandle={handleClose}
                isModalOpen={isModalOpen}
                closeSupportModal={toggleSupportModal}
              />
            </div>
          </div>
          <button
            className="fixed bottom-5 right-5"
            aria-label="help button"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            onClick={handleClose}
          >
            {isHelp && (
              <img
                className="b-2"
                src={isHovered ? zoomhelpaf : zoomhelpbf}
                alt="help"
              />
            )}
          </button>
        </div>
      </div>
    </>
  );
}

export default ZoomPage;
